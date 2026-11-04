import { P as actes_logo_full_default, l as PRODUCTS, t as useResolvedVideoSrc } from "./video-source-B1u7wiho.js";
import { i as AgencyShowcase, r as AgencyBadge, t as BrandProductDetail } from "./brand-product-detail-CxwfFhF1.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, BatteryCharging, FileText, Flame, Gauge, Layers, ShieldCheck, Thermometer } from "lucide-react";
//#region src/routes/hithium.tsx?tsr-split=component
var TECH = [
	{
		icon: BatteryCharging,
		t: "خلايا 314Ah",
		d: "خلايا LiFePO4 من تصنيع HiTHIUM نفسها."
	},
	{
		icon: Gauge,
		t: "11,000 دورة",
		d: "أكثر من 15 عاماً من التشغيل اليومي."
	},
	{
		icon: Thermometer,
		t: "إدارة حرارية ذكية",
		d: "تحكم بالتبريد يحافظ على استقرار الخلايا."
	},
	{
		icon: Flame,
		t: "إطفاء مدمج",
		d: "مراقبة الحرارة والدخان ونظام إطفاء إيروسول."
	},
	{
		icon: ShieldCheck,
		t: "Smart BMS",
		d: "حمايات شاملة ومراقبة مستمرة لحالة النظام."
	},
	{
		icon: Layers,
		t: "توسعة معيارية",
		d: "تكديس وتوازي الوحدات حسب حاجة المشروع."
	}
];
var NAV = [
	{
		label: "الابتكارات",
		items: [["الخلايا Cell", "#tech"], ["السلامة والتقنيات", "#tech"]]
	},
	{
		label: "المنتجات",
		items: [
			["الخلايا Cell", "#tech"],
			["الوحدات Module", "#products"],
			["أنظمة المرافق Utility System", "#products"],
			["الأنظمة التجارية C&I System", "#products"],
			["الأنظمة السكنية Residential System", "#products"]
		]
	},
	{
		label: "الدعم",
		items: [["التنزيلات Download", "#downloads"], ["الموقع الرسمي", "https://www.hithium.com"]]
	}
];
function HiNav() {
	const [open, setOpen] = useState(null);
	return /* @__PURE__ */ jsx("nav", {
		className: "hidden h-full items-stretch gap-1 text-sm md:flex",
		onMouseLeave: () => setOpen(null),
		children: NAV.map((n, i) => /* @__PURE__ */ jsxs("div", {
			className: "relative",
			onMouseEnter: () => setOpen(i),
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => setOpen(open === i ? null : i),
				className: `border-r-2 px-3 py-1 ${open === i ? "border-primary text-primary" : "border-transparent hover:text-primary"}`,
				children: n.label
			}), open === i && /* @__PURE__ */ jsx("div", {
				className: "absolute right-0 top-full z-20 mt-3 min-w-[230px] rounded-lg bg-background py-2 shadow-xl ring-1 ring-border",
				children: n.items.map(([t, h]) => /* @__PURE__ */ jsx("a", {
					href: h,
					...h.startsWith("http") ? {
						target: "_blank",
						rel: "noopener noreferrer"
					} : {},
					onClick: () => setOpen(null),
					className: "block px-5 py-3 text-sm hover:text-primary",
					children: t
				}, t))
			})]
		}, n.label))
	});
}
function HithiumPage() {
	const items = PRODUCTS.filter((p) => /hithium/i.test(p.brand));
	const [sel, setSel] = useState(null);
	const video = useResolvedVideoSrc("/videos/hithium-heroee-maxpower-16.mp4");
	const files = items.flatMap((p) => p.files.map((f) => ({
		...f,
		name: p.model || p.name,
		ar: f.url.replace("/catalogs/", "/catalogs/official-ar/")
	})));
	return /* @__PURE__ */ jsxs("main", {
		dir: "rtl",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(AgencyBadge, { brand: "hithium" }),
			/* @__PURE__ */ jsx("header", {
				className: "sticky top-0 z-10 border-b border-border bg-card/90 backdrop-blur",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: actes_logo_full_default,
									alt: "ACTES",
									className: "h-9 w-auto"
								}),
								/* @__PURE__ */ jsx("span", { className: "h-7 w-px bg-border" }),
								/* @__PURE__ */ jsx("img", {
									src: "/brand/makers/hithium.png",
									alt: "HiTHIUM",
									className: "h-6 w-auto"
								})
							]
						}),
						/* @__PURE__ */ jsx(HiNav, {}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }), " الرئيسية"]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative overflow-hidden bg-muted",
				children: [video && /* @__PURE__ */ jsx("video", {
					src: video,
					poster: "/media/hithium-legend-112s.webp",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative mx-auto max-w-6xl px-4 py-16 text-center sm:py-24",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "/brand/makers/hithium.png",
							alt: "HiTHIUM",
							className: "mx-auto h-14 w-auto sm:h-20"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-6 text-3xl font-bold sm:text-5xl",
							children: "تخزين طاقة آمن وطويل العمر"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-4 max-w-2xl text-muted-foreground sm:text-lg",
							children: "من البطارية المنزلية إلى خزانات المصانع — حلول HiTHIUM HeroEE بخلايا 314Ah وعمر 11,000 دورة."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3",
							children: [
								["314Ah", "سعة الخلية"],
								["11,000", "دورة"],
								["IP55", "حماية الخزائن"]
							].map(([v, l]) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-xl border border-border bg-card/80 p-3",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xl font-bold text-primary",
									children: v
								}), /* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: l
								})]
							}, l))
						})
					]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "products",
				className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-12",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-8 text-center text-2xl font-bold sm:text-3xl",
					children: "المنتجات"
				}), /* @__PURE__ */ jsx("div", {
					className: "space-y-6",
					children: items.map((p) => /* @__PURE__ */ jsx(ProductBlock, {
						p,
						onOpen: () => setSel(p)
					}, p.id))
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "tech",
				className: "scroll-mt-20 bg-muted/50 py-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-6xl px-4",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "mb-8 text-center text-2xl font-bold sm:text-3xl",
						children: "التقنيات الأساسية"
					}), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3 md:grid-cols-3",
						children: TECH.map(({ icon: Icon, t, d }) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [
								/* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary" }),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 font-bold",
									children: t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: d
								})
							]
						}, t))
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "downloads",
				className: "mx-auto max-w-6xl scroll-mt-20 px-4 py-12",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "mb-6 text-center text-2xl font-bold sm:text-3xl",
						children: "مركز التنزيلات"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "divide-y divide-border rounded-2xl border border-border bg-card",
						children: files.map((f) => /* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center justify-between gap-2 p-4",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2 text-sm font-medium",
								children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ jsx("span", {
									dir: "ltr",
									children: f.name
								})]
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex gap-2 text-sm",
								children: [/* @__PURE__ */ jsx("a", {
									href: f.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "rounded-full border border-border px-3 py-1 hover:bg-muted",
									children: "English"
								}), /* @__PURE__ */ jsx("a", {
									href: f.ar,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "rounded-full border border-border px-3 py-1 hover:bg-muted",
									children: "عربي"
								})]
							})]
						}, f.url))
					}),
					/* @__PURE__ */ jsxs("p", {
						className: "mt-4 text-center text-sm text-muted-foreground",
						children: ["للمزيد: ", /* @__PURE__ */ jsx("a", {
							href: "https://www.hithium.com",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-primary underline",
							children: "الموقع الرسمي hithium.com"
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx(AgencyShowcase, { brand: "hithium" }),
			/* @__PURE__ */ jsx("footer", {
				className: "border-t border-border bg-card py-8 text-center text-sm text-muted-foreground",
				children: "HiTHIUM — متوفر لدى ACTES لحلول أنظمة الطاقة"
			}),
			sel && /* @__PURE__ */ jsx(BrandProductDetail, {
				product: sel,
				accent: "#00a0e9",
				gallery: [
					"/media/hithium-legend-112s.webp",
					"/media/hithium-legend-112c.webp",
					"/media/items/battery-hithium-legnd-16kwh.webp",
					"/media/items/battery-hithium-12v-314ah.webp"
				],
				onClose: () => setSel(null)
			})
		]
	});
}
function ProductBlock({ p, onOpen }) {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("article", {
		className: "overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid gap-5 p-5 md:grid-cols-[240px_1fr]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "flex items-center justify-center rounded-xl bg-muted p-3",
				children: /* @__PURE__ */ jsx("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					className: "max-h-56 w-auto object-contain"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("span", {
					className: "rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
					children: p.power
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "mt-3 text-lg font-bold sm:text-xl",
					children: p.name
				}),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm text-muted-foreground",
					dir: "ltr",
					style: { textAlign: "right" },
					children: p.model
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-sm leading-7",
					children: p.about
				}),
				/* @__PURE__ */ jsx("ul", {
					className: "mt-3 grid gap-1.5 sm:grid-cols-2",
					children: p.features.slice(0, 6).map((f) => /* @__PURE__ */ jsxs("li", {
						className: "flex gap-2 text-sm",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "●"
						}), f]
					}, f))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: onOpen,
							className: "rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background hover:opacity-90",
							children: "تفاصيل المنتج"
						}),
						p.specs.length > 0 && /* @__PURE__ */ jsx("button", {
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
			className: "grid gap-4 border-t border-border bg-muted/40 p-5 md:grid-cols-2",
			children: p.specs.map((g) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl bg-card p-4",
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
export { HithiumPage as component };
