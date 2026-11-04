import { P as actes_logo_full_default, l as PRODUCTS, r as officialCatalogUrl, t as useResolvedVideoSrc } from "./video-source-B1u7wiho.js";
import { i as AgencyShowcase, n as ProductBody, r as AgencyBadge, t as BrandProductDetail } from "./brand-product-detail-CxwfFhF1.js";
import { n as BUSINESS_PHONE, r as BUSINESS_WHATSAPP, t as BUSINESS_EMAIL } from "./contact-CJvfV2Sm.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Download, FileText, Globe, Headphones, Link2, Mail, Menu, Search, ShieldCheck, X } from "lucide-react";
import { createPortal } from "react-dom";
//#region src/lib/pylontech-solutions.ts
var PYLON_SOLUTIONS = [
	{
		id: "res",
		t: "أنظمة التخزين السكنية",
		en: "Residential ESS",
		img: "/media/pylontech/sol-ress.webp",
		pylon: "حلول تخزين منزلية من بايلونتك تخزّن فائض الطاقة الشمسية نهاراً وتغذي المنزل ليلاً وعند انقطاع الكهرباء، بخلايا ليثيوم فوسفات الحديد الآمنة وعمر يتجاوز 6000 دورة.",
		scenario: [
			"تخزين فائض الألواح نهاراً",
			"تغذية المنزل ليلاً وعند الانقطاع",
			"توسّع تدريجي حسب الحاجة"
		],
		products: ["pylontech-uf5000", "pylontech-fidus-battery-plus"],
		actes: "تصمم أكتس المنظومة المنزلية كاملة: حساب الأحمال، اختيار عدد البطاريات، الربط مع إنفرتر هجين معتمد، التركيب والتشغيل والضمان عبر الوكيل المعتمد.",
		pairs: [
			"إنفرترات Deye هجينة 3.6–12 كيلو 1 فاز",
			"إنفرترات Solis S6-EH1P/EH3P",
			"ألواح Suntech ‏595W و720W"
		]
	},
	{
		id: "ci",
		t: "التخزين التجاري والصناعي",
		en: "C&I Hybrid ESS",
		img: "/media/pylontech/sol-ci.webp",
		pylon: "كبائن تخزين متكاملة الكل-في-واحد من بايلونتك تضم البطاريات والإنفرتر الهجين ونظام التبريد السائل والحماية من الحريق في وحدة خارجية واحدة.",
		scenario: [
			"خفض استهلاك المولدات وفاتورة الديزل",
			"تخفيف ذروة الأحمال",
			"تشغيل المصانع والمنشآت على مدار الساعة"
		],
		products: ["pylontech-optimus-a300-hy", "pylontech-optimus-l260-hy"],
		actes: "تقدم أكتس دراسة جدوى اقتصادية ومخطط كهربائي (SLD) ودراسة PVsyst للمنشأة، ثم التوريد والتركيب والتشغيل مع مراقبة الأداء.",
		pairs: [
			"إنفرترات Solis ‏75–125 كيلو 3 فاز",
			"إنفرترات Deye ‏29.9–80 كيلو 3 فاز",
			"ألواح Suntech ‏720W ثنائية الوجه"
		]
	},
	{
		id: "hv",
		t: "الجهد العالي والمشاريع الكبرى",
		en: "High-Voltage Utility BESS",
		img: "/media/pylontech/sol-rbess.webp",
		pylon: "بنوك تخزين معيارية عالية الجهد من بايلونتك للمشاريع الكبيرة ومحطات الطاقة، تتوسع بالراكات حتى 1500 فولت.",
		scenario: [
			"محطات الطاقة الشمسية الكبيرة",
			"خدمات الشبكة وموازنة الأحمال",
			"مشاريع المرافق والبنية التحتية"
		],
		products: ["pylontech-powercube-m5a", "pylontech-powercube-m1c"],
		actes: "تنفذ أكتس هندسة المشروع كاملة: تصميم بنك البطاريات، التوافق مع الإنفرترات الكبيرة، المخططات ودراسات الإنتاج، والتوريد بالكتالوجات المعتمدة.",
		pairs: [
			"إنفرترات Solis وDeye عالية الجهد 3 فاز",
			"ألواح Suntech ‏720W",
			"تخزين HiTHIUM للمشاريع الكبيرة"
		]
	},
	{
		id: "off",
		t: "الأنظمة المستقلة والمتنقلة",
		en: "Off-Grid & Mobile ESS",
		img: "/media/pylontech/sol-ress.webp",
		pylon: "بطاريات ليثيوم 12 فولت الذكية من بايلونتك بديل مباشر لبطاريات الرصاص، أخف بنسبة 50% مع مراقبة عبر Bluetooth، للمركبات والقوارب والكبائن والمواقع البعيدة.",
		scenario: [
			"المواقع البعيدة خارج الشبكة",
			"المركبات والقوارب والكرفانات",
			"استبدال بطاريات الرصاص"
		],
		products: ["pylontech-rv12100ch", "pylontech-rv12200"],
		actes: "تجهز أكتس منظومات مستقلة صغيرة بعدد البطاريات المناسب وتوصيلها على التوازي، مع إنفرترات Lipower وألواح Suntech.",
		pairs: [
			"إنفرترات Lipower خارج الشبكة",
			"إنفرترات Deye ‏1 فاز",
			"ألواح Suntech ‏595W"
		]
	}
];
//#endregion
//#region src/components/pylontech-solution.tsx
function PylontechSolution({ s, products, onClose, onProduct }) {
	const list = s.products.map((id) => products.find((p) => p.id === id)).filter(Boolean);
	useEffect(() => {
		const o = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = o;
		};
	}, []);
	if (typeof document === "undefined") return null;
	return createPortal(/* @__PURE__ */ jsxs("div", {
		dir: "rtl",
		className: "fixed inset-0 z-[90] overflow-y-auto bg-background",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-5 py-3 backdrop-blur",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "/media/pylontech/logo.svg",
							alt: "PYLONTECH",
							className: "h-5 w-auto"
						}),
						/* @__PURE__ */ jsx("span", { className: "h-6 w-px bg-border" }),
						/* @__PURE__ */ jsx("img", {
							src: actes_logo_full_default,
							alt: "ACTES",
							className: "h-8 w-auto"
						})
					]
				}), /* @__PURE__ */ jsx("button", {
					"aria-label": "إغلاق",
					onClick: onClose,
					className: "rounded-full border border-border p-2 hover:bg-muted",
					children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "relative h-[300px] overflow-hidden sm:h-[380px]",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: s.img,
						alt: s.t,
						className: "h-full w-full object-cover"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" }),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-6 right-5 left-5 mx-auto max-w-5xl text-background",
						children: [/* @__PURE__ */ jsxs("p", {
							className: "text-xs tracking-widest opacity-75",
							dir: "ltr",
							style: { textAlign: "right" },
							children: ["PYLONTECH · ", s.en]
						}), /* @__PURE__ */ jsx("h1", {
							className: "mt-2 text-3xl font-bold sm:text-4xl",
							children: s.t
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-5xl space-y-10 px-5 py-10",
				children: [
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("p", {
						className: "leading-8 text-foreground/90",
						children: s.pylon
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-3",
						children: s.scenario.map((x) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 rounded-xl bg-muted/60 p-3 text-sm",
							children: [/* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 shrink-0 text-primary" }), x]
						}, x))
					})] }),
					/* @__PURE__ */ jsxs("section", {
						className: "rounded-2xl border border-primary/30 bg-primary/5 p-6",
						children: [
							/* @__PURE__ */ jsxs("h2", {
								className: "flex items-center gap-2 text-xl font-bold text-primary",
								children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5" }), "التكامل الهندسي من أكتس"]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 leading-7",
								children: s.actes
							}),
							/* @__PURE__ */ jsxs("p", {
								className: "mt-4 flex items-center gap-2 text-sm font-semibold",
								children: [/* @__PURE__ */ jsx(Link2, { className: "h-4 w-4" }), "متوافق مع منتجات أكتس:"]
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-2 flex flex-wrap gap-2",
								children: s.pairs.map((x) => /* @__PURE__ */ jsx("li", {
									className: "rounded-full border border-border bg-background px-3 py-1 text-xs",
									children: x
								}, x))
							})
						]
					}),
					/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-bold",
						children: "الكتالوجات المعتمدة (عربي / English)"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-3 divide-y divide-border rounded-xl border border-border",
						children: list.map((p) => {
							const ar = officialCatalogUrl(p, "ar"), en = officialCatalogUrl(p, "en");
							return /* @__PURE__ */ jsxs("li", {
								className: "flex items-center justify-between gap-3 p-3 text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "min-w-0 truncate",
									dir: "ltr",
									children: p.model
								}), /* @__PURE__ */ jsxs("span", {
									className: "flex shrink-0 gap-2",
									children: [
										ar && /* @__PURE__ */ jsxs("a", {
											href: ar,
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center gap-1 rounded border border-primary/40 px-2 py-1 text-xs text-primary hover:bg-primary/10",
											children: [/* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }), "عربي"]
										}),
										en && /* @__PURE__ */ jsxs("a", {
											href: en,
											target: "_blank",
											rel: "noreferrer",
											className: "flex items-center gap-1 rounded border border-border px-2 py-1 text-xs hover:bg-muted",
											dir: "ltr",
											children: [/* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }), "EN"]
										}),
										!ar && !en && /* @__PURE__ */ jsx("span", {
											className: "text-xs text-muted-foreground",
											children: "قريباً"
										})
									]
								})]
							}, p.id);
						})
					})] })
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "border-t border-border",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mx-auto max-w-7xl px-5 pt-10 text-2xl font-bold",
					children: "منتجات الحل المتوفرة لدى أكتس"
				}), list.map((p) => /* @__PURE__ */ jsx(ProductBody, {
					product: p,
					accent: "#00a5b0"
				}, p.id))]
			})
		]
	}), document.body);
}
//#endregion
//#region src/components/pylontech-nav.tsx
var SOLUTIONS = PYLON_SOLUTIONS.map((x) => ({
	t: x.t,
	d: x.en,
	h: `#sol-${x.id}`
}));
var MENUS = [{
	id: "support",
	label: "الخدمة والدعم",
	items: [
		{
			t: "كن شريكاً لنا",
			h: "#support"
		},
		{
			t: "مركز الخدمة",
			h: "#support"
		},
		{
			t: "تسجيل البطارية",
			h: "#support"
		},
		{
			t: "التحميلات",
			h: "#products"
		}
	],
	actes: {
		t: "دعم ACTES الفني",
		d: "تركيب وضمان وصيانة عبر الوكيل المعتمد",
		h: "#support"
	}
}, {
	id: "contact",
	label: "اتصل بنا",
	items: [{
		t: "تواصل معنا",
		h: "#contact"
	}, {
		t: "انضم إلينا",
		h: "#contact"
	}],
	actes: {
		t: "تواصل مع ACTES",
		d: "استفسارات منتجات بايلونتك والدعم",
		h: "#contact"
	}
}];
function Downloads({ products }) {
	const rows = products.map((p) => ({
		p,
		ar: officialCatalogUrl(p, "ar"),
		en: officialCatalogUrl(p, "en")
	})).filter((r) => r.ar || r.en);
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "mb-2 text-sm font-semibold text-[#00a5b0]",
		children: "التنزيلات — الكتالوجات (عربي / English)"
	}), /* @__PURE__ */ jsx("ul", {
		className: "divide-y divide-border rounded-lg border border-border",
		children: rows.map(({ p, ar, en }) => /* @__PURE__ */ jsxs("li", {
			className: "flex items-center justify-between gap-3 p-2.5 text-sm",
			children: [/* @__PURE__ */ jsxs("span", {
				className: "min-w-0 truncate",
				children: [
					p.name,
					" ",
					/* @__PURE__ */ jsxs("span", {
						className: "text-xs text-muted-foreground",
						dir: "ltr",
						children: [
							"(",
							p.model,
							")"
						]
					})
				]
			}), /* @__PURE__ */ jsxs("span", {
				className: "flex shrink-0 gap-2",
				children: [ar && /* @__PURE__ */ jsxs("a", {
					href: ar,
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-center gap-1 rounded border border-primary/40 px-2 py-1 text-xs text-primary hover:bg-primary/10",
					children: [/* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }), "عربي"]
				}), en && /* @__PURE__ */ jsxs("a", {
					href: en,
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-center gap-1 rounded border border-border px-2 py-1 text-xs hover:bg-muted",
					dir: "ltr",
					children: [/* @__PURE__ */ jsx(Download, { className: "h-3 w-3" }), "EN"]
				})]
			})]
		}, p.id))
	})] });
}
function ActesCard({ a, onClick }) {
	return /* @__PURE__ */ jsxs("a", {
		href: a.h,
		onClick,
		className: "mt-3 flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 p-3 hover:bg-primary/10",
		children: [/* @__PURE__ */ jsx("img", {
			src: actes_logo_full_default,
			alt: "ACTES",
			className: "h-8 w-auto"
		}), /* @__PURE__ */ jsxs("div", {
			className: "min-w-0 text-right",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "flex items-center gap-1 text-sm font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }), a.t]
			}), a.d && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-muted-foreground",
				children: a.d
			})]
		})]
	});
}
function PylontechNav({ products }) {
	const [open, setOpen] = useState(null);
	const [mobile, setMobile] = useState(false);
	const [acc, setAcc] = useState(null);
	const close = () => {
		setOpen(null);
		setMobile(false);
	};
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed inset-x-0 top-0 z-30 bg-background/95 backdrop-blur",
		onMouseLeave: () => setOpen(null),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: "/media/pylontech/logo.svg",
							alt: "PYLONTECH",
							className: "h-6 w-auto"
						}),
						/* @__PURE__ */ jsx("span", { className: "h-7 w-px bg-border" }),
						/* @__PURE__ */ jsx("img", {
							src: actes_logo_full_default,
							alt: "ACTES",
							className: "h-9 w-auto"
						})
					]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden h-full items-stretch gap-7 text-[15px] lg:flex",
					children: [{
						id: "solutions",
						label: "المنتجات والحلول",
						items: [...SOLUTIONS, {
							t: "جميع منتجات أكتس",
							h: "#products"
						}]
					}, ...MENUS].map((m) => /* @__PURE__ */ jsxs("div", {
						className: "relative flex",
						onMouseEnter: () => setOpen(m.id),
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => setOpen(open === m.id ? null : m.id),
							className: `flex items-center gap-1 border-b-2 ${open === m.id ? "border-primary text-primary" : "border-transparent hover:text-primary"}`,
							children: [m.label, /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5" })]
						}), open === m.id && m.items.length > 0 && /* @__PURE__ */ jsx("div", {
							className: "absolute right-0 top-full min-w-[220px] rounded-b-lg border border-border bg-background py-2 shadow-lg",
							children: m.items.map((it) => /* @__PURE__ */ jsx("a", {
								href: it.h,
								onClick: close,
								className: "block px-5 py-2.5 text-sm hover:bg-muted hover:text-primary",
								children: it.t
							}, it.t))
						})]
					}, m.id))
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-4 text-sm",
					children: [
						/* @__PURE__ */ jsx(Search, { className: "h-5 w-5" }),
						/* @__PURE__ */ jsxs("span", {
							className: "hidden items-center gap-1 sm:flex",
							children: [/* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }), " عالمي - عربي"]
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							"aria-label": "الرئيسية",
							className: "rounded-full border border-border p-1.5 hover:bg-muted",
							children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "القائمة",
							className: "lg:hidden",
							onClick: () => setMobile(true),
							children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
						})
					]
				})
			]
		}), mobile && /* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 z-40 lg:hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 bg-foreground/50",
				onClick: () => setMobile(false)
			}), /* @__PURE__ */ jsxs("aside", {
				className: "absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col overflow-y-auto bg-background p-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ jsx("img", {
						src: "/assets/actes-logo-full-sz9WqFkm.webp",
						alt: "ACTES",
						className: "h-9 w-auto"
					}), /* @__PURE__ */ jsx("button", {
						"aria-label": "إغلاق",
						onClick: () => setMobile(false),
						children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6" })
					})]
				}), [{
					id: "solutions",
					label: "المنتجات والحلول",
					items: SOLUTIONS,
					actes: {
						t: "متوفر لدى ACTES",
						d: "الكتالوجات المعتمدة",
						h: "#products"
					}
				}, ...MENUS].map((m) => /* @__PURE__ */ jsxs("div", {
					className: "border-b border-border",
					children: [/* @__PURE__ */ jsxs("button", {
						className: "flex w-full items-center justify-between py-4 font-medium",
						onClick: () => setAcc(acc === m.id ? null : m.id),
						children: [m.label, /* @__PURE__ */ jsx(ChevronDown, { className: `h-4 w-4 transition ${acc === m.id ? "rotate-180" : ""}` })]
					}), acc === m.id && /* @__PURE__ */ jsxs("div", {
						className: "pb-4",
						children: [
							m.items.map((it) => /* @__PURE__ */ jsx("a", {
								href: it.h,
								onClick: close,
								className: "block py-2 pr-3 text-sm text-muted-foreground",
								children: it.t
							}, it.t)),
							m.id === "support" && /* @__PURE__ */ jsx(Downloads, { products }),
							/* @__PURE__ */ jsx(ActesCard, {
								a: m.actes,
								onClick: close
							})
						]
					})]
				}, m.id))]
			})]
		})]
	});
}
//#endregion
//#region src/assets/pylon/residential-bess.webp
var residential_bess_default = "/assets/residential-bess-a7Kl_2Mf.webp";
//#endregion
//#region src/routes/pylontech.tsx?tsr-split=component
var SLIDES = [
	{
		id: "home",
		video: "/videos/pylontech-home-official.mp4",
		poster: "/media/pylontech/hero-h3x.webp",
		k: "PYLONTECH",
		t: "حرّر طاقتك بشكل مستدام",
		d: "المورّد الرائد عالمياً لأنظمة تخزين الطاقة بالبطاريات"
	},
	{
		id: "pylontech-fidus-battery-plus",
		video: "/videos/pylontech-fidus-official.mp4",
		poster: "/media/pylontech/hero-fidus.webp",
		k: "Fidus",
		t: "عبر الحدود، طاقة بلا حدود",
		d: "من 5 حتى 16 كيلوواط ساعة، توسّع حسب حاجتك"
	},
	{
		id: "pylontech-optimus-l260-hy",
		video: "",
		poster: "/media/pylontech/hero-h3x.webp",
		k: "All-in-One",
		t: "طاقة أذكى، توفير أكبر",
		d: "منظومة تخزين متكاملة الكل في واحد تُحدث ثورة في تجربة التخزين"
	}
];
var ESG = [
	{
		v: "13,949",
		u: "طن CO2e/سنة",
		l: "محطات شمسية مقترحة ومنشأة لتجنّب انبعاثات غازات الدفيئة"
	},
	{
		v: "1,387",
		u: "طن CO2e/سنة",
		l: "إعادة تدوير حرارة الغلايات المهدرة لتجنّب الانبعاثات"
	},
	{
		v: "2,495",
		u: "طن CO2e/سنة",
		l: "استرجاع طاقة التفريغ الجزئي لتجنّب الانبعاثات"
	}
];
var AWARDS = [
	{
		t: "جائزة الشفافية في ESG",
		d: "من EUPD Research تقديراً للإفصاح الشفاف والموثوق عن الاستدامة."
	},
	{
		t: "تصنيف CDP للتغيّر المناخي B",
		d: "اعتراف من CDP بالعمل المناخي الفعّال والإفصاح البيئي."
	},
	{
		t: "ميدالية EcoVadis الفضية",
		d: "ضمن أفضل 6% في القطاع من حيث أداء الاستدامة."
	}
];
var CASES = [
	{
		p: "أستراليا · 2025",
		t: "40kWh — Force H3X",
		img: "/media/pylontech/case-au.webp"
	},
	{
		p: "الصين · 2024",
		t: "تخفيف ذروة الأحمال + الاستجابة للطلب 40MW/80MWh",
		img: "/media/pylontech/case-cn.webp"
	},
	{
		p: "أوروبا · 2023",
		t: "خدمات الشبكة 400kW/432kWh",
		img: residential_bess_default
	}
];
var FOOTER = [
	{
		t: "المنتجات والحلول",
		l: [
			"التخزين السكني",
			"التخزين التجاري والصناعي",
			"الجهد العالي والمشاريع الكبرى",
			"الأنظمة المستقلة والمتنقلة"
		]
	},
	{
		t: "الخدمة والدعم",
		l: [
			"كن شريكاً لنا",
			"مركز الخدمة",
			"تسجيل البطارية",
			"التحميلات"
		]
	},
	{
		t: "من نحن",
		l: [
			"نبذة عن الشركة",
			"ثقافة الشركة",
			"البحث والتطوير",
			"التصنيع",
			"الاستدامة"
		]
	},
	{
		t: "المركز الإعلامي",
		l: [
			"الأخبار",
			"المعارض",
			"الندوات الإلكترونية",
			"أخبار Voltdeer"
		]
	},
	{
		t: "اتصل بنا",
		l: [
			"تواصل معنا",
			"انضم إلينا",
			`المبيعات: ${BUSINESS_PHONE}`,
			`الخدمة: ${BUSINESS_EMAIL}`,
			"ACTES — الوكيل المعتمد"
		]
	}
];
function PylontechPage() {
	const items = PRODUCTS.filter((p) => p.brand === "Pylontech");
	const [i, setI] = useState(0);
	const [detail, setDetail] = useState(null);
	const detailP = items.find((p) => p.id === detail);
	const [sol, setSol] = useState(null);
	const solP = PYLON_SOLUTIONS.find((x) => x.id === sol);
	useEffect(() => {
		const onHash = () => {
			const m = location.hash.match(/^#sol-(\w+)/);
			if (m) {
				setSol(m[1]);
				history.replaceState(null, "", "#solutions");
			}
		};
		onHash();
		window.addEventListener("hashchange", onHash);
		return () => window.removeEventListener("hashchange", onHash);
	}, []);
	const s = SLIDES[i] ?? SLIDES[0];
	const go = (d) => setI((x) => (x + d + SLIDES.length) % SLIDES.length);
	useEffect(() => {
		if (s.video) return;
		const t = setTimeout(() => go(1), 7e3);
		return () => clearTimeout(t);
	}, [i, s.video]);
	return /* @__PURE__ */ jsxs("main", {
		dir: "rtl",
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(AgencyBadge, { brand: "pylontech" }),
			/* @__PURE__ */ jsx(PylontechNav, { products: items }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative flex h-[100svh] min-h-[560px] items-center overflow-hidden bg-foreground text-background",
				children: [
					/* @__PURE__ */ jsx(HeroMedia, {
						video: s.video,
						poster: s.poster,
						onEnded: () => go(1)
					}, s.id),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-foreground/70 via-foreground/30 to-transparent" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative mx-auto w-full max-w-7xl px-5",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-xl",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm tracking-widest opacity-70",
									children: s.k
								}),
								/* @__PURE__ */ jsx("h1", {
									className: "mt-3 text-4xl font-bold leading-tight sm:text-6xl",
									children: s.t
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-lg opacity-80",
									children: s.d
								}),
								/* @__PURE__ */ jsx("a", {
									href: "#solutions",
									className: "mt-8 inline-block rounded-full border border-background/70 px-8 py-3 text-sm hover:bg-background hover:text-foreground",
									children: "اعرف المزيد"
								})
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-8 inset-x-0 flex items-center justify-center gap-4",
						children: [
							/* @__PURE__ */ jsx("button", {
								"aria-label": "السابق",
								onClick: () => go(-1),
								className: "rounded-full border border-background/50 p-2",
								children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
							}),
							SLIDES.map((_, n) => /* @__PURE__ */ jsx("button", {
								"aria-label": `الشريحة ${n + 1}`,
								onClick: () => setI(n),
								className: `h-1 rounded-full transition-all ${n === i ? "w-10 bg-background" : "w-5 bg-background/40"}`
							}, n)),
							/* @__PURE__ */ jsx("button", {
								"aria-label": "التالي",
								onClick: () => go(1),
								className: "rounded-full border border-background/50 p-2",
								children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				id: "solutions",
				className: "scroll-mt-16 bg-muted/50 py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-center text-3xl font-bold sm:text-4xl",
							children: "المنتجات والحلول"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground",
							children: "حلول بايلونتك المتوفرة لدى أكتس — اضغط على أي حل لعرض منتجاته والتكامل الهندسي والكتالوجات"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
							children: PYLON_SOLUTIONS.map((x) => /* @__PURE__ */ jsxs("button", {
								onClick: () => setSol(x.id),
								className: "group relative block h-[340px] overflow-hidden rounded-2xl text-right",
								children: [
									/* @__PURE__ */ jsx("img", {
										src: x.img,
										alt: x.t,
										loading: "lazy",
										className: "h-full w-full object-cover transition duration-700 group-hover:scale-105"
									}),
									/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" }),
									/* @__PURE__ */ jsxs("div", {
										className: "absolute bottom-6 right-6 text-background",
										children: [/* @__PURE__ */ jsx("h3", {
											className: "text-xl font-bold",
											children: x.t
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm opacity-85",
											dir: "ltr",
											children: x.en
										})]
									})
								]
							}, x.id))
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "products",
				className: "scroll-mt-16 py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-center text-3xl font-bold sm:text-4xl",
						children: "جميع المنتجات"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
						children: items.map((p) => /* @__PURE__ */ jsxs("button", {
							onClick: () => setDetail(p.id),
							className: "group rounded-2xl border border-border bg-card p-5 text-right transition hover:border-primary hover:shadow-lg",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "flex h-44 items-center justify-center rounded-xl bg-muted",
									children: /* @__PURE__ */ jsx("img", {
										src: p.image,
										alt: p.name,
										loading: "lazy",
										className: "max-h-40 object-contain transition group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm font-bold",
									dir: "ltr",
									style: { textAlign: "right" },
									children: p.model.split(" ")[0]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-1 text-xs text-muted-foreground line-clamp-2",
									children: p.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm font-bold text-primary",
									dir: "ltr",
									style: { textAlign: "right" },
									children: p.power
								})
							]
						}, p.id))
					})]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "bg-background py-24",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5 text-center",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl font-bold sm:text-4xl",
							children: "التزامنا بالاستدامة والتميّز"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 grid gap-8 md:grid-cols-3",
							children: ESG.map((x) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl bg-muted/50 p-8",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "text-4xl font-bold text-primary",
										dir: "ltr",
										children: x.v
									}),
									/* @__PURE__ */ jsx("div", {
										className: "text-sm text-muted-foreground",
										children: x.u
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-3",
										children: x.l
									})
								]
							}, x.l))
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 grid gap-6 md:grid-cols-3",
							children: AWARDS.map((a) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border p-6 text-right",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "font-bold",
									children: a.t
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-6",
									children: a.d
								})]
							}, a.t))
						}),
						/* @__PURE__ */ jsx("a", {
							href: "#solutions",
							className: "mt-10 inline-block rounded-full border border-foreground/30 px-8 py-3 text-sm hover:bg-foreground hover:text-background",
							children: "اعرف المزيد"
						})
					]
				})
			}),
			/* @__PURE__ */ jsx("section", {
				id: "support",
				className: "scroll-mt-16 py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "text-3xl font-bold sm:text-4xl",
						children: "دراسات الحالة"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-10 grid gap-6 md:grid-cols-3",
						children: CASES.map((c) => /* @__PURE__ */ jsxs("div", {
							className: "group relative h-80 overflow-hidden rounded-2xl",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: c.img,
									alt: c.t,
									loading: "lazy",
									className: "h-full w-full object-cover transition group-hover:scale-105"
								}),
								/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" }),
								/* @__PURE__ */ jsxs("div", {
									className: "absolute bottom-5 right-5 left-5 text-background",
									children: [/* @__PURE__ */ jsx("p", {
										className: "text-sm opacity-80",
										children: c.p
									}), /* @__PURE__ */ jsx("h3", {
										className: "mt-1 text-lg font-bold",
										children: c.t
									})]
								})
							]
						}, c.t))
					})]
				})
			}),
			/* @__PURE__ */ jsx(AgencyShowcase, { brand: "pylontech" }),
			/* @__PURE__ */ jsxs("footer", {
				id: "contact",
				className: "scroll-mt-16 bg-foreground text-background",
				children: [/* @__PURE__ */ jsx("div", {
					className: "mx-auto grid max-w-7xl gap-8 px-5 py-14 sm:grid-cols-2 md:grid-cols-5",
					children: FOOTER.map((c) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-4 font-bold",
						children: c.t
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2 break-words text-sm opacity-70",
						children: c.l.map((x) => /* @__PURE__ */ jsx("li", { children: x.includes("mohammedqumash3@gmail.com") ? /* @__PURE__ */ jsx("a", {
							href: `mailto:${BUSINESS_EMAIL}`,
							className: "break-all hover:underline",
							children: x
						}) : x.includes("777687107") ? /* @__PURE__ */ jsx("a", {
							href: `tel:+${BUSINESS_WHATSAPP}`,
							className: "hover:underline",
							children: x
						}) : x }, x))
					})] }, c.t))
				}), /* @__PURE__ */ jsx("div", {
					className: "border-t border-background/15",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm opacity-80",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "rounded-lg bg-background p-1.5",
								children: /* @__PURE__ */ jsx("img", {
									src: actes_logo_full_default,
									alt: "ACTES",
									className: "h-8 w-auto"
								})
							}), /* @__PURE__ */ jsx("span", { children: "ACTES — الوكيل المعتمد لمنتجات بايلونتك" })]
						}), /* @__PURE__ */ jsx("span", { children: "© Pylon Technologies Co., Ltd." })]
					})
				})]
			}),
			solP && !detailP && /* @__PURE__ */ jsx(PylontechSolution, {
				s: solP,
				products: items,
				onClose: () => setSol(null),
				onProduct: (id) => setDetail(id)
			}),
			detailP && /* @__PURE__ */ jsx(BrandProductDetail, {
				product: detailP,
				accent: "#00a5b0",
				onClose: () => setDetail(null)
			}),
			/* @__PURE__ */ jsx("div", {
				className: "fixed left-4 top-1/2 z-30 flex -translate-y-1/2 flex-col gap-3",
				children: [
					{
						I: FileText,
						h: "#solutions",
						l: "الكتالوجات"
					},
					{
						I: Headphones,
						h: "#contact",
						l: "الدعم"
					},
					{
						I: Mail,
						h: "#contact",
						l: "استفسار"
					}
				].map(({ I, h, l }) => /* @__PURE__ */ jsx("a", {
					href: h,
					"aria-label": l,
					className: "rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:opacity-90",
					children: /* @__PURE__ */ jsx(I, { className: "h-5 w-5" })
				}, l))
			})
		]
	});
}
function HeroMedia({ video, poster, onEnded }) {
	const src = useResolvedVideoSrc(video);
	const ref = useRef(null);
	const [ready, setReady] = useState(false);
	useEffect(() => {
		const v = ref.current;
		if (!v || !src) return;
		v.defaultMuted = true;
		v.muted = true;
		v.playsInline = true;
		const p = v.play();
		if (p) p.catch(() => {});
	}, [src]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
		src: poster,
		alt: "",
		className: "absolute inset-0 h-full w-full object-cover"
	}), video && src && /* @__PURE__ */ jsx("video", {
		ref,
		src,
		poster,
		autoPlay: true,
		muted: true,
		playsInline: true,
		preload: "auto",
		onCanPlay: (e) => {
			setReady(true);
			e.currentTarget.play().catch(() => {});
		},
		onPlaying: () => setReady(true),
		onEnded,
		className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`
	})] });
}
//#endregion
export { PylontechPage as component };
