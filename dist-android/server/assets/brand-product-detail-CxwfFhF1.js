import { P as actes_logo_full_default, a as getProductVideo, l as PRODUCTS, r as officialCatalogUrl, t as useResolvedVideoSrc } from "./video-source-B1u7wiho.js";
import { useEffect, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { BadgeCheck, BatteryCharging, ClipboardCheck, Cpu, Download, FileText, Headphones, Home, ShieldCheck, Sun, Wrench, X } from "lucide-react";
//#region src/components/agency-showcase.tsx
var CFG = {
	suntech: {
		name: "Suntech",
		match: (b) => b === "Suntech",
		logo: "/brand/makers/suntech.png",
		metrics: [
			{
				v: "2001",
				l: "سنة التأسيس"
			},
			{
				v: "N-Type",
				l: "تقنية TOPCon"
			},
			{
				v: "30",
				l: "سنة ضمان أداء"
			},
			{
				v: "1500V",
				l: "جهد النظام"
			}
		],
		chart: {
			title: "منحنى ضمان الأداء الخطي",
			note: "قدرة اللوح المضمونة عبر 30 سنة مقارنة بلوح P-Type تقليدي (حسب نشرة المواصفات).",
			y: "% من القدرة",
			xLabel: "السنة",
			xMax: 30,
			yMin: 75,
			yMax: 100,
			pts: Array.from({ length: 31 }, (_, i) => [i, i === 0 ? 100 : 99 - .4 * (i - 1)]),
			ref: Array.from({ length: 26 }, (_, i) => [i, i === 0 ? 100 : 98 - .55 * (i - 1)])
		}
	},
	pylontech: {
		name: "Pylontech",
		match: (b) => b === "Pylontech",
		logo: "/brand/makers/pylontech.png",
		metrics: [
			{
				v: "2009",
				l: "سنة التأسيس"
			},
			{
				v: "LiFePO4",
				l: "كيمياء آمنة"
			},
			{
				v: "BMS",
				l: "إدارة ذكية"
			},
			{
				v: "معياري",
				l: "توسعة مرنة"
			}
		],
		chart: {
			title: "عمر الدورات مقابل عمق التفريغ",
			note: "منحنى توضيحي لاحتفاظ بطارية LiFePO4 بسعتها مع زيادة عدد الدورات.",
			y: "% من السعة",
			xLabel: "الدورات (×1000)",
			xMax: 8,
			yMin: 60,
			yMax: 100,
			pts: Array.from({ length: 9 }, (_, i) => [i, 100 - i * 3.6])
		}
	},
	hithium: {
		name: "HiTHIUM",
		match: (b) => b.startsWith("HiTHIUM"),
		logo: "/brand/makers/hithium.png",
		metrics: [
			{
				v: "LFP",
				l: "خلايا تخزين"
			},
			{
				v: "C&I",
				l: "تجاري وصناعي"
			},
			{
				v: "IP55",
				l: "حماية خارجية"
			},
			{
				v: "حماية",
				l: "إطفاء حراري"
			}
		],
		chart: {
			title: "احتفاظ الخلايا بالسعة",
			note: "منحنى توضيحي لأداء خلايا LFP المخصصة للتخزين طويل العمر.",
			y: "% من السعة",
			xLabel: "الدورات (×1000)",
			xMax: 10,
			yMin: 60,
			yMax: 100,
			pts: Array.from({ length: 11 }, (_, i) => [i, 100 - i * 2.8])
		}
	},
	lipower: {
		name: "Li-Power",
		match: (b) => b === "Li-Power",
		logo: "/brand/makers/lipower.png",
		metrics: [
			{
				v: "MPPT",
				l: "شحن شمسي"
			},
			{
				v: "نقية",
				l: "موجة جيبية"
			},
			{
				v: "Wi-Fi",
				l: "مراقبة"
			},
			{
				v: "BMS",
				l: "دعم الليثيوم"
			}
		],
		chart: {
			title: "كفاءة التحويل مقابل الحمل",
			note: "منحنى توضيحي لكفاءة الإنفرتر عند نسب تحميل مختلفة.",
			y: "% كفاءة",
			xLabel: "نسبة الحمل %",
			xMax: 100,
			yMin: 80,
			yMax: 100,
			pts: [
				[5, 85],
				[10, 90],
				[20, 93.5],
				[30, 94.5],
				[50, 95],
				[75, 94.6],
				[100, 93.8]
			]
		}
	}
};
var BENEFITS = [
	{
		icon: ShieldCheck,
		t: "ضمان مصنعي معتمد",
		d: "ضمان رسمي يُفعَّل محلياً عبر الوكيل."
	},
	{
		icon: Wrench,
		t: "صيانة وقطع أصلية",
		d: "مركز خدمة وقطع غيار من المصنع مباشرة."
	},
	{
		icon: ClipboardCheck,
		t: "فحص هندسي",
		d: "اختبار المنتج قبل التسليم والتركيب."
	},
	{
		icon: Headphones,
		t: "دعم فني مباشر",
		d: "فريق مهندسين للمتابعة والتشغيل."
	}
];
function Chart({ c }) {
	const W = 560, H = 240, P = 36;
	const x = (v) => P + v / c.xMax * 488;
	const y = (v) => 204 - (v - c.yMin) / (c.yMax - c.yMin) * 168;
	const path = (pts) => pts.map(([a, b], i) => `${i ? "L" : "M"}${x(a)},${y(b)}`).join(" ");
	const ticks = [
		0,
		.25,
		.5,
		.75,
		1
	].map((f) => c.yMin + f * (c.yMax - c.yMin));
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: `0 0 ${W} ${H}`,
		className: "w-full",
		direction: "ltr",
		children: [
			ticks.map((t) => /* @__PURE__ */ jsxs("g", { children: [/* @__PURE__ */ jsx("line", {
				x1: P,
				x2: 524,
				y1: y(t),
				y2: y(t),
				className: "stroke-border",
				strokeDasharray: "3 4"
			}), /* @__PURE__ */ jsx("text", {
				x: 30,
				y: y(t) + 4,
				textAnchor: "end",
				className: "fill-muted-foreground text-[10px]",
				children: Math.round(t)
			})] }, t)),
			c.ref && /* @__PURE__ */ jsx("path", {
				d: path(c.ref),
				fill: "none",
				className: "stroke-muted-foreground",
				strokeWidth: 2,
				strokeDasharray: "6 5"
			}),
			/* @__PURE__ */ jsx("path", {
				d: `${path(c.pts)} L${x(c.pts[c.pts.length - 1][0])},204 L${x(c.pts[0][0])},204 Z`,
				className: "fill-primary/10"
			}),
			/* @__PURE__ */ jsx("path", {
				d: path(c.pts),
				fill: "none",
				className: "stroke-primary",
				strokeWidth: 3
			}),
			/* @__PURE__ */ jsx("text", {
				x: W / 2,
				y: 234,
				textAnchor: "middle",
				className: "fill-muted-foreground text-[11px]",
				children: c.xLabel
			})
		]
	});
}
function AgencyBadge({ brand }) {
	return /* @__PURE__ */ jsx("div", {
		className: "border-b border-border bg-card",
		children: /* @__PURE__ */ jsxs("div", {
			dir: "rtl",
			className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm",
			children: [
				/* @__PURE__ */ jsx(BadgeCheck, { className: "h-4 w-4 text-primary" }),
				/* @__PURE__ */ jsxs("span", {
					className: "font-semibold",
					children: [
						"الوكيل المعتمد لـ ",
						CFG[brand].name,
						" في الجمهورية اليمنية"
					]
				}),
				/* @__PURE__ */ jsx("span", {
					className: "text-muted-foreground",
					children: "— ACTES لحلول أنظمة الطاقة"
				})
			]
		})
	});
}
function AgencyShowcase({ brand }) {
	const c = CFG[brand];
	const files = PRODUCTS.filter((p) => c.match(p.brand)).flatMap((p) => p.files.map((f) => ({
		...f,
		product: p.name
	})));
	const seen = /* @__PURE__ */ new Set();
	const docs = files.filter((f) => seen.has(f.url) ? false : (seen.add(f.url), true));
	const flow = [
		{
			icon: Sun,
			t: "ألواح Suntech",
			on: brand === "suntech"
		},
		{
			icon: Cpu,
			t: brand === "lipower" ? "إنفرتر Li-Power" : "إنفرتر هجين",
			on: brand === "lipower"
		},
		{
			icon: BatteryCharging,
			t: brand === "hithium" ? "تخزين HiTHIUM" : "بطاريات Pylontech",
			on: brand === "pylontech" || brand === "hithium"
		},
		{
			icon: Home,
			t: "الأحمال",
			on: false
		}
	];
	return /* @__PURE__ */ jsxs("div", {
		dir: "rtl",
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-6xl px-4 pt-12",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card shadow-sm sm:grid-cols-4",
					children: c.metrics.map((m) => /* @__PURE__ */ jsxs("div", {
						className: "border-border p-5 text-center even:border-r sm:border-r sm:first:border-r-0",
						children: [/* @__PURE__ */ jsx("div", {
							className: "text-2xl font-bold text-primary sm:text-3xl",
							dir: "ltr",
							children: m.v
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-1 text-xs text-muted-foreground sm:text-sm",
							children: m.l
						})]
					}, m.l))
				})
			}),
			/* @__PURE__ */ jsx("section", {
				className: "mx-auto max-w-6xl px-4 py-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-gradient-to-br from-card to-muted p-6 sm:p-10",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-wrap items-center gap-4",
							children: [
								/* @__PURE__ */ jsx("img", {
									src: actes_logo_full_default,
									alt: "ACTES",
									className: "h-10 w-auto"
								}),
								/* @__PURE__ */ jsx("span", { className: "h-8 w-px bg-border" }),
								/* @__PURE__ */ jsx("img", {
									src: c.logo,
									alt: c.name,
									className: "h-8 w-auto"
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",
									children: [/* @__PURE__ */ jsx(BadgeCheck, { className: "h-3.5 w-3.5" }), " وكيل معتمد"]
								})
							]
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-6 text-2xl font-bold sm:text-3xl",
							children: "لماذا تشتري من الوكيل المعتمد؟"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
							children: BENEFITS.map(({ icon: I, t, d }) => /* @__PURE__ */ jsxs("div", {
								className: "rounded-2xl border border-border bg-card p-5",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary",
										children: /* @__PURE__ */ jsx(I, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ jsx("h3", {
										className: "mt-4 font-semibold",
										children: t
									}),
									/* @__PURE__ */ jsx("p", {
										className: "mt-1 text-sm text-muted-foreground",
										children: d
									})
								]
							}, t))
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto grid max-w-6xl gap-6 px-4 pb-12 lg:grid-cols-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-6 lg:col-span-3",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold",
							children: c.chart.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: c.chart.note
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-4",
							children: /* @__PURE__ */ jsx(Chart, { c: c.chart })
						}),
						c.chart.ref && /* @__PURE__ */ jsxs("div", {
							className: "mt-2 flex gap-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ jsx("i", { className: "h-0.5 w-5 bg-primary" }),
									" ",
									c.name
								]
							}), /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ jsx("i", { className: "h-0.5 w-5 border-t-2 border-dashed border-muted-foreground" }), " لوح تقليدي"]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ jsx("h2", {
							className: "text-xl font-bold",
							children: "تكامل المنظومة"
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"موقع منتجات ",
								c.name,
								" داخل منظومة ACTES المتكاملة."
							]
						}),
						/* @__PURE__ */ jsx("ol", {
							className: "mt-5 space-y-2",
							children: flow.map(({ icon: I, t, on }, i) => /* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsxs("div", {
								className: `flex items-center gap-3 rounded-xl border p-3 ${on ? "border-primary bg-primary/10" : "border-border"}`,
								children: [/* @__PURE__ */ jsx("span", {
									className: `grid h-9 w-9 place-items-center rounded-lg ${on ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`,
									children: /* @__PURE__ */ jsx(I, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx("span", {
									className: on ? "font-semibold" : "",
									children: t
								})]
							}), i < flow.length - 1 && /* @__PURE__ */ jsx("div", { className: "mr-7 h-3 w-px bg-border" })] }, t))
						})
					]
				})]
			}),
			docs.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-6xl px-4 pb-14",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold",
						children: "مركز الوثائق والاعتمادات"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "الكتالوجات ونشرات المواصفات والشهادات الرسمية."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-5 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card",
						children: docs.map((f) => /* @__PURE__ */ jsxs("a", {
							href: f.url,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-3 p-4 hover:bg-muted",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary",
									children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block font-medium",
										children: f.label
									}), /* @__PURE__ */ jsxs("span", {
										className: "block text-xs text-muted-foreground",
										children: [
											f.product,
											" · ",
											f.kind
										]
									})]
								}),
								/* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-muted-foreground" })
							]
						}, f.url))
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/lazy-video.tsx
/** فيديو لا يُحمَّل إلا عند ظهوره على الشاشة، ويتوقف عند الخروج منها لتفريغ الإنترنت للفيديو التالي. */
function LazyVideo({ src, poster, className, ...rest }) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);
	const [ready, setReady] = useState(false);
	const resolved = useResolvedVideoSrc(visible ? src : "");
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				setVisible(true);
				el.play().catch(() => {});
			} else el.pause();
		}, {
			rootMargin: "200px 0px",
			threshold: .15
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("video", {
		ref,
		src: resolved || void 0,
		poster,
		muted: true,
		loop: true,
		playsInline: true,
		preload: visible ? "auto" : "none",
		onCanPlay: (e) => {
			setReady(true);
			e.currentTarget.play().catch(() => {});
		},
		className: `${className ?? ""} transition-opacity duration-500 ${ready || poster ? "opacity-100" : "opacity-0"}`,
		...rest
	});
}
//#endregion
//#region src/components/brand-product-detail.tsx
/** صفحة منتج كاملة داخل مواقع العلامات: فيديو المنتج الحقيقي، الصور، المزايا، المواصفات والملفات الرسمية. */
function BrandProductDetail({ product, accent, onClose, gallery }) {
	return /* @__PURE__ */ jsxs("div", {
		dir: "rtl",
		className: "fixed inset-0 z-50 overflow-y-auto bg-background",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-5 py-3 backdrop-blur",
			children: [/* @__PURE__ */ jsx("p", {
				className: "font-bold",
				dir: "ltr",
				children: product.model.split(" ")[0]
			}), /* @__PURE__ */ jsx("button", {
				onClick: onClose,
				"aria-label": "إغلاق",
				className: "rounded-full border border-border p-2 hover:bg-muted",
				children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
			})]
		}), /* @__PURE__ */ jsx(ProductBody, {
			product,
			accent,
			gallery
		})]
	});
}
/** محتوى صفحة المنتج كاملاً (يُعرض مباشرة داخل صفحات الحلول). */
function ProductBody({ product: p, accent, gallery }) {
	const video = getProductVideo(p.baseId ?? p.id) ?? getProductVideo(p.id);
	const [tab, setTab] = useState(0);
	const ar = officialCatalogUrl(p, "ar");
	const en = officialCatalogUrl(p, "en");
	return /* @__PURE__ */ jsxs("div", {
		dir: "rtl",
		id: `product-${p.id}`,
		className: "scroll-mt-16 border-b-4 border-border",
		children: [
			/* @__PURE__ */ jsx("section", {
				className: "bg-muted/40",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl items-center gap-6 px-5 py-10 md:grid-cols-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-right",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								dir: "ltr",
								style: { textAlign: "right" },
								children: p.brand
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "mt-1 text-3xl font-bold sm:text-5xl",
								dir: "ltr",
								style: { textAlign: "right" },
								children: p.model.split(" ")[0]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-xl font-bold",
								style: { color: accent },
								dir: "ltr",
								children: p.power
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "flex items-center justify-center",
						children: /* @__PURE__ */ jsx("img", {
							src: p.image,
							alt: p.name,
							className: "max-h-[45svh] object-contain"
						})
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-2",
				children: [/* @__PURE__ */ jsx("div", {
					className: "overflow-hidden rounded-2xl bg-muted",
					children: video ? /* @__PURE__ */ jsx(LazyVideo, {
						src: video.src,
						poster: video.poster ?? p.image,
						controls: true,
						className: "h-full max-h-[60svh] w-full object-cover"
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex h-72 items-center justify-center",
						children: /* @__PURE__ */ jsx("img", {
							src: p.image,
							alt: p.name,
							className: "max-h-[80%] object-contain"
						})
					})
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-muted-foreground",
						dir: "ltr",
						style: { textAlign: "right" },
						children: p.model
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 leading-8",
						children: p.about || p.description
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm text-muted-foreground",
						children: p.suitableFor
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 flex flex-wrap gap-2",
						children: [ar && /* @__PURE__ */ jsxs("a", {
							href: ar,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1 rounded-full px-4 py-2 text-sm text-background",
							style: { background: accent },
							children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), "الكتالوج بالعربية"]
						}), en && /* @__PURE__ */ jsxs("a", {
							href: en,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm",
							children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), "EN Datasheet"]
						})]
					})
				] })]
			}),
			gallery && gallery.length > 0 && /* @__PURE__ */ jsx("section", {
				className: "bg-muted/40 py-10",
				children: /* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-7xl px-5",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "mb-5 text-xl font-bold",
							children: ["صور المنتج من ", p.brand]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
							children: gallery.map((g) => /* @__PURE__ */ jsx("img", {
								src: g,
								alt: p.model,
								loading: "lazy",
								className: "h-56 w-full rounded-xl bg-background object-cover"
							}, g))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [ar && /* @__PURE__ */ jsxs("a", {
								href: ar,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1 rounded-full px-4 py-2 text-sm text-background",
								style: { background: accent },
								children: [/* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }), "الكتالوج بالعربية (ACTES)"]
							}), en && /* @__PURE__ */ jsxs("a", {
								href: en,
								target: "_blank",
								rel: "noreferrer",
								className: "flex items-center gap-1 rounded-full border border-border bg-background px-4 py-2 text-sm",
								children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), "الكتالوج بالإنجليزية"]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mx-auto max-w-7xl px-5 pb-16",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex gap-6 border-b border-border",
						children: [
							"المزايا",
							"المواصفات الفنية",
							"التنزيلات"
						].map((t, i) => /* @__PURE__ */ jsx("button", {
							onClick: () => setTab(i),
							className: "-mb-px border-b-2 py-3 text-sm font-medium",
							style: {
								borderColor: tab === i ? accent : "transparent",
								color: tab === i ? accent : void 0
							},
							children: t
						}, t))
					}),
					tab === 0 && /* @__PURE__ */ jsxs("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: [p.features.map((f) => /* @__PURE__ */ jsx("div", {
							className: "rounded-xl border border-border p-4 text-sm leading-7",
							children: f
						}, f)), p.uses.map((u) => /* @__PURE__ */ jsx("div", {
							className: "rounded-xl bg-muted/50 p-4 text-sm leading-7",
							children: u
						}, u))]
					}),
					tab === 1 && /* @__PURE__ */ jsx("div", {
						className: "mt-6 grid gap-4 md:grid-cols-2",
						children: p.specs.map((g) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-xl border border-border p-4",
							children: [/* @__PURE__ */ jsx("h4", {
								className: "mb-2 font-bold",
								style: { color: accent },
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
										dir: "ltr",
										style: { textAlign: "right" },
										children: v
									})]
								}, k)) })
							})]
						}, g.title))
					}),
					tab === 2 && /* @__PURE__ */ jsx("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: p.files.map((f) => /* @__PURE__ */ jsxs("a", {
							href: f.url,
							target: "_blank",
							rel: "noreferrer",
							className: "flex items-center justify-between rounded-xl border border-border p-4 text-sm hover:bg-muted",
							children: [/* @__PURE__ */ jsx("span", { children: f.label }), /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" })]
						}, f.url))
					})
				]
			})
		]
	});
}
//#endregion
export { AgencyShowcase as i, ProductBody as n, AgencyBadge as r, BrandProductDetail as t };
