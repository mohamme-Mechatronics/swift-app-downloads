import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/pdf-pages.tsx
var manifestPromise = null;
function loadManifest() {
	manifestPromise ??= fetch("/catalogs/pages/manifest.json").then((r) => r.ok ? r.json() : {}).catch(() => ({}));
	return manifestPromise;
}
/** يعرض صفحات الكتالوج: صور جاهزة خفيفة إن وُجدت (فوري)، وإلا يرسم ملف PDF. */
function PdfPages({ url }) {
	const [pages, setPages] = useState(void 0);
	useEffect(() => {
		let alive = true;
		setPages(void 0);
		loadManifest().then((m) => {
			if (alive) setPages(m[url] ?? null);
		});
		return () => {
			alive = false;
		};
	}, [url]);
	if (pages === void 0) return /* @__PURE__ */ jsx("div", { className: "h-full w-full flex-1 bg-muted" });
	if (pages === null) return /* @__PURE__ */ jsx(PdfCanvas, { url });
	const base = `/catalogs/pages/${url.replace(/^\/catalogs\//, "").replace(/\.pdf$/i, "")}`;
	return /* @__PURE__ */ jsx("div", {
		className: "h-full w-full flex-1 overflow-auto bg-muted p-2",
		children: Array.from({ length: pages }, (_, i) => /* @__PURE__ */ jsx("img", {
			src: `${base}/${i + 1}.webp`,
			alt: `صفحة ${i + 1}`,
			loading: i === 0 ? "eager" : "lazy",
			decoding: "async",
			className: "mb-2 block h-auto w-full rounded bg-card shadow"
		}, i))
	});
}
function PdfCanvas({ url }) {
	const box = useRef(null);
	const [state, setState] = useState("loading");
	useEffect(() => {
		let cancelled = false;
		const el = box.current;
		if (!el) return;
		el.innerHTML = "";
		setState("loading");
		(async () => {
			try {
				const pdfjs = await import("pdfjs-dist");
				const worker = (await import("./pdf.worker.min-rIC0noZo.js")).default;
				pdfjs.GlobalWorkerOptions.workerSrc = worker;
				const doc = await pdfjs.getDocument({
					url,
					disableFontFace: true
				}).promise;
				const width = el.clientWidth || 360;
				const dpr = Math.min(window.devicePixelRatio || 1, 2);
				for (let i = 1; i <= doc.numPages; i++) {
					if (cancelled) return;
					const page = await doc.getPage(i);
					const base = page.getViewport({ scale: 1 });
					const vp = page.getViewport({ scale: width / base.width * dpr });
					const canvas = document.createElement("canvas");
					canvas.width = vp.width;
					canvas.height = vp.height;
					canvas.style.width = "100%";
					canvas.style.height = "auto";
					canvas.className = "mb-2 block rounded bg-card shadow";
					el.appendChild(canvas);
					await page.render({
						canvasContext: canvas.getContext("2d"),
						viewport: vp
					}).promise;
					if (i === 1 && !cancelled) setState("ok");
				}
			} catch {
				if (!cancelled) setState("error");
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [url]);
	return /* @__PURE__ */ jsxs("div", {
		className: "h-full w-full flex-1 overflow-auto bg-muted p-2",
		children: [
			state === "loading" && /* @__PURE__ */ jsx("p", {
				className: "py-6 text-center text-xs text-muted-foreground",
				children: "جارٍ تحميل الكتالوج…"
			}),
			state === "error" && /* @__PURE__ */ jsx("p", {
				className: "py-6 text-center text-xs text-muted-foreground",
				children: "تعذّر عرض الملف، استخدم زر «تحميل»."
			}),
			/* @__PURE__ */ jsx("div", { ref: box })
		]
	});
}
//#endregion
export { PdfPages as default };
