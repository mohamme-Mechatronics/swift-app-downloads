import { A as LanguageRuntime, O as applyWaqf, k as diacritizeNumberWords, t as ClickSoundRuntime } from "./click-sound-_0sOe0OB.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { z } from "zod";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-DB70uyxF.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset?.();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ACTES — حلول الطاقة" },
			{
				name: "description",
				content: "منصة أكتس لحلول أنظمة الطاقة الشمسية."
			},
			{
				name: "author",
				content: "ACTES"
			},
			{
				property: "og:title",
				content: "ACTES — حلول الطاقة"
			},
			{
				property: "og:description",
				content: "منصة أكتس لحلول أنظمة الطاقة الشمسية."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "theme-color",
				content: "#e30613"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "ACTES"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "default"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "stylesheet",
				href: "/fonts/fonts.css"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ jsxs(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ jsx(Outlet, {}),
			/* @__PURE__ */ jsx(LanguageRuntime, {}),
			/* @__PURE__ */ jsx(ClickSoundRuntime, {})
		]
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-FbTiS9m3.js");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "ACTES — حلول أنظمة الطاقة الشمسية" },
		{
			name: "description",
			content: "منصة أكتس لتصميم منظومات الطاقة الشمسية وإعداد عروض الأسعار ودراسات الأداء والمخططات."
		},
		{
			property: "og:title",
			content: "ACTES — حلول أنظمة الطاقة الشمسية"
		},
		{
			property: "og:description",
			content: "صمّم منظومتك واحصل على عرض سعر ودراسة أداء ومخطط واضح."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
/** المنتج المعتمد المطابق لبند عرض السعر (ألواح / إنفرتر / بطارية / كابينة). */
/** كل مواصفات الصنف المعتمدة + زرّا الكتالوج العربي والإنجليزي. */
//#endregion
//#region src/routes/downloads.tsx
var $$splitComponentImporter$4 = () => import("./downloads-FsSQ0nf5.js");
var Route$7 = createFileRoute("/downloads")({
	head: () => ({ meta: [
		{ title: "تحميل تطبيق ACTES لويندوز" },
		{
			name: "description",
			content: "تحميل تطبيق ACTES Desktop الخفيف لنظام ويندوز — أقل من 2 ميغابايت."
		},
		{
			property: "og:title",
			content: "تحميل تطبيق ACTES لويندوز"
		},
		{
			property: "og:description",
			content: "تطبيق سطح مكتب خفيف لويندوز 10 و11 بحجم أقل من 2 ميغابايت."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/hithium.tsx
var $$splitComponentImporter$3 = () => import("./hithium-CsYZyke4.js");
var Route$6 = createFileRoute("/hithium")({
	head: () => ({ meta: [
		{ title: "HiTHIUM — أنظمة تخزين الطاقة بالبطاريات | ACTES" },
		{
			name: "description",
			content: "HiTHIUM HeroEE: بطاريات منزلية وخزانات تخزين تجارية وصناعية بخلايا 314Ah وعمر 11000 دورة — المواصفات والكتالوجات لدى ACTES."
		},
		{
			property: "og:title",
			content: "HiTHIUM — تخزين طاقة آمن وطويل العمر"
		},
		{
			property: "og:description",
			content: "حلول HiTHIUM لتخزين الطاقة للمنازل والقطاع التجاري والصناعي، بالعربية عبر ACTES."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/lipower.tsx
var $$splitComponentImporter$2 = () => import("./lipower-YCTT53ag.js");
var Route$5 = createFileRoute("/lipower")({
	head: () => ({ meta: [
		{ title: "Li-Power — إنفرترات هجينة | ACTES" },
		{
			name: "description",
			content: "إنفرترات Li-Power الهجينة 1.6 و4 و6.2 كيلوواط: المواصفات المعتمدة والمزايا والكتالوجات العربية لدى ACTES."
		},
		{
			property: "og:title",
			content: "Li-Power — إنفرترات هجينة | ACTES"
		},
		{
			property: "og:description",
			content: "تعرّف على إنفرترات Li-Power الهجينة ومواصفاتها وكتالوجاتها المعتمدة."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/pylontech.tsx
var $$splitComponentImporter$1 = () => import("./pylontech-Db0jf0BY.js");
var Route$4 = createFileRoute("/pylontech")({
	head: () => ({ meta: [
		{ title: "بايلونتك العالمية — أنظمة تخزين الطاقة بالبطاريات | ACTES" },
		{
			name: "description",
			content: "بايلونتك: المورّد الرائد عالمياً لأنظمة تخزين الطاقة بالبطاريات للمنازل والمرافق والقطاع التجاري والصناعي — بالعربية عبر ACTES."
		},
		{
			property: "og:title",
			content: "بايلونتك العالمية — حرّر طاقتك بشكل مستدام"
		},
		{
			property: "og:description",
			content: "أنظمة تخزين الطاقة من بايلونتك للمنازل والمشاريع التجارية والصناعية والمرافق."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/suntech.tsx
var $$splitComponentImporter = () => import("./suntech-B-sp-Svf.js");
var Route$3 = createFileRoute("/suntech")({
	head: () => ({ meta: [
		{ title: "Suntech — ألواح شمسية | ACTES الوكيل المعتمد" },
		{
			name: "description",
			content: "موقع Suntech بالعربية: ألواح Ultra Series وN-Type ثنائية الوجه، المشاريع، التنزيلات والكتالوجات العربية لدى ACTES."
		},
		{
			property: "og:title",
			content: "Suntech — ألواح شمسية | ACTES"
		},
		{
			property: "og:description",
			content: "25 عاماً من تصنيع الألواح الكهروضوئية، أكثر من 55 GW شحنات عالمية."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routes/api/tts.ts
var Body = z.object({
	text: z.string().min(1).max(900),
	lang: z.enum([
		"ar",
		"en",
		"zh"
	]).default("ar")
});
var INSTRUCTIONS = {
	ar: "اقرأ النص العربي التالي بالفصحى بأسلوب معلق مؤسسي راقٍ لكبرى شركات الطاقة العالمية، نبرة رجالية دافئة ورخيمة وواثقة، فصاحة متقنة ومخارج حروف واضحة ومريحة للأذن. التزم بالتشكيل المكتوب على كل حرف حرفياً. قف على أواخر الكلمات بالسكون قبل علامات الترقيم وفي نهاية الجملة، ولا تُشبع الحركة الأخيرة أبداً. لا تترجم ولا تضف أي كلام:",
	en: "Say the following text in English only, in a warm, rich, confident corporate male narrator voice for a global energy company, with polished diction and natural pacing. Do not add anything else:",
	zh: "请用标准普通话以国际能源企业官方男声旁白的风格朗读以下文字，声音温暖浑厚、自信清晰，语速自然，不要添加任何其他内容："
};
var Route$2 = createFileRoute("/api/tts")({ server: { handlers: { POST: async ({ request }) => {
	const key = process.env["LOVABLE_API_KEY"];
	if (!key) return new Response("Missing key", { status: 500 });
	const parsed = Body.safeParse(await request.json().catch(() => null));
	if (!parsed.success) return new Response("Bad request", { status: 400 });
	const { lang } = parsed.data;
	const text = lang === "ar" ? applyWaqf(diacritizeNumberWords(parsed.data.text)) : parsed.data.text;
	const upstream = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${key}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			model: "google/gemini-3.1-flash-tts-preview",
			contents: [{
				role: "user",
				parts: [{ text: `${INSTRUCTIONS[lang]} ${text}` }]
			}],
			generationConfig: {
				responseModalities: ["AUDIO"],
				speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: "Enceladus" } } }
			},
			stream_format: "audio"
		})
	});
	if (!upstream.ok) return new Response(await upstream.text(), { status: upstream.status });
	return new Response(upstream.body, { headers: {
		"Content-Type": upstream.headers.get("Content-Type") || "audio/wav",
		"Cache-Control": "private, max-age=86400"
	} });
} } } });
//#endregion
//#region src/routes/api/public/orders.ts
var CORS = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "POST, OPTIONS",
	"Access-Control-Allow-Headers": "Content-Type"
};
var payload = z.record(z.string(), z.unknown());
var schema$1 = z.discriminatedUnion("action", [z.object({
	action: z.literal("push"),
	order: payload,
	notifs: z.array(payload).max(200).default([])
}), z.object({
	action: z.literal("pull"),
	items: z.array(z.object({
		id: z.string().max(120),
		token: z.string().min(8).max(200)
	})).max(100).default([])
})]);
var json = (body, status = 200) => new Response(JSON.stringify(body), {
	status,
	headers: {
		...CORS,
		"Content-Type": "application/json"
	}
});
var Route$1 = createFileRoute("/api/public/orders")({ server: { handlers: {
	OPTIONS: async () => new Response(null, {
		status: 204,
		headers: CORS
	}),
	POST: async ({ request }) => {
		const raw = await request.text();
		if (raw.length > 2e6) return json({
			ok: false,
			error: "too_large"
		}, 413);
		let parsed;
		try {
			parsed = schema$1.safeParse(JSON.parse(raw));
		} catch {
			return json({
				ok: false,
				error: "bad_json"
			}, 400);
		}
		if (!parsed.success) return json({
			ok: false,
			error: "invalid"
		}, 400);
		const { supabaseAdmin: db } = await import("./client.server-KzwUIAkW.js");
		const now = (/* @__PURE__ */ new Date()).toISOString();
		const data = parsed.data;
		if (data.action === "push") {
			const order = data.order;
			const id = String(order["id"] ?? "");
			const token = String(order["accessToken"] ?? "");
			if (!id || token.length < 8) return json({
				ok: false,
				error: "missing_fields"
			}, 400);
			const existing = await db.from("orders").select("payload").eq("id", id).maybeSingle();
			if (existing.error) return json({
				ok: false,
				error: "db"
			}, 500);
			if (existing.data) {
				const stored = String(existing.data.payload?.["accessToken"] ?? "");
				if (!stored || stored !== token) return json({
					ok: false,
					error: "forbidden"
				}, 403);
			}
			if ((await db.from("orders").upsert({
				id,
				payload: order,
				updated_at: now
			})).error) return json({
				ok: false,
				error: "db"
			}, 500);
			const own = data.notifs.filter((n) => String(n["orderId"] ?? "") === id && n["id"]);
			if (own.length) {
				if ((await db.from("notifications").upsert(own.map((n) => ({
					id: String(n["id"]),
					payload: n,
					updated_at: now
				})))).error) return json({
					ok: false,
					error: "db"
				}, 500);
			}
			return json({ ok: true });
		}
		const items = data.items;
		if (!items.length) return json({
			orders: [],
			notifs: []
		});
		const res = await db.from("orders").select("id, payload").in("id", items.map((i) => i.id));
		if (res.error) return json({
			orders: [],
			notifs: []
		}, 500);
		const tokens = new Map(items.map((i) => [i.id, i.token]));
		const orders = (res.data ?? []).filter((r) => String(r.payload?.["accessToken"] ?? "") === tokens.get(r.id)).map((r) => r.payload);
		if (!orders.length) return json({
			orders: [],
			notifs: []
		});
		const ids = orders.map((o) => String(o["id"]));
		return json({
			orders,
			notifs: ((await db.from("notifications").select("payload").in("payload->>orderId", ids).limit(2e3)).data ?? []).map((r) => r.payload)
		});
	}
} } });
//#endregion
//#region src/routes/api/public/wa-invoice.ts
async function getDb() {
	const { supabaseAdmin } = await import("./client.server-KzwUIAkW.js");
	return supabaseAdmin;
}
/**
* نقطة استقبال قرار الإدارة (تأكيد/إلغاء الفاتورة).
* POST/GET  /api/public/wa-invoice
* body/query: { action: "confirm" | "cancel", ref: "<orderId | quoteNumber | transferRef>" }
* أو: { buttonId: "invoice_confirm:<ref>" }
*/
var CONFIRM_CLIENT_MESSAGE = "تم تأكيد فاتورتك، وسيتواصل بك مسؤول المبيعات خلال لحظات.";
var REJECT_CLIENT_MESSAGE = "عذراً، رقم الحوالة أو رقم مرجع العملية غير صحيح. يرجى إعادة إدخال رقم الحوالة أو رقم مرجع العملية.";
var PAYMENT_KINDS = [
	"transfer",
	"payment_proof",
	"cod",
	"purchase_confirmed",
	"payment_resubmitted"
];
var schema = z.object({
	action: z.enum(["confirm", "cancel"]).optional(),
	ref: z.string().max(120).optional(),
	orderId: z.string().max(120).optional(),
	buttonId: z.string().max(200).optional(),
	text: z.string().max(400).optional()
});
function parseIntent(input) {
	let action = input.action ?? null;
	let ref = input.ref || input.orderId || "";
	const button = input.buttonId || "";
	if (button.startsWith("invoice_confirm:")) {
		action = "confirm";
		ref = ref || button.slice(16);
	} else if (button.startsWith("invoice_cancel:")) {
		action = "cancel";
		ref = ref || button.slice(15);
	}
	if (!action && input.text) {
		const t = input.text;
		if (/تأكيد|تاكيد|confirm|✅/i.test(t)) action = "confirm";
		else if (/إلغاء|الغاء|cancel|رفض|❌/i.test(t)) action = "cancel";
		if (!ref) ref = (t.match(/(ord-[a-z0-9]+)/i)?.[1] ?? t.match(/\b(\d{4,})\b/)?.[1] ?? "").trim();
	}
	return {
		action,
		ref: ref.trim()
	};
}
function uid(prefix) {
	return `${prefix}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
}
async function handle(input) {
	const { action, ref } = parseIntent(input);
	if (!action) return Response.json({
		ok: false,
		error: "missing_action"
	}, { status: 400 });
	if (!ref) return Response.json({
		ok: false,
		error: "missing_ref"
	}, { status: 400 });
	const supabaseAdmin = await getDb();
	let order = null;
	const byId = await supabaseAdmin.from("orders").select("id, payload").eq("id", ref).maybeSingle();
	if (byId.data) order = byId.data.payload;
	if (!order) {
		const match = ((await supabaseAdmin.from("orders").select("id, payload").order("created_at", { ascending: false }).limit(300)).data ?? []).find((row) => row.payload?.["quoteNumber"] === ref || row.payload?.["transferRef"] === ref || String(row.payload?.["transferRef"] || "").replace(/\D/g, "") === ref.replace(/\D/g, ""));
		if (match) order = match.payload;
	}
	if (!order) return Response.json({
		ok: false,
		error: "order_not_found",
		ref
	}, { status: 404 });
	const now = Date.now();
	const status = action === "cancel" ? "cancelled" : order["method"] === "cod" ? "confirmed" : "payment_verified";
	const next = {
		...order,
		status,
		needsPaymentFix: action === "cancel",
		history: [...order["history"] ?? [], {
			status,
			at: now
		}]
	};
	await supabaseAdmin.from("orders").upsert({
		id: String(next["id"]),
		payload: next,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	});
	const notifRows = (await supabaseAdmin.from("notifications").select("id, payload").limit(1e3)).data ?? [];
	const related = notifRows.filter((row) => row.payload?.["orderId"] === next["id"] && row.payload?.["audience"] === "admin" && PAYMENT_KINDS.includes(String(row.payload?.["kind"])));
	if (related.length) await supabaseAdmin.from("notifications").upsert(related.map((row) => ({
		id: row.id,
		payload: {
			...row.payload,
			state: action === "confirm" ? "confirmed" : "cancelled"
		},
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	})));
	const kind = action === "confirm" ? "purchase_confirmed" : "invoice_rejected";
	const label = action === "confirm" ? "شراء مؤكد" : "إلغاء الفاتورة";
	if (!(action === "confirm" && notifRows.some((row) => row.payload?.["orderId"] === next["id"] && row.payload?.["audience"] === "client" && row.payload?.["kind"] === "purchase_confirmed"))) {
		const clientNotif = {
			id: uid("n"),
			audience: "client",
			kind,
			orderId: next["id"],
			title: `${label} — ${next["quoteNumber"] || next["id"]}`,
			body: action === "confirm" ? CONFIRM_CLIENT_MESSAGE : REJECT_CLIENT_MESSAGE,
			state: "sent",
			createdAt: now
		};
		await supabaseAdmin.from("notifications").upsert({
			id: clientNotif.id,
			payload: clientNotif,
			updated_at: (/* @__PURE__ */ new Date()).toISOString()
		});
	}
	const adminNotif = {
		id: uid("n"),
		audience: "admin",
		kind: action === "confirm" ? "purchase_confirmed" : "invoice_rejected",
		orderId: next["id"],
		title: `${action === "confirm" ? "تم تأكيد فاتورة" : "تم إلغاء فاتورة"} — ${next["quoteNumber"] || next["id"]}`,
		body: action === "confirm" ? "تم تأكيد الفاتورة وإشعار العميل داخل التطبيق." : "تم إلغاء الفاتورة وطُلب من العميل إعادة إدخال رقم الحوالة.",
		state: action === "confirm" ? "confirmed" : "cancelled",
		createdAt: now
	};
	await supabaseAdmin.from("notifications").upsert({
		id: adminNotif.id,
		payload: adminNotif,
		updated_at: (/* @__PURE__ */ new Date()).toISOString()
	});
	return Response.json({
		ok: true,
		action,
		orderId: next["id"],
		status
	});
}
var Route = createFileRoute("/api/public/wa-invoice")({ server: { handlers: {
	GET: async () => Response.json({
		ok: false,
		error: "method_not_allowed"
	}, { status: 405 }),
	POST: async ({ request }) => {
		const { validAdminPassword } = await import("./admin-password.server-BGD90wUt.js");
		if (!await validAdminPassword(request.headers.get("X-Admin-Password") || "")) return Response.json({
			ok: false,
			error: "unauthorized"
		}, { status: 401 });
		let raw = {};
		try {
			raw = await request.json();
		} catch {
			raw = {};
		}
		const parsed = schema.safeParse(raw);
		if (!parsed.success) return Response.json({
			ok: false,
			error: "bad_input"
		}, { status: 400 });
		return handle(parsed.data);
	},
	OPTIONS: async () => new Response(null, { status: 204 })
} } });
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$8.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	DownloadsRoute: Route$7.update({
		id: "/downloads",
		path: "/downloads",
		getParentRoute: () => Route$9
	}),
	HithiumRoute: Route$6.update({
		id: "/hithium",
		path: "/hithium",
		getParentRoute: () => Route$9
	}),
	LipowerRoute: Route$5.update({
		id: "/lipower",
		path: "/lipower",
		getParentRoute: () => Route$9
	}),
	PylontechRoute: Route$4.update({
		id: "/pylontech",
		path: "/pylontech",
		getParentRoute: () => Route$9
	}),
	SuntechRoute: Route$3.update({
		id: "/suntech",
		path: "/suntech",
		getParentRoute: () => Route$9
	}),
	ApiTtsRoute: Route$2.update({
		id: "/api/tts",
		path: "/api/tts",
		getParentRoute: () => Route$9
	}),
	ApiPublicOrdersRoute: Route$1.update({
		id: "/api/public/orders",
		path: "/api/public/orders",
		getParentRoute: () => Route$9
	}),
	ApiPublicWaInvoiceRoute: Route.update({
		id: "/api/public/wa-invoice",
		path: "/api/public/wa-invoice",
		getParentRoute: () => Route$9
	})
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
