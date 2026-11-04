import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/downloads.tsx?tsr-split=component
function DownloadsPage() {
	return /* @__PURE__ */ jsx("main", {
		dir: "rtl",
		className: "min-h-screen bg-background text-foreground flex items-center justify-center p-6",
		children: /* @__PURE__ */ jsxs("div", {
			className: "w-full max-w-xl bg-card border border-border rounded-3xl p-8 sm:p-10 shadow-lg",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4 mb-6",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/brand/app-icon.png",
						alt: "ACTES",
						className: "w-16 h-16 rounded-2xl"
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold",
						children: "تطبيق ACTES لويندوز"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "نسخة سطح المكتب — 64 بت"
					})] })]
				}),
				/* @__PURE__ */ jsxs("ul", {
					className: "space-y-2 text-sm text-muted-foreground mb-8",
					children: [
						/* @__PURE__ */ jsx("li", { children: "• حجم خفيف جداً: 1.6 ميغابايت فقط — لا يحتاج تثبيت." }),
						/* @__PURE__ */ jsx("li", { children: "• يعمل على ويندوز 10 و11، ويتحدّث تلقائياً بآخر نسخة." }),
						/* @__PURE__ */ jsx("li", { children: "• الفيديوهات والكتالوجات تُفتح عبر الإنترنت عند الحاجة." })
					]
				}),
				/* @__PURE__ */ jsx("a", {
					href: "/downloads/ACTES-windows-x64.zip",
					download: true,
					className: "block text-center w-full rounded-xl bg-energy text-primary-foreground font-bold py-4 text-lg hover:opacity-90 transition",
					children: "تحميل التطبيق"
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground mt-6 text-center",
					children: ["فُكّ ضغط الملف ثم شغّل ", /* @__PURE__ */ jsx("span", {
						className: "font-mono",
						children: "ACTES.exe"
					})]
				})
			]
		})
	});
}
//#endregion
export { DownloadsPage as component };
