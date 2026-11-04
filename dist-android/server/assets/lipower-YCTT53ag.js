import { P as actes_logo_full_default, l as PRODUCTS } from "./video-source-B1u7wiho.js";
import { i as AgencyShowcase, r as AgencyBadge, t as BrandProductDetail } from "./brand-product-detail-CxwfFhF1.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BatteryCharging, Cpu, FileText, Gauge, ShieldCheck, Sun, Wifi } from "lucide-react";
//#region src/routes/lipower.tsx?tsr-split=component
var HIGHLIGHTS = [
	{
		icon: Sun,
		title: "شحن شمسي MPPT",
		text: "استغلال أعلى للطاقة الشمسية حتى 6500W."
	},
	{
		icon: BatteryCharging,
		title: "دعم بطاريات الليثيوم",
		text: "اتصال BMS مع أشهر العلامات."
	},
	{
		icon: Wifi,
		title: "مراقبة عبر الواي فاي",
		text: "تابع منظومتك من أي مكان."
	},
	{
		icon: Gauge,
		title: "كفاءة عالية",
		text: "كفاءة تحويل تصل إلى 98%."
	},
	{
		icon: ShieldCheck,
		title: "حمايات متكاملة",
		text: "حماية من التحميل الزائد وعكس القطبية."
	},
	{
		icon: Cpu,
		title: "يعمل بدون بطارية",
		text: "خيار أوفر للمنظومات المتصلة بالشبكة."
	}
];
function LiPowerPage() {
	const items = PRODUCTS.filter((p) => p.brand === "Li-Power");
	const [sel, setSel] = useState(null);
	return /* @__PURE__ */ jsxs("main", {
		dir: "rtl",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(AgencyBadge, { brand: "lipower" }),
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: actes_logo_full_default,
								alt: "ACTES",
								className: "h-10 w-auto"
							}),
							/* @__PURE__ */ jsx("span", { className: "h-8 w-px bg-border" }),
							/* @__PURE__ */ jsx("img", {
								src: "/brand/makers/lipower.png",
								alt: "Li-Power",
								className: "h-7 w-auto"
							})
						]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/",
						className: "inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm hover:bg-muted",
						children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }), " الرئيسية"]
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-gradient-to-b from-muted to-background",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-6xl px-4 py-14 text-center sm:py-20",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "/brand/makers/lipower.png",
							alt: "Li-Power",
							className: "mx-auto h-20 w-auto sm:h-28"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 text-3xl font-bold sm:text-5xl",
							children: "إنفرترات هجينة ذكية لكل منزل"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg",
							children: "حلول Li-Power تجمع الإنفرتر والشاحن الشمسي وشاحن الشبكة في جهاز واحد، بموجة جيبية نقية وتصميم أنيق سهل التركيب."
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#products",
							className: "mt-8 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground shadow hover:opacity-90",
							children: "استعرض المنتجات"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-3",
					children: HIGHLIGHTS.map(({ icon: Icon, title, text }) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl border border-border bg-card p-5 shadow-sm",
						children: [
							/* @__PURE__ */ jsx(Icon, { className: "h-7 w-7 text-primary" }),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-3 font-bold",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: text
							})
						]
					}, title))
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "products",
				className: "mx-auto max-w-6xl scroll-mt-20 px-4 pb-16",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-8 text-center text-2xl font-bold sm:text-3xl",
					children: "منتجاتنا"
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-8",
					children: items.map((p) => /* @__PURE__ */ jsx(ProductBlock, {
						p,
						onOpen: () => setSel(p)
					}, p.id))
				})]
			}),
			/* @__PURE__ */ jsx(AgencyShowcase, { brand: "lipower" }),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border bg-card py-8 text-center text-sm text-muted-foreground",
				children: "Li-Power — متوفر لدى ACTES لحلول أنظمة الطاقة"
			}),
			sel && /* @__PURE__ */ jsx(BrandProductDetail, {
				product: sel,
				accent: "#f39200",
				gallery: ["/media/items/lipower-1.6kw-12v.webp", "/media/items/lipower-6.2kw-48v.webp"],
				onClose: () => setSel(null)
			})
		]
	});
}
function ProductBlock({ p, onOpen }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("article", {
		className: "overflow-hidden rounded-3xl border border-border bg-card shadow-sm",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-6 p-6 md:grid-cols-[280px_1fr]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center rounded-2xl bg-muted p-4",
				children: /* @__PURE__ */ jsx("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					className: "max-h-64 w-auto object-contain"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
					children: p.power
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-3 text-xl font-bold sm:text-2xl",
					children: p.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					dir: "ltr",
					style: { textAlign: "right" },
					children: p.model
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3",
					children: p.about
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-4 grid gap-2 sm:grid-cols-2",
					children: p.features.slice(0, 6).map((f) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-2 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "●"
						}), f]
					}, f))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: onOpen,
							className: "rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90",
							children: "تفاصيل المنتج"
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => setOpen((v) => !v),
							className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90",
							children: open ? "إخفاء المواصفات" : "المواصفات الفنية"
						}),
						p.files.map((f) => /* @__PURE__ */ jsxs("a", {
							href: f.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-1 rounded-full border border-border px-5 py-2 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), " الكتالوج"]
						}, f.url))
					]
				})
			] })]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "grid gap-4 border-t border-border bg-muted/40 p-6 md:grid-cols-2",
			children: p.specs.map((g) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl bg-card p-4",
				children: [/* @__PURE__ */ jsx("h4", {
					className: "mb-2 font-bold text-primary",
					children: g.title
				}), /* @__PURE__ */ jsx("table", {
					className: "w-full text-sm",
					children: /* @__PURE__ */ jsx("tbody", { children: g.rows.map(([k, v]) => /* @__PURE__ */ jsxs("tr", {
						className: "border-b border-border last:border-0",
						children: [/* @__PURE__ */ jsx("td", {
							className: "py-1.5 text-muted-foreground",
							children: k
						}), /* @__PURE__ */ jsx("td", {
							className: "py-1.5 font-medium",
							children: v
						})]
					}, k)) })
				})]
			}, g.title))
		})]
	});
}
//#endregion
export { LiPowerPage as component };
