import { useEffect, useState } from "react";
//#region src/assets/actes-logo-full.webp
var actes_logo_full_default = "/assets/actes-logo-full-sz9WqFkm.webp";
//#endregion
//#region src/assets/products/p2.webp
var p2_default = "/assets/p2-B9E3UcQr.webp";
//#endregion
//#region src/assets/products/p3.webp
var p3_default = "/assets/p3-BAtnQTRD.webp";
//#endregion
//#region src/assets/products/p4.webp
var p4_default = "/assets/p4-g2fI67VO.webp";
//#endregion
//#region src/assets/products/pylontech-fidus-battery-plus.png
var pylontech_fidus_battery_plus_default$1 = "/assets/pylontech-fidus-battery-plus-knaVyL2y.png";
var pylontech_powercube_m5a_png_asset_default = {
	url: "/media/pylontech-powercube-m5a.webp",
	content_type: "image/png",
	size: 1278420
};
var pylontech_optimus_a300_hy_png_asset_default = {
	url: "/media/pylontech-optimus-a300-hy.webp",
	content_type: "image/png",
	size: 1085697
};
var pylontech_optimus_a300_hy_pdf_asset_default = {
	url: "/catalogs/pylontech-optimus-a300-hy.pdf",
	content_type: "application/pdf",
	size: 4380762
};
var lithium_12v_314ah_png_asset_default = {
	url: "/media/lithium-12v-314ah.webp",
	content_type: "image/png",
	size: 383470
};
var hithium_heroee_neopower_4_g2_pdf_asset_default = {
	url: "/catalogs/hithium-heroee-neopower-4-g2.pdf",
	content_type: "application/pdf",
	size: 335923
};
var hithium_legend_112c_png_asset_default = {
	url: "/media/hithium-legend-112c.webp",
	content_type: "image/jpeg"
};
var pylontech_optimus_l260_hy_png_asset_default = {
	version: 1,
	asset_id: "55793e7f-a5f9-4222-919a-6ea1ed3b8acf",
	project_id: "e1bc7926-83c3-4bfa-973d-7c7307e1efd7",
	url: "/media/pylontech-optimus-l260-hy.webp",
	original_filename: "pylontech-optimus-l260-hy.png",
	size: 323803,
	content_type: "image/png",
	created_at: "2026-10-01T02:33:00Z"
};
var hithium_legend_112s_png_asset_default = {
	url: "/media/hithium-legend-112s.webp",
	content_type: "image/jpeg"
};
var pylontech_powercube_m1c_png_asset_default = {
	url: "/media/pylontech-powercube-m1c.webp",
	content_type: "image/png",
	size: 2072901
};
var pylontech_uf5000_png_asset_default = {
	url: "/media/pylontech-uf5000.webp",
	content_type: "image/png",
	size: 179289
};
var pylontech_uf5000_pdf_asset_default = {
	url: "/catalogs/pylontech-uf5000.pdf",
	content_type: "application/pdf",
	size: 107226
};
//#endregion
//#region src/assets/products/p8.webp
var p8_default = "/assets/p8-CQqp7uK5.webp";
//#endregion
//#region src/assets/products/p9.webp
var p9_default = "/assets/p9-C7nBbOHD.webp";
//#endregion
//#region src/assets/products/p10.webp
var p10_default = "/assets/p10-CNpAH2hC.webp";
//#endregion
//#region src/assets/products/p11.webp
var p11_default = "data:image/webp;base64,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";
//#endregion
//#region src/assets/products/p12.webp
var p12_default = "/assets/p12-Cfxva8Li.webp";
//#endregion
//#region src/assets/products/p13.webp
var p13_default = "/assets/p13-Drv39nt4.webp";
//#endregion
//#region src/assets/products/p14.webp
var p14_default = "/assets/p14-L-QE18Dm.webp";
//#endregion
//#region src/assets/products/p15.webp
var p15_default = "/assets/p15-CEpu1jna.webp";
//#endregion
//#region src/assets/products/p16.webp
var p16_default = "/assets/p16-C-GR6zlE.webp";
//#endregion
//#region src/assets/products/p17.webp
var p17_default = "/assets/p17-CjO1MaV1.webp";
//#endregion
//#region src/assets/products/p18.webp
var p18_default = "/assets/p18-DdrST0B1.webp";
//#endregion
//#region src/assets/products/p19.webp
var p19_default = "/assets/p19-qbt5v43g.webp";
//#endregion
//#region src/assets/products/p20.webp
var p20_default = "/assets/p20-UpYwBBdW.webp";
//#endregion
//#region src/assets/products/p21.webp
var p21_default = "/assets/p21-z4H2nPwo.webp";
var c2_pdf_asset_default = {
	url: "/catalogs/catalog-2.pdf",
	content_type: "application/pdf",
	size: 4314345
};
var c3_pdf_asset_default = {
	url: "/catalogs/catalog-3.pdf",
	content_type: "application/pdf",
	size: 439973
};
var c4_pdf_asset_default = {
	url: "/catalogs/catalog-4.pdf",
	content_type: "application/pdf",
	size: 1285193
};
var c5_pdf_asset_default = {
	url: "/catalogs/catalog-5.pdf",
	content_type: "application/pdf",
	size: 2475938
};
var c6_pdf_asset_default = {
	url: "/catalogs/catalog-6.pdf",
	content_type: "application/pdf",
	size: 330705
};
var c7_pdf_asset_default = {
	url: "/catalogs/catalog-7.pdf",
	content_type: "application/pdf",
	size: 1178427
};
var c8_pdf_asset_default = {
	url: "/catalogs/catalog-8.pdf",
	content_type: "application/pdf",
	size: 1621742
};
var c9_pdf_asset_default = {
	url: "/catalogs/catalog-9.pdf",
	content_type: "application/pdf",
	size: 593589
};
var c10_pdf_asset_default = {
	url: "/catalogs/catalog-10.pdf",
	content_type: "application/pdf",
	size: 337071
};
var c11_pdf_asset_default = {
	url: "/catalogs/catalog-11.pdf",
	content_type: "application/pdf",
	size: 257379
};
var c12_pdf_asset_default = {
	url: "/catalogs/catalog-12.pdf",
	content_type: "application/pdf",
	size: 240877
};
var c13_pdf_asset_default = {
	url: "/catalogs/catalog-13.pdf",
	content_type: "application/pdf",
	size: 257818
};
var c14_pdf_asset_default = {
	url: "/catalogs/catalog-14.pdf",
	content_type: "application/pdf",
	size: 269510
};
var c15_pdf_asset_default = {
	url: "/catalogs/catalog-15.pdf",
	content_type: "application/pdf",
	size: 784266
};
var c16_pdf_asset_default = {
	url: "/catalogs/catalog-16.pdf",
	content_type: "application/pdf",
	size: 872523
};
var c17_pdf_asset_default = {
	url: "/catalogs/catalog-17.pdf",
	content_type: "application/pdf",
	size: 754146
};
var c18_pdf_asset_default = {
	url: "/catalogs/catalog-18.pdf",
	content_type: "application/pdf",
	size: 1030353
};
var c19_pdf_asset_default = {
	url: "/catalogs/catalog-19.pdf",
	content_type: "application/pdf",
	size: 3468404
};
var c20_pdf_asset_default = {
	url: "/catalogs/catalog-20.pdf",
	content_type: "application/pdf",
	size: 1863942
};
var c21_pdf_asset_default = {
	url: "/catalogs/catalog-21.pdf",
	content_type: "application/pdf",
	size: 3037923
};
//#endregion
//#region src/lib/products-data.ts
var CATEGORIES = [
	{
		id: "panels",
		title: "الألواح الشمسية",
		emoji: "☀️",
		subtitle: "ألواح عالية الكفاءة ثنائية الوجه"
	},
	{
		id: "inverters",
		title: "الإنفرترات",
		emoji: "⚡",
		subtitle: "إنفرترات هجينة أحادية وثلاثية الطور"
	},
	{
		id: "batteries",
		title: "البطاريات",
		emoji: "🔋",
		subtitle: "بطاريات ليثيوم فوسفات الحديد LiFePO4"
	},
	{
		id: "storage",
		title: "أنظمة التخزين",
		emoji: "🏭",
		subtitle: "خزانات تخزين تجارية وصناعية بإنفرتر هجين مدمج"
	}
];
var sheet = (url) => [{
	kind: "Datasheet",
	label: "الكتالوج / Datasheet الرسمي",
	url
}];
var PRODUCTS = [
	{
		id: "suntech-stp595s-c72-nsh",
		category: "panels",
		brand: "Suntech",
		name: "لوح شمسي Suntech ‏595W ثنائي الوجه",
		model: "STP595S-C72/Nsh+ (سلسلة STP580–600S-C72/Nsh+)",
		power: "595 W",
		description: "لوح شمسي N-Type TOPCon نصف خلية ثنائي الوجه بكفاءة تصل إلى 23.0% للموديل 595W.",
		about: "لوح شمسي من سلسلة Suntech ‏C72/Nsh+ بتقنية N-Type TOPCon وخلايا نصفية (144 خلية) وتصميم ثنائي الوجه. يحوّل ضوء الشمس إلى كهرباء من الوجهين، إذ يمكن أن يرفع الوجه الخلفي الإنتاج حتى 25% حسب الانعكاس. يتميز بانعدام تدهور LID وضعف LeTID وتحمل أحمال الرياح (2400 Pa) والثلوج (5400 Pa)، ويُستخدم في محطات ومنظومات الطاقة الشمسية بجهد نظام حتى 1500V.",
		features: [
			"تقنية الموصلات المتعددة لتحسين جمع التيار والاعتمادية",
			"انعدام LID وتدهور LeTID منخفض جداً وأداء أفضل ضد PID",
			"إنتاج من الوجهين بزيادة تصل حتى 25% من الوجه الخلفي",
			"معتمد لتحمل رياح 2400 باسكال وثلوج 5400 باسكال",
			"شهادات مقاومة رذاذ الملح (IEC 61701) والأمونيا (IEC 62716) والغبار والرمال",
			"ضمان منتج 15 سنة وضمان أداء خطي 30 سنة"
		],
		uses: [
			"منظومات الطاقة الشمسية المتصلة بالشبكة",
			"المنظومات الهجينة مع البطاريات",
			"المحطات والمشاريع الكبيرة بجهد نظام حتى 1500V DC",
			"التركيبات المرتفعة عن السطح للاستفادة من الوجه الخلفي"
		],
		suitableFor: "مناسب للمشاريع السكنية والتجارية والزراعية والصناعية التي تحتاج لوحاً بقدرة ~600W وكفاءة عالية، خصوصاً في البيئات الحارة أو الساحلية أو المغبرة بفضل شهاداته البيئية.",
		specs: [
			{
				title: "الخصائص الكهربائية (STC) — 595W",
				rows: [
					["القدرة القصوى Pmax", "595 W"],
					["جهد التشغيل الأمثل Vmp", "43.02 V"],
					["تيار التشغيل الأمثل Imp", "13.83 A"],
					["جهد الدائرة المفتوحة Voc", "51.81 V"],
					["تيار القصر Isc", "14.56 A"],
					["كفاءة اللوح", "23.0%"],
					["تفاوت القدرة", "0/+5 W"]
				]
			},
			{
				title: "الخصائص الميكانيكية",
				rows: [
					["نوع الخلية", "N-type Monocrystalline silicon 182 mm"],
					["عدد الخلايا", "144 (6 × 24)"],
					["نوع اللوح", "Half-cell N-Type TOPCon Bifacial"],
					["الأبعاد", "2278 × 1134 × 30 mm"],
					["الوزن", "32.0 kg"],
					["الزجاج الأمامي/الخلفي", "2.0 + 2.0 mm semi-tempered glass"],
					["الإطار", "Anodized aluminum alloy"],
					["صندوق التوصيل", "IP68 (3 bypass diodes)"],
					["الموصلات", "STP-XC4"],
					["الكابلات", "4.0 mm² — (−) 350 mm و(+) 160 mm"],
					["معامل الثنائية (Bifaciality)", "(80 ± 5)%"]
				]
			},
			{
				title: "الحرارة والحدود",
				rows: [
					["NMOT", "42 ± 2 °C"],
					["معامل حرارة Pmax", "−0.29%/°C"],
					["معامل حرارة Voc", "−0.25%/°C"],
					["معامل حرارة Isc", "+0.046%/°C"],
					["حرارة التشغيل", "−40 °C إلى +85 °C"],
					["أقصى جهد للنظام", "1500 V DC (IEC)"],
					["أقصى منصهر تسلسلي", "25 A"]
				]
			},
			{
				title: "الضمان والتعبئة",
				rows: [
					["ضمان المنتج", "15 سنة"],
					["ضمان الأداء", "30 سنة خطي — تدهور السنة الأولى 1% ثم 0.40% سنوياً"],
					["التعبئة", "36 لوح/طبلية — 720 لوح/حاوية 40'HC"]
				]
			}
		],
		modelTable: {
			models: [
				"STP600S",
				"STP595S",
				"STP590S",
				"STP585S",
				"STP580S"
			],
			rows: [
				{
					label: "Pmax (W)",
					values: [
						"600",
						"595",
						"590",
						"585",
						"580"
					]
				},
				{
					label: "Vmp (V)",
					values: [
						"43.13",
						"43.02",
						"42.91",
						"42.79",
						"42.68"
					]
				},
				{
					label: "Imp (A)",
					values: [
						"13.91",
						"13.83",
						"13.75",
						"13.67",
						"13.59"
					]
				},
				{
					label: "Voc (V)",
					values: [
						"51.94",
						"51.81",
						"51.68",
						"51.55",
						"51.42"
					]
				},
				{
					label: "Isc (A)",
					values: [
						"14.64",
						"14.56",
						"14.48",
						"14.40",
						"14.32"
					]
				},
				{
					label: "الكفاءة",
					values: [
						"23.2%",
						"23.0%",
						"22.8%",
						"22.6%",
						"22.5%"
					]
				}
			]
		},
		certificates: "ISO 14001، ISO 45001، ISO 9001، SA 8000، IEC 61701، IEC 62716، IEC 60068-2-68، IEC 61730-2 (UL790) Fire class C، IEC TS 62941",
		image: p8_default,
		files: sheet(c8_pdf_asset_default.url)
	},
	{
		id: "suntech-stp720s-d66-nsh",
		category: "panels",
		brand: "Suntech",
		name: "لوح شمسي Suntech ‏720W ثنائي الوجه",
		model: "STP720S-D66-Nsh+ (سلسلة STP700–720S-D66-Nsh+)",
		power: "720 W",
		description: "لوح N-Type TOPCon نصف خلية ثنائي الوجه بقدرة 720W وكفاءة 23.2%.",
		about: "لوح عالي القدرة من سلسلة Suntech ‏D66-Nsh+ بـ132 خلية N-Type TOPCon وتصميم ثنائي الوجه. صُمم لخفض تكلفة مكونات النظام (BOS) وتكلفة الطاقة، ومتوافق مع أنظمة التتبع الشائعة في المحطات الكبيرة، ويتحمل البيئات القاسية كالحرارة العالية والرياح والثلوج والملوحة.",
		features: [
			"قدرة عالية حتى 720W لتقليل عدد الألواح وتكلفة التركيب",
			"متوافق تصميمياً مع أنظمة التتبع (Trackers) الشائعة",
			"اجتاز اختبارات رذاذ الملح والأمونيا — مناسب للبيئات القاسية",
			"معتمد لتحمل رياح 2400 باسكال وثلوج 5400 باسكال",
			"إنتاج إضافي من الوجه الخلفي (مثال 710W: حتى 888W عند كسب 25%)",
			"ضمان منتج 15 سنة وضمان أداء خطي 30 سنة"
		],
		uses: [
			"المحطات الشمسية الكبيرة وأنظمة التتبع",
			"المشاريع التجارية والصناعية والزراعية",
			"منظومات بجهد نظام حتى 1500V DC"
		],
		suitableFor: "مناسب للمشاريع الكبيرة والمساحات المفتوحة التي تبحث عن أعلى قدرة لكل لوح، وللمواقع ذات المناخ القاسي أو القريبة من البحر.",
		specs: [
			{
				title: "الخصائص الكهربائية (STC) — 720W",
				rows: [
					["القدرة القصوى Pmax", "720 W"],
					["جهد التشغيل الأمثل Vmp", "40.45 V"],
					["تيار التشغيل الأمثل Imp", "17.81 A"],
					["جهد الدائرة المفتوحة Voc", "48.45 V"],
					["تيار القصر Isc", "18.83 A"],
					["كفاءة اللوح", "23.2%"],
					["تفاوت القدرة", "0/+5 W"]
				]
			},
			{
				title: "الخصائص الميكانيكية",
				rows: [
					["نوع الخلية", "N-type monocrystalline silicon"],
					["عدد الخلايا", "132 (6 × 22)"],
					["نوع اللوح", "Half-cell N-Type TOPCon Bifacial"],
					["الأبعاد", "2384 × 1303 × 33 mm"],
					["الوزن", "37.3 kg"],
					["الزجاج الأمامي/الخلفي", "2.0 + 2.0 mm semi-tempered glass"],
					["الإطار", "Anodized aluminum alloy"],
					["صندوق التوصيل", "IP68 (3 bypass diodes)"],
					["الموصلات", "STP-XC4"],
					["الكابلات", "4.0 mm² — (−) 350 mm و(+) 160 mm"],
					["معامل الثنائية (Bifaciality)", "(80 ± 5)%"]
				]
			},
			{
				title: "الحرارة والحدود",
				rows: [
					["NMOT", "42 ± 2 °C"],
					["معامل حرارة Pmax", "−0.29%/°C"],
					["معامل حرارة Voc", "−0.25%/°C"],
					["معامل حرارة Isc", "+0.046%/°C"],
					["حرارة التشغيل", "−40 °C إلى +85 °C"],
					["أقصى جهد للنظام", "1500 V DC (IEC)"],
					["أقصى منصهر تسلسلي", "35 A"]
				]
			},
			{
				title: "الضمان والتعبئة",
				rows: [
					["ضمان المنتج", "15 سنة"],
					["ضمان الأداء", "30 سنة خطي"],
					["التعبئة", "33 لوح/طبلية — 594 لوح/حاوية 40'HC"]
				]
			}
		],
		modelTable: {
			models: [
				"STP720S",
				"STP715S",
				"STP710S",
				"STP705S",
				"STP700S"
			],
			rows: [
				{
					label: "Pmax (W)",
					values: [
						"720",
						"715",
						"710",
						"705",
						"700"
					]
				},
				{
					label: "Vmp (V)",
					values: [
						"40.45",
						"40.25",
						"40.05",
						"39.85",
						"39.65"
					]
				},
				{
					label: "Imp (A)",
					values: [
						"17.81",
						"17.78",
						"17.72",
						"17.69",
						"17.66"
					]
				},
				{
					label: "Voc (V)",
					values: [
						"48.45",
						"48.25",
						"48.05",
						"47.85",
						"47.65"
					]
				},
				{
					label: "Isc (A)",
					values: [
						"18.83",
						"18.79",
						"18.75",
						"18.71",
						"18.67"
					]
				},
				{
					label: "الكفاءة",
					values: [
						"23.2%",
						"23.0%",
						"22.9%",
						"22.7%",
						"22.5%"
					]
				}
			]
		},
		certificates: "ISO 14001، ISO 45001، ISO 9001، SA 8000، IEC 61701، IEC 62716، IEC 60068-2-68، IEC 61730-2 (UL790) Fire Class C، IEC TS 62941",
		image: p9_default,
		files: sheet(c9_pdf_asset_default.url)
	},
	{
		id: "deye-sun-3-6k-sg04lp1",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر هجين Deye أحادي الطور 3–6kW",
		model: "SUN-3K-SG04LP1-24-EU-SM1 / SUN-3K-SG04LP1-EU-SM1 / SUN-3.6/5/6K-SG04LP1-EU-SM2",
		power: "3 – 6 kW",
		description: "إنفرتر هجين أحادي الطور لبطاريات الجهد المنخفض (24V/48V) بشاشة لمس ملونة وحماية IP65.",
		about: "إنفرتر هجين من Deye يدير الطاقة بين الألواح الشمسية والبطارية والشبكة والمولد. يعمل مع بطاريات الرصاص أو الليثيوم، ويدعم الربط المتوازي حتى 16 وحدة في وضع الشبكة وخارجها، والربط AC لتحديث منظومات قائمة. مناسب للمنازل والمحلات الصغيرة.",
		features: [
			"شاشة لمس ملونة وحماية IP65",
			"AC couple لتحديث نظام الطاقة الشمسية القائم",
			"حتى 16 وحدة على التوازي مع دعم عدة بطاريات على التوازي",
			"تيار شحن/تفريغ حتى 140A",
			"6 فترات زمنية لجدولة شحن وتفريغ البطارية",
			"دعم تخزين الطاقة من مولد الديزل",
			"قدرة قصوى خارج الشبكة ضعف القدرة المقننة لمدة 10 ثوانٍ"
		],
		uses: [
			"منظومات هجينة سكنية مع بطاريات",
			"منظومات خارج الشبكة (Off-grid) مع مولد",
			"تحديث منظومات متصلة بالشبكة بإضافة تخزين"
		],
		suitableFor: "للمنازل والمكاتب والمحلات الصغيرة ذات الأحمال أحادية الطور من 3 إلى 6 kW، مع بطارية 48V (أو 24V لموديل 3K-24).",
		specs: [
			{
				title: "البطارية",
				rows: [
					["نوع البطارية", "Lead-acid أو Lithium-ion"],
					["جهد البطارية", "20–30V (موديل 24) / 40–60V"],
					["استراتيجية الشحن", "Self-adaption to BMS"],
					["عدد مداخل البطارية", "1"]
				]
			},
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["أقصى جهد PV", "500 V"],
					["جهد البدء", "125 V"],
					["نطاق MPPT", "150–425 V"],
					["الجهد المقنن", "370 V"],
					["عدد MPPT / السلاسل", "1/1 (3K) — 2/1+1 (3.6–6K)"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Single Phase Hybrid — L+N+PE"],
					["الجهد", "220/230 V (0.85Un–1.1Un)"],
					["التردد", "50/45–55، 60/55–65 Hz"],
					["القدرة القصوى Off-grid", "2× القدرة المقننة لمدة 10 s"],
					["معامل القدرة", "0.8 leading – 0.8 lagging"],
					["THDi", "<3%"]
				]
			},
			{
				title: "الكفاءة",
				rows: [
					["أقصى كفاءة", "97.6%"],
					["الكفاءة الأوروبية", "96.5%"],
					["كفاءة MPPT", ">99%"]
				]
			},
			{
				title: "الحماية",
				rows: [["الحمايات المدمجة", "عكس قطبية DC، زيادة تيار/جهد وقصر الخرج AC، حماية حرارية، مراقبة مكون DC، مراقبة تيار التسرب الأرضي، AFCI (اختياري)، حماية العزل (Anti-islanding)، كشف الأعطال الأرضية، مفتاح DC، مراقبة عزل أطراف DC، كشف RCD"], ["حماية الصواعق", "TYPE II (DC)، TYPE II (AC)"]]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["واجهات الاتصال", "RS485 / RS232 / CAN"],
					["المراقبة", "GPRS / WIFI / Bluetooth / 4G / LAN (اختياري)"],
					["حرارة التشغيل", "−40 إلى +60 °C (تخفيض فوق 45 °C)"],
					["الحماية", "IP65"],
					["الضوضاء", "<30 dB"],
					["التبريد", "Natural Cooling"],
					["الأبعاد", "376 × 470 × 241.5 mm"],
					["الوزن", "17.6 / 19 kg"]
				]
			}
		],
		modelTable: {
			models: [
				"3K-24-SM1",
				"3K-SM1",
				"3.6K-SM2",
				"5K-SM2",
				"6K-SM2"
			],
			rows: [
				{
					label: "القدرة المقننة (W)",
					values: [
						"3000",
						"3000",
						"3600",
						"5000",
						"6000"
					]
				},
				{
					label: "جهد البطارية (V)",
					values: [
						"20–30",
						"40–60",
						"40–60",
						"40–60",
						"40–60"
					]
				},
				{
					label: "أقصى تيار شحن/تفريغ (A)",
					values: [
						"140",
						"70",
						"90",
						"120",
						"135"
					]
				},
				{
					label: "أقصى قدرة PV مدخلة (W)",
					values: [
						"4800",
						"4800",
						"5760",
						"8000",
						"9600"
					]
				},
				{
					label: "عدد MPPT",
					values: [
						"1",
						"1",
						"2",
						"2",
						"2"
					]
				},
				{
					label: "أقصى تيار PV (A)",
					values: [
						"18",
						"18",
						"18+18",
						"18+18",
						"18+18"
					]
				}
			]
		},
		certificates: "IEC 61727، IEC 62116، CEI 0-21، EN 50549، NRS 097، RD 140، UNE 217002، OVE-Richtlinie R25، G98، G99، VDE-AR-N 4105 — السلامة: IEC/EN 61000-6-1/2/3/4، IEC/EN 62109-1/2",
		image: p14_default,
		files: sheet(c14_pdf_asset_default.url)
	},
	{
		id: "deye-sun-7-6-12k-sg02lp1",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر هجين Deye أحادي الطور 7.6–12kW",
		model: "SUN-7.6/8K-SG02LP1-EU-AM2-P / SUN-10/12K-SG02LP1-EU-AM3-P",
		power: "7.6 – 12 kW",
		description: "إنفرتر هجين أحادي الطور لبطاريات 48V بتيار شحن حتى 250A وحتى 3 متتبعات MPPT.",
		about: "إنفرتر هجين أحادي الطور من Deye للمنازل الكبيرة والمنشآت الصغيرة، يعمل مع بطاريات الرصاص أو الليثيوم بجهد 40–60V، ويدعم الربط المتوازي حتى 16 وحدة وتخزين طاقة المولد وربط AC لتحديث منظومات قائمة.",
		features: [
			"شاشة لمس ملونة وحماية IP65",
			"AC couple لتحديث نظام الطاقة الشمسية القائم",
			"حتى 16 وحدة على التوازي مع دعم عدة بطاريات على التوازي",
			"تيار شحن/تفريغ حتى 250A",
			"6 فترات زمنية لجدولة شحن وتفريغ البطارية",
			"دعم تخزين الطاقة من مولد الديزل"
		],
		uses: [
			"منظومات هجينة سكنية وتجارية صغيرة",
			"منظومات خارج الشبكة مع مولد",
			"إضافة تخزين لمنظومة قائمة"
		],
		suitableFor: "للمنازل الكبيرة والفلل والمحلات والمكاتب ذات الأحمال أحادية الطور من 7.6 إلى 12 kW.",
		specs: [
			{
				title: "البطارية",
				rows: [
					["نوع البطارية", "Lead-acid أو Lithium-ion"],
					["جهد البطارية", "40–60 V"],
					["استراتيجية الشحن", "Self-adaption to BMS"],
					["عدد مداخل البطارية", "1"]
				]
			},
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["أقصى جهد PV", "500 V"],
					["جهد البدء", "125 V"],
					["نطاق MPPT", "150–425 V"],
					["الجهد المقنن", "370 V"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Single Phase Hybrid — L+N+PE"],
					["الجهد", "220/230 V (0.85Un–1.1Un)"],
					["القدرة القصوى Off-grid", "2× القدرة المقننة لمدة 10 s"],
					["أقصى تمرير مستمر من الشبكة للحمل", "50 A (7.6/8K) — 60 A (10/12K)"],
					["THDi", "<3%"]
				]
			},
			{
				title: "الكفاءة",
				rows: [
					["أقصى كفاءة", "97.6%"],
					["الكفاءة الأوروبية", "96.5%"],
					["كفاءة MPPT", ">99%"]
				]
			},
			{
				title: "الحماية",
				rows: [["الحمايات المدمجة", "عكس قطبية DC، زيادة تيار/جهد وقصر الخرج AC، حماية حرارية، مراقبة مكون DC، AFCI (اختياري)، Anti-islanding، مفتاح DC، كشف مقاومة العزل، كشف تيار التسرب"], ["حماية الصواعق", "TYPE II (DC)، TYPE II (AC)"]]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["واجهات الاتصال", "RS485 / RS232 / CAN"],
					["المراقبة", "GPRS / WIFI / Bluetooth / 4G / LAN (اختياري)"],
					["حرارة التشغيل", "−40 إلى +60 °C (تخفيض فوق 45 °C)"],
					["الحماية", "IP65"],
					["الضوضاء", "<45 dB"],
					["التبريد", "Intelligent Air Cooling"],
					["الأبعاد", "420 × 670 × 233 mm"],
					["الوزن", "35.6 kg"]
				]
			}
		],
		modelTable: {
			models: [
				"7.6K",
				"8K",
				"10K",
				"12K"
			],
			rows: [
				{
					label: "القدرة المقننة (W)",
					values: [
						"7600",
						"8000",
						"10000",
						"12000"
					]
				},
				{
					label: "أقصى تيار شحن/تفريغ (A)",
					values: [
						"190",
						"190",
						"220",
						"250"
					]
				},
				{
					label: "أقصى قدرة PV مدخلة (W)",
					values: [
						"12160",
						"12800",
						"16000",
						"19200"
					]
				},
				{
					label: "عدد MPPT / السلاسل",
					values: [
						"2/2+2",
						"2/2+2",
						"3/2+2+2",
						"3/2+2+2"
					]
				},
				{
					label: "أقصى تيار PV (A)",
					values: [
						"32+32",
						"32+32",
						"32+32+32",
						"32+32+32"
					]
				}
			]
		},
		certificates: "VDE4105، IEC61727/62116، VDE0126، AS4777.2، CEI 0 21، EN50549-1، G98، G99، C10-11، UNE217002، NBR16149/NBR16150 — السلامة: IEC/EN 61000-6-1/2/3/4، IEC/EN 62109-1/2",
		image: p13_default,
		files: sheet(c13_pdf_asset_default.url)
	},
	{
		id: "deye-sun-14-20k-sg05lp3",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر Deye ‏20kW ثلاثي الطور (جهد منخفض)",
		model: "SUN-20K-SG05LP3EU-SM2",
		power: "20 kW",
		description: "إنفرتر هجين ثلاثي الطور لبطاريات 48V بتيار شحن حتى 350A.",
		about: "إنفرتر هجين ثلاثي الطور لبطاريات 48V بتيار شحن حتى 350A. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمنشآت ثلاثية الطور حتى 20 kW مع بطاريات 48V.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "30000 Wp"],
					["أقصى جهد دائرة مفتوحة", "800 VDC"],
					["عدد MPPT", "2"],
					["تيار دخل الألواح", "36+20 A"],
					["مدى MPPT", "160~650 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "رصاص-حمض أو ليثيوم أيون"],
					["فولتية البطاريات", "40~60 VDC"],
					["أقصى تيار شحن", "350 A"],
					["عدد مداخل البطاريات", "1"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "220/380 V، 230/400 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.6%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "-40~60 °C"], ["درجة الحماية", "IP65"]]
			}
		],
		image: p11_default,
		files: sheet(c11_pdf_asset_default.url)
	},
	{
		id: "deye-sun-29-9-50k-sg01hp3",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر Deye ‏50kW ثلاثي الطور (جهد عالٍ)",
		model: "SUN-50K-SG01HP3-EU-BM4",
		power: "50 kW",
		description: "إنفرتر هجين ثلاثي الطور لبطاريات الجهد العالي بـ4 MPPT ومدخلي بطارية.",
		about: "إنفرتر هجين ثلاثي الطور لبطاريات الجهد العالي بـ4 MPPT ومدخلي بطارية. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمشاريع ثلاثية الطور حتى 50 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "100000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "4"],
					["تيار دخل الألواح", "55/36 A"],
					["مدى MPPT", "180~850 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "160~800 VDC"],
					["أقصى تيار شحن", "50+50 A"],
					["عدد مداخل البطاريات", "2"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "400/230 V، 380/220 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.6%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "40~60 °C"], ["درجة الحماية", "IP65"]]
			}
		],
		image: p12_default,
		files: sheet(c12_pdf_asset_default.url)
	},
	{
		id: "deye-sun-60-80k-sg02hp3",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر Deye هايبرد ‏80kW ثلاثي الطور (جهد عالٍ)",
		model: "EU3-HP01SG-K-80SUN-3BM",
		power: "80 kW",
		description: "إنفرتر هجين تجاري ثلاثي الطور لبطاريات الجهد العالي.",
		about: "إنفرتر هجين تجاري ثلاثي الطور لبطاريات الجهد العالي. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمشاريع التجارية والصناعية حتى 80 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "128000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "4"],
					["تيار دخل الألواح", "54 A"],
					["مدى MPPT", "180~850 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "160~800 VDC"],
					["أقصى تيار شحن", "50+50 A"],
					["عدد مداخل البطاريات", "2"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "400/230 V، 380/220 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.6%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "40~60 °C"], ["درجة الحماية", "IP65"]]
			}
		],
		image: p10_default,
		files: sheet(c10_pdf_asset_default.url)
	},
	{
		id: "deye-sun-125k-sg02hp3-gm10",
		category: "inverters",
		brand: "Deye",
		name: "إنفرتر Deye ‏125kW ثلاثي الطور (جهد عالٍ)",
		model: "SUN-125K-SG02HP3-EU-GM10",
		power: "125 kW",
		description: "إنفرتر هجين للمشاريع الكبيرة بـ10 MPPT وشحن حتى 100+100A.",
		about: "إنفرتر هجين للمشاريع الكبيرة بـ10 MPPT وشحن حتى 100+100A. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمصانع والمشاريع الكبيرة حتى 125 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "200000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "10"],
					["تيار دخل الألواح", "42 A لكل MPPT"],
					["مدى MPPT", "150~850 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "رصاص-حمض أو ليثيوم أيون"],
					["فولتية البطاريات", "160~1000 VDC"],
					["أقصى تيار شحن", "100+100 A"],
					["عدد مداخل البطاريات", "2"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "220/380 V، 230/400 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "98.70%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "-40~+60 °C (تخفيض القدرة فوق 45 °C)"], ["درجة الحماية", "IP65"]]
			}
		],
		image: "/brand/makers/deye.png",
		files: []
	},
	{
		id: "solis-s6-eh2p-5-8k",
		category: "inverters",
		brand: "Solis",
		name: "إنفرتر تخزين Solis ‏5–8kW (Split Phase / جهد منخفض)",
		model: "S6-EH2P(5-8)K02-SV-YD-L",
		power: "5 – 8 kW",
		description: "إنفرتر تخزين من سلسلة SOLARATOR لبطاريات 40–60V بحماية IP66 وشاشة 7 بوصة.",
		about: "إنفرتر هجين من Solis (سلسلة SOLARATOR) بنظام Split Phase ويعمل مع بطاريات الجهد المنخفض. يدعم مدخل PV حتى 160% من القدرة المقننة، والتحويل بين الشبكة والبطارية في أقل من 10ms، والتحميل الزائد 200% لمدة 10 ثوانٍ لتشغيل المضخات والمكيفات، والربط المتوازي حتى 6 وحدات.",
		features: [
			"مدخل PV حتى 160% من القدرة المقننة",
			"تيار مدخل PV حتى 21A متوافق مع الألواح عالية القدرة",
			"تحميل زائد 200% لمدة 10s لتشغيل المحركات والمضخات والمكيفات",
			"تحويل سلس بين الشبكة وخارجها في أقل من 10ms",
			"خرج Split-phase غير متوازن حتى 50% لكل طور",
			"متوافق مع أي بطارية بين 40V و60V",
			"طرق متعددة لربط المولد والتحكم التلقائي",
			"حتى 6 وحدات على التوازي وإدارة ذكية للأحمال",
			"وضع خارج الشبكة بالألواح فقط لتقليل التكلفة الأولية",
			"شاشة لمس صناعية 7 بوصة وحماية IP66"
		],
		uses: [
			"المنازل والمنشآت الصغيرة",
			"منظومات هجينة وخارج الشبكة",
			"دعم الأحمال الحرجة والمضخات"
		],
		suitableFor: "للمنازل والمنشآت الصغيرة التي تحتاج إنفرتر 5–8kW مع بطارية جهد منخفض ومرونة في ربط المولد.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["أقصى جهد", "500 V"],
					["الجهد المقنن", "330 V"],
					["جهد البدء", "90 V"],
					["نطاق MPPT", "90–435 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["نوع البطارية", "Li-ion / Lead-acid"],
					["جهد البطارية", "40–60 V"],
					["الاتصال", "RS485 / CAN"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Split Phase — L+N+PE/2L+PE 220V؛ L1/L2/N(PE) 120/240 VAC"],
					["التردد", "50 / 60 Hz"],
					["زمن التحويل للاحتياطي", "<10 ms"],
					["القدرة الظاهرية القصوى (احتياطي)", "2× القدرة المقننة لمدة 10 s"],
					["معامل القدرة", ">0.99 (0.8 leading – 0.8 lagging)"],
					["THDi", "<3%"]
				]
			},
			{
				title: "الكفاءة",
				rows: [
					["أقصى كفاءة", "96.0%"],
					["الكفاءة الأوروبية", "94.5%"],
					["شحن البطارية من PV/AC", "95.0%"],
					["تفريغ البطارية إلى AC", "93.7%"]
				]
			},
			{
				title: "الحماية",
				rows: [
					["حماية الصواعق", "نعم"],
					["مراقبة الأعطال الأرضية", "نعم"],
					["AFCI 2.0 مدمج", "نعم"],
					["حماية عكس قطبية DC", "نعم"],
					["فئة الحماية / الجهد الزائد", "I / II (PV وBAT)، III (MAINS وBACKUP وGEN)"]
				]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["الشاشة", "7.0\" LCD & Bluetooth + APP"],
					["الاتصالات", "Wi-Fi+LAN+Bluetooth، CAN-BMS، CAN-Parallel×2، RS485-Meter، RS485، DRM، DI، DO×2؛ اختياري: 2G/3G/4G"],
					["الأبعاد", "390 × 620 × 237 mm"],
					["الوزن", "28.8 kg"],
					["الحماية", "IP66 (TYPE 4X)"],
					["حرارة التشغيل", "−25 ~ +60 °C"],
					["الضوضاء", "<55 dB(A)"],
					["الارتفاع", "4000 m"],
					["الطوبولوجيا", "Transformerless"]
				]
			}
		],
		modelTable: {
			models: [
				"5K",
				"6K",
				"7.5K",
				"8K"
			],
			rows: [
				{
					label: "القدرة المقننة",
					values: [
						"5 kW",
						"6 kW",
						"7.5 kW",
						"8 kW"
					]
				},
				{
					label: "أقصى مصفوفة PV موصى بها",
					values: [
						"10 kW",
						"12 kW",
						"16 kW",
						"16 kW"
					]
				},
				{
					label: "أقصى قدرة PV مستخدمة",
					values: [
						"8 kW",
						"9.6 kW",
						"12.8 kW",
						"12.8 kW"
					]
				},
				{
					label: "أقصى تيار شحن/تفريغ",
					values: [
						"112 A",
						"135 A",
						"190 A",
						"190 A"
					]
				},
				{
					label: "MPPT / السلاسل",
					values: [
						"2/2",
						"2/3",
						"2/4",
						"2/4"
					]
				}
			]
		},
		certificates: "Inmetro140، IEEE 1547 — السلامة: IEC/EN 61000-6-1/2/3/4، IEC/EN 62109-1/2، UL 1741، UL 1699B، FCC",
		image: p20_default,
		files: sheet(c20_pdf_asset_default.url)
	},
	{
		id: "solis-s6-eh3p-12-20k-h",
		category: "inverters",
		brand: "Solis",
		name: "إنفرتر Solis ‏20kW ثلاثي الطور (جهد عالٍ)",
		model: "S6-EH3P20K-H",
		power: "20 kW",
		description: "إنفرتر تخزين ثلاثي الطور لبطاريات الجهد العالي بـ4 MPPT.",
		about: "إنفرتر تخزين ثلاثي الطور لبطاريات الجهد العالي بـ4 MPPT. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمنشآت ثلاثية الطور حتى 20 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "40000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "4"],
					["تيار دخل الألواح", "40 A"],
					["مدى MPPT", "150~850 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "120~850 VDC"],
					["أقصى تيار شحن", "50 A"],
					["عدد مداخل البطاريات", "1"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "220/380 V، 230/400 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.7%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "-40~60 °C"], ["درجة الحماية", "IP66"]]
			}
		],
		image: p18_default,
		files: sheet(c18_pdf_asset_default.url)
	},
	{
		id: "solis-s6-eh3p-29-9-50k-h",
		category: "inverters",
		brand: "Solis",
		name: "إنفرتر Solis ‏50kW ثلاثي الطور (جهد عالٍ)",
		model: "S6-EH3P50K-H",
		power: "50 kW",
		description: "إنفرتر تخزين تجاري بـ4 MPPT وشحن 70×2A.",
		about: "إنفرتر تخزين تجاري بـ4 MPPT وشحن 70×2A. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمشاريع ثلاثية الطور حتى 50 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "100000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "4"],
					["تيار دخل الألواح", "4×40 A"],
					["مدى MPPT", "150~850 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "150~800 VDC"],
					["أقصى تيار شحن", "70×2 A"],
					["عدد مداخل البطاريات", "غير مذكور في المصدر"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "غير مذكور في المصدر"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.8%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "غير مذكور في المصدر"], ["درجة الحماية", "غير مذكور في المصدر"]]
			}
		],
		image: p19_default,
		files: sheet(c19_pdf_asset_default.url)
	},
	{
		id: "solis-s6-eh3p-80k",
		baseId: "solis-s6-eh3p-75-125k",
		category: "inverters",
		brand: "Solis",
		name: "إنفرتر Solis هايبرد ‏80kW ثلاثي الطور (جهد عالٍ)",
		model: "S6-EH3P(75-125)K10-NV-YD-H",
		power: "80 kW",
		description: "إنفرتر تخزين للمشاريع الكبيرة بـ10 MPPT وشحن 100+100A.",
		about: "إنفرتر تخزين للمشاريع الكبيرة بـ10 MPPT وشحن 100+100A. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمشاريع التجارية والصناعية حتى 80 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "160 kW"],
					["أقصى جهد دائرة مفتوحة", "1000 V"],
					["عدد MPPT", "10"],
					["تيار دخل الألواح", "42 A لكل MPPT"],
					["مدى MPPT", "150~950 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "300~950 V"],
					["أقصى تيار شحن", "100+100 A"],
					["عدد مداخل البطاريات", "2"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "380/220 V، 400/230 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.5%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "-25~+60 °C"], ["درجة الحماية", "IP66"]]
			}
		],
		image: p21_default,
		files: sheet(c21_pdf_asset_default.url)
	},
	{
		id: "solis-s6-eh3p-75-125k",
		category: "inverters",
		brand: "Solis",
		name: "إنفرتر Solis هايبرد ‏125kW ثلاثي الطور (جهد عالٍ)",
		model: "S6-EH3P25K10-NV-YD-H",
		power: "125 kW",
		description: "إنفرتر تخزين للمشاريع الكبيرة بـ10 MPPT وشحن 100+100A.",
		about: "إنفرتر تخزين للمشاريع الكبيرة بـ10 MPPT وشحن 100+100A. — المواصفات المعتمدة من ACTES.",
		features: [],
		uses: ["منظومات هجينة ثلاثية الطور", "منشآت تجارية وصناعية"],
		suitableFor: "للمصانع والمشاريع الكبيرة حتى 125 kW.",
		specs: [
			{
				title: "مدخل الألواح (PV)",
				rows: [
					["قدرة دخل الألواح", "250000 Wp"],
					["أقصى جهد دائرة مفتوحة", "1000 VDC"],
					["عدد MPPT", "10"],
					["تيار دخل الألواح", "60/42 A"],
					["مدى MPPT", "150~950 V"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["توافق البطاريات", "ليثيوم أيون"],
					["فولتية البطاريات", "300~950 VDC"],
					["أقصى تيار شحن", "100+100 A"],
					["عدد مداخل البطاريات", "2"]
				]
			},
			{
				title: "الخرج AC",
				rows: [["فولتية الخرج", "400/230 V، 380/220 V"]]
			},
			{
				title: "الكفاءة",
				rows: [["الكفاءة", "97.8%"]]
			},
			{
				title: "العامة",
				rows: [["حرارة التشغيل", "40~60 °C"], ["درجة الحماية", "IP66"]]
			}
		],
		image: p21_default,
		files: sheet(c21_pdf_asset_default.url)
	},
	{
		id: "lipower-2012emh",
		category: "inverters",
		brand: "Li-Power",
		name: "إنفرتر هجين Li-Power ‏1.6kW ‏12V",
		model: "2012EMH",
		power: "1.6 kW",
		description: "إنفرتر هجين أحادي الطور لبطارية 12V بموجة جيبية نقية وشاحن شمسي MPPT حتى 2000W.",
		about: "إنفرتر صغير من Li-Power يجمع بين إنفرتر 1600W وشاحن شمسي MPPT وشاحن من الشبكة، يعمل مع بطارية 12V. مناسب للأحمال الصغيرة والمنازل والاستخدامات خارج الشبكة.",
		features: [
			"شاشة لمس ملونة لعرض المعلومات بوضوح",
			"قدرة خرج معززة في وضع الطاقة الشمسية",
			"استغلال أعلى للطاقة الشمسية بالتكامل مع الشبكة",
			"خرج جهد AC رئيسي ومساعد",
			"ترشيح EMI ومقاومة قوية للتشويش",
			"مؤشر إضاءة RGB وتصميم أبيض مطفي"
		],
		uses: [
			"المنازل الصغيرة والشاليهات",
			"الأحمال الخفيفة والإنارة",
			"المنظومات خارج الشبكة مع بطارية 12V"
		],
		suitableFor: "لمن يحتاج منظومة صغيرة بسيطة بقدرة حتى 1.6kW وبطارية 12V.",
		specs: [
			{
				title: "المدخل AC",
				rows: [
					["نوع المدخل", "L+N+PE"],
					["الجهد المقنن", "220/230/240 VAC"],
					["نطاق الجهد", "90–280VAC ±3V (Normal) / 170–280VAC ±3V (UPS)"],
					["التردد", "50/60 Hz (تكيف تلقائي)"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Single Phase Hybrid"],
					["القدرة المقننة", "1600 W"],
					["جهد الخرج", "220/230/240 VAC ±5%"],
					["الموجة", "Pure sine wave"],
					["زمن التحويل", "UPS: 10 ms / APL: 20 ms"],
					["القدرة القصوى", "3200 VA"],
					["التحميل الزائد (بطارية)", "11s@105–150%؛ 2s@150–200%؛ 400ms@>200%"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["الجهد المقنن", "12 Vdc"],
					["جهد الشحن الثابت", "14.1 Vdc"],
					["جهد التعويم (قابل للتعديل)", "13.5 Vdc"]
				]
			},
			{
				title: "الشاحن PV-AC",
				rows: [
					["نوع الشحن الشمسي", "MPPT"],
					["أقصى قدرة PV", "2000 W"],
					["نطاق MPPT", "30–500 Vdc"],
					["نطاق Vmp الأمثل", "300–400 Vdc"],
					["أقصى جهد PV", "500 Vdc"],
					["أقصى تيار PV", "14 A"],
					["أقصى تيار شحن شمسي", "100 A"],
					["أقصى تيار شحن من الشبكة", "60 A"],
					["أقصى تيار شحن", "100 A"]
				]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["الشاشة", "LCD"],
					["الاتصالات", "RS232؛ منفذ توسعة لبطاقة BMS وWIFI والتلامس الجاف"],
					["التوازي", "غير مدعوم"],
					["حرارة التشغيل", "−10 ~ 50 °C"],
					["الرطوبة", "20%–95%"],
					["الضوضاء", "≤50 dB"],
					["الأبعاد (عمق×عرض×ارتفاع)", "404 × 304 × 114 mm"],
					["الوزن", "5.5 kg"]
				]
			}
		],
		certificates: "EN-IEC 60335-1، EN-IEC 60335-2-29، IEC 62109-1",
		image: p15_default,
		files: sheet(c15_pdf_asset_default.url)
	},
	{
		id: "lipower-bz4024smhgw",
		category: "inverters",
		brand: "Li-Power",
		name: "إنفرتر هجين Li-Power ‏4kW ‏24V",
		model: "BZ4024SMHGW (BZ4024-24V)",
		power: "4 kW",
		description: "إنفرتر هجين أحادي الطور لبطارية 24V مع إمكانية الربط بالشبكة وشاحن MPPT حتى 6500W.",
		about: "إنفرتر هجين من Li-Power بقدرة 4000W على البطارية و4500W كإنفرتر شمسي، يعمل مع بطارية 24V ويدعم التشغيل المتصل بالشبكة والعمل بدون بطارية، مع دعم اتصال BMS لبطاريات الليثيوم.",
		features: [
			"إعادة تشغيل تلقائية لبطارية الليثيوم لتسهيل شحنها",
			"حماية من عكس توصيل البطارية بمفتاح منصهر",
			"دقة عالية لجهد الخرج ±5% لحماية الأجهزة",
			"وضع إمداد ذكي يوزع الطاقة بين الألواح والشبكة والبطارية",
			"معامل قدرة 1.0 وكفاءة عالية واستهلاك منخفض",
			"خيار WIFI خارجي للمراقبة في أي وقت",
			"جهد شحن الشبكة والألواح قابل للتعديل لأنواع البطاريات المختلفة",
			"يعمل بدون بطارية لتقليل تكلفة المنظومة",
			"دعم BMS لبطاريات الليثيوم وتصميم نحيف سهل التركيب"
		],
		uses: [
			"المنازل والمحلات الصغيرة",
			"منظومات هجينة مع بطارية 24V",
			"منظومات متصلة بالشبكة بدون بطارية"
		],
		suitableFor: "للمنازل والمحلات التي تحتاج إنفرتر 4kW مع بطارية 24V أو بدونها.",
		specs: [
			{
				title: "المدخل AC",
				rows: [
					["نوع المدخل", "L+N+PE"],
					["الجهد المقنن", "220/230/240 VAC"],
					["نطاق الجهد", "90–280VAC ±3V (Normal) / 170–280VAC ±3V (UPS)"],
					["التردد", "50/60 Hz (تكيف تلقائي)"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Single Phase Hybrid"],
					["القدرة المقننة (بطارية)", "4000 W"],
					["القدرة المقننة (شمسي)", "4500 W"],
					["جهد الخرج", "220/230/240 VAC ±5%"],
					["الموجة", "Pure sine wave"],
					["زمن التحويل", "UPS: 10 ms / APL: 20 ms"],
					["القدرة القصوى", "8000 VA"]
				]
			},
			{
				title: "التشغيل مع الشبكة",
				rows: [
					["نطاق الجهد للتصدير", "170–265 VAC"],
					["نطاق التردد", "49–51±1Hz / 59–61±1Hz"],
					["تيار الخرج المقنن", "17.4 A"],
					["معامل القدرة", ">0.99"],
					["أقصى كفاءة تحويل DC/AC", "98%"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["الجهد المقنن", "24 Vdc"],
					["جهد الشحن الثابت", "28.2 Vdc"],
					["جهد التعويم", "27 Vdc"]
				]
			},
			{
				title: "الشاحن PV-AC",
				rows: [
					["نوع الشحن الشمسي", "MPPT"],
					["أقصى قدرة PV", "6500 W"],
					["نطاق MPPT", "60–500 Vdc"],
					["نطاق Vmp الأمثل", "300–400 Vdc"],
					["أقصى جهد PV", "500 Vdc"],
					["أقصى تيار PV", "27 A"],
					["أقصى تيار شحن شمسي", "120 A"],
					["أقصى تيار شحن من الشبكة", "100 A"]
				]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["الاتصالات", "RS232، RS485؛ منفذ لبطاقة BMS وWIFI والتلامس الجاف"],
					["التوازي", "غير مدعوم"],
					["حرارة التشغيل", "−10 ~ 50 °C"],
					["الضوضاء", "≤50 dB"],
					["الأبعاد", "483 × 313 × 143 mm"],
					["الوزن", "7.5 kg"]
				]
			}
		],
		compatible: {
			items: [
				"PYLONTECH",
				"PYTES",
				"DYNESS",
				"BYD",
				"SUNWODA",
				"EVE",
				"PACEE",
				"JD"
			],
			source: "قائمة «compatibility BMS» في الداتاشيت الرسمي لـ Li-Power BZ4024 — العلامات المتوافقة على مستوى اتصال BMS."
		},
		certificates: "EN-IEC 60335-1، EN-IEC 60335-2-29، IEC 62109-1",
		image: p17_default,
		files: sheet(c17_pdf_asset_default.url)
	},
	{
		id: "lipower-bz6248smh",
		category: "inverters",
		brand: "Li-Power",
		name: "إنفرتر هجين Li-Power ‏6.2kW ‏48V",
		model: "BZ6248SMH (BZ6248-48V)",
		power: "6.2 kW",
		description: "إنفرتر هجين أحادي الطور لبطارية 48V مع الربط بالشبكة والتوازي حتى 9 وحدات.",
		about: "إنفرتر هجين من Li-Power بقدرة 6200W على البطارية و6500W كإنفرتر شمسي، يعمل مع بطارية 48V، ويدعم الربط بالشبكة والعمل بدون بطارية والتشغيل المتوازي حتى 9 وحدات لزيادة القدرة.",
		features: [
			"إعادة تشغيل تلقائية لبطارية الليثيوم",
			"حماية من عكس توصيل البطارية بمفتاح منصهر",
			"دقة عالية لجهد الخرج ±5%",
			"وضع إمداد ذكي يوزع الطاقة بين الألواح والشبكة والبطارية",
			"معامل قدرة 1.0 وكفاءة عالية",
			"خيار WIFI خارجي للمراقبة",
			"يعمل بدون بطارية لتقليل تكلفة المنظومة",
			"دعم BMS لبطاريات الليثيوم",
			"تشغيل متوازٍ حتى 9 وحدات لأحمال أكبر"
		],
		uses: [
			"المنازل والفلل",
			"المحلات والمكاتب",
			"منظومات هجينة مع بطارية 48V",
			"منظومات متوازية لأحمال أكبر"
		],
		suitableFor: "للمنازل والمنشآت الصغيرة التي تحتاج 6kW تقريباً مع بطارية 48V وإمكانية التوسعة بالتوازي.",
		specs: [
			{
				title: "المدخل AC",
				rows: [
					["نوع المدخل", "L+N+PE"],
					["الجهد المقنن", "220/230/240 VAC"],
					["نطاق الجهد", "90–280VAC ±3V (Normal) / 170–280VAC ±3V (UPS)"],
					["التردد", "50/60 Hz (تكيف تلقائي)"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["نوع النظام", "Single Phase Hybrid"],
					["القدرة المقننة (بطارية)", "6200 W"],
					["القدرة المقننة (شمسي)", "6500 W"],
					["جهد الخرج", "220/230/240 VAC ±5%"],
					["الموجة", "Pure sine wave"],
					["زمن التحويل", "UPS: 10 ms / APL: 20 ms"],
					["القدرة القصوى", "12400 VA"]
				]
			},
			{
				title: "التشغيل مع الشبكة",
				rows: [
					["نطاق الجهد للتصدير", "170–265 VAC"],
					["نطاق التردد", "49–51±1Hz / 59–61±1Hz"],
					["تيار الخرج المقنن", "26.9 A"],
					["معامل القدرة", ">0.99"],
					["أقصى كفاءة تحويل DC/AC", "98%"]
				]
			},
			{
				title: "البطارية",
				rows: [
					["الجهد المقنن", "48 Vdc"],
					["جهد الشحن الثابت", "56.4 Vdc"],
					["جهد التعويم", "54 Vdc"]
				]
			},
			{
				title: "الشاحن PV-AC",
				rows: [
					["نوع الشحن الشمسي", "MPPT"],
					["أقصى قدرة PV", "8500 W"],
					["نطاق MPPT", "60–500 Vdc"],
					["نطاق Vmp الأمثل", "360–430 Vdc"],
					["أقصى جهد PV", "500 Vdc"],
					["أقصى تيار PV", "27 A"],
					["أقصى تيار شحن شمسي", "120 A"],
					["أقصى تيار شحن من الشبكة", "100 A"]
				]
			},
			{
				title: "الاتصالات والعامة",
				rows: [
					["الاتصالات", "RS232، RS485؛ منفذ لبطاقة BMS وWIFI والتلامس الجاف"],
					["التوازي", "مدعوم (Parallel / Grid connection) — حتى 9 وحدات"],
					["حرارة التشغيل", "−10 ~ 50 °C"],
					["الضوضاء", "≤50 dB"],
					["الأبعاد", "483 × 313 × 143 mm"],
					["الوزن", "8.5 kg"]
				]
			}
		],
		compatible: {
			items: [
				"PYLONTECH",
				"PYTES",
				"DYNESS",
				"BYD",
				"SUNWODA",
				"EVE",
				"PACEE",
				"JD"
			],
			source: "قائمة «compatibility BMS» في الداتاشيت الرسمي لـ Li-Power BZ6248 — العلامات المتوافقة على مستوى اتصال BMS."
		},
		certificates: "EN-IEC 60335-1، EN-IEC 60335-2-29، IEC 62109-1",
		image: p16_default,
		files: sheet(c16_pdf_asset_default.url)
	},
	{
		id: "pylontech-rv12100ch",
		category: "batteries",
		brand: "Pylontech",
		name: "بطارية ليثيوم Pylontech ‏12V 100Ah",
		model: "RV12100CH",
		power: "1.28 kWh",
		description: "بطارية LiFePO4 بجهد 12.8V وسعة 100Ah مع فيلم تسخين ونظام BMS ذكي.",
		about: "بطارية ليثيوم فوسفات الحديد من Pylontech بسعة 100Ah وطاقة 1280Wh، أخف بنسبة 50% من بطاريات الرصاص بنفس السعة. تتيح استخدام 100% من طاقتها وتدوم أكثر من 4500 دورة، ويمكن ربط حتى 8 بطاريات على التوازي.",
		features: [
			"استخدام 100% من الطاقة المتاحة",
			"أكثر من 4500 دورة عند عمق تفريغ 80%",
			"مؤشرات تشغيل وإنذار وحالة شحن للمراقبة الفورية",
			"أخف 50% من بطاريات الرصاص بنفس السعة",
			"توسعة حتى 8 بطاريات على التوازي (12V 800Ah — 10.24kWh)",
			"فيلم تسخين للعمل في البرد الشديد",
			"تفريغ ذاتي منخفض — تخزين أكثر من 12 شهراً",
			"BMS ذكي لموازنة الخلايا وحمايات متعددة"
		],
		uses: [
			"المنظومات الصغيرة 12V",
			"الاستخدامات خارج الشبكة",
			"بديل لبطاريات الرصاص العميقة"
		],
		suitableFor: "لمن يحتاج بطارية 12V خفيفة وطويلة العمر لمنظومة صغيرة، مع إمكانية التوسعة بالتوازي.",
		specs: [
			{
				title: "المواصفات الكهربائية",
				rows: [
					["الجهد", "12.8 VDC"],
					["السعة", "100 Ah"],
					["الطاقة", "1280 Wh"],
					["نوع البطارية", "LiFePO4"],
					["المقاومة الداخلية", "<10 mΩ"],
					["التفريغ الذاتي", "≤3% شهرياً"],
					["أقصى عدد على التوازي", "8"],
					["العمر التصميمي", "≥10 سنوات"],
					["دورة الحياة", ">4500 (80% DOD، 0.5C، 25°C)"]
				]
			},
			{
				title: "الشحن والتفريغ",
				rows: [
					["أقصى تيار تفريغ مستمر", "100 A"],
					["تيار التفريغ الأقصى اللحظي", "200 A @10 s"],
					["تيار الشحن الموصى به", "≤50 A"],
					["أقصى تيار شحن مستمر", "100 A"],
					["جهد الشحن الموصى به", "14 ~ 14.4 V"]
				]
			},
			{
				title: "البيئة",
				rows: [
					["حرارة التشغيل", "−20 ~ 50 °C (الشحن تحت 0°C عبر فيلم التسخين)"],
					["حرارة التخزين", "−20 ~ 60 °C"],
					["الرطوبة", "5% ~ 95%"],
					["أقصى ارتفاع", "4000 m"]
				]
			},
			{
				title: "الميكانيكية",
				rows: [
					["الأبعاد", "300 × 160 × 210 mm"],
					["الوزن", "≈12 kg"],
					["نوع الأطراف", "M8 × 1.25 × 14 mm"],
					["عزم الأطراف", "8 ± 1 Nm"],
					["مادة الغلاف", "Metal"],
					["الحماية", "IP20"],
					["التبريد", "Natural Cooling"],
					["BMS", "مدمج — موازنة وحمايات متعددة"]
				]
			}
		],
		certificates: "UN38.3، MSDS",
		image: p2_default,
		files: sheet(c2_pdf_asset_default.url)
	},
	{
		id: "pylontech-rv12200",
		category: "batteries",
		brand: "Pylontech",
		name: "بطارية ليثيوم Pylontech ‏12V 200Ah",
		model: "RV12200",
		power: "2.56 kWh",
		description: "بطارية LiFePO4 ذكية 12.8V/200Ah مع Bluetooth وفيلم تسخين وحماية IP65.",
		about: "بطارية ليثيوم ذكية من سلسلة Pylontech 12V صُممت لتحل محل بطاريات الرصاص العميقة، مثالية للمركبات الترفيهية والقوارب والشاحنات والكبائن والاستخدامات خارج الشبكة. تدعم المراقبة عبر Bluetooth وتطبيق Pylontech Auto.",
		features: [
			"أكثر من 4000 دورة لتعظيم العائد",
			"ربط حتى 16 بطارية (4S4P) بطاقة قصوى 40.96 kWh",
			"مراقبة فورية عبر Bluetooth من الجوال (تطبيق Pylontech Auto)",
			"فيلم تسخين داخلي للشحن في البرد الشديد",
			"حماية IP65 وكفاءة 99%"
		],
		uses: [
			"المركبات الترفيهية (RV)",
			"القوارب والاستخدامات البحرية",
			"الشاحنات والكبائن",
			"الاستخدامات خارج الشبكة"
		],
		suitableFor: "لمن يريد استبدال بطاريات الرصاص العميقة ببطارية 12V أخف وأطول عمراً، خصوصاً في التطبيقات المتنقلة وخارج الشبكة.",
		specs: [
			{
				title: "المواصفات الكهربائية",
				rows: [
					["الجهد", "12.8 VDC"],
					["السعة", "200 Ah"],
					["نوع البطارية", "LiFePO4"],
					["المقاومة", "<10 mΩ"],
					["الكفاءة", "99%"],
					["التفريغ الذاتي", "≤3% شهرياً"],
					["أقصى ربط توازي/تسلسل", "4S4P"],
					["دورة الحياة", ">4000"]
				]
			},
			{
				title: "الشحن والتفريغ",
				rows: [
					["أقصى تيار تفريغ مستمر", "100 A"],
					["تيار التفريغ الأقصى اللحظي", "200 A @5 s"],
					["أقصى تيار شحن مستمر", "100 A"],
					["جهد الشحن الموصى به", "14 V ~ 14.6 V"]
				]
			},
			{
				title: "البيئة",
				rows: [
					["حرارة التفريغ", "−20 ~ 60 °C"],
					["حرارة الشحن", "0 ~ 55 °C"],
					["حرارة التخزين", "−40 ~ 60 °C"],
					["حرارة التشغيل", "−20 ~ 50 °C"],
					["الرطوبة", "5% ~ 95%"]
				]
			},
			{
				title: "الميكانيكية والأخرى",
				rows: [
					["الأبعاد", "459 × 190 × 215 mm"],
					["الوزن", "≈20.9 kg"],
					["نوع الأطراف", "M8 × 1.25 × 14 mm"],
					["عزم الأطراف", "9 ± 1 Nm"],
					["مادة الغلاف", "PC"],
					["الحماية", "IP65"],
					["الاتصال", "BLE 5.0"],
					["فيلم التسخين", "مدعوم"],
					["أقصى ارتفاع", "4000 m"]
				]
			}
		],
		certificates: "UL1973، FCC، CE، UKCA، Bluetooth SIG",
		image: p3_default,
		files: sheet(c3_pdf_asset_default.url)
	},
	{
		id: "pylontech-uf5000",
		category: "batteries",
		brand: "Pylontech",
		name: "بطارية راك Pylontech UF5000 ‏5.12kWh",
		model: "UF5000",
		power: "5.12 kWh",
		description: "وحدة بطارية LiFePO4 منخفضة الجهد 51.2V بسعة 5.12 كيلوواط·ساعة متوافقة مع راك 19 بوصة وقابلة للتوسعة حتى 20 وحدة.",
		about: "وحدة تخزين منخفضة الجهد من Pylontech بجهد اسمي 51.2 فولت وسعة 5.12 كيلوواط·ساعة (منها 4.864 كيلوواط·ساعة قابلة للاستخدام بعمق تفريغ 95%). تُركّب داخل راك قياسي 19 بوصة بأبعاد 442 × 452.6 × 161 مم ووزن 42 كجم، وتتوسع حتى 20 وحدة في السلسلة الواحدة، بعمر يتجاوز 6000 دورة وعمر تصميمي 15 سنة، مع اتصال RS485/CAN.",
		features: [
			"متوافقة مع راك قياسي 19 بوصة — تركيب مرتب وسهل",
			"توسعة حرة حتى 20 وحدة في السلسلة الواحدة",
			"مرونة في الاستخدام المختلط ضمن المنظومة",
			"عمر يتجاوز 6000 دورة وعمر تصميمي 15 سنة",
			"عمق تفريغ 95% — سعة فعلية 4.864 kWh",
			"تيار شحن وتفريغ 100 A واستطاعة لحظية حتى 200 A لمدة 15 ثانية"
		],
		uses: [
			"التخزين المنزلي والتجاري مع الإنفرترات الهجينة 48V",
			"أنظمة الراك متعددة الوحدات",
			"المنظومات خارج الشبكة والاحتياطية"
		],
		suitableFor: "للمنظومات منخفضة الجهد 48V التي تحتاج تخزيناً قابلاً للتوسعة وحدةً بوحدة داخل راك قياسي 19 بوصة.",
		specs: [
			{
				title: "المواصفات الكهربائية",
				rows: [
					["الموديل", "UF5000"],
					["الجهد الاسمي", "51.2 Vdc"],
					["سعة وحدة البطارية", "5.12 kWh"],
					["السعة القابلة للاستخدام", "4.864 kWh"],
					["عمق التفريغ", "95%"],
					["تيار الشحن/التفريغ (عادي)", "100 A"],
					["أقصى تيار شحن/تفريغ", "100 A"],
					["تيار الذروة", "121~200 A @ 15 ثانية"],
					["تيار القصر / زمنه", "< 2000 A / 1 ms"],
					["دورة الحياة (‎@25 °C)", "> 6000"],
					["العمر التصميمي (‎@25 °C)", "15 سنة"]
				]
			},
			{
				title: "التوسعة والاتصال",
				rows: [
					["عدد الوحدات في السلسلة الواحدة", "20"],
					["منفذ الاتصال", "RS485 / CAN"],
					["التوافق", "راك قياسي 19 بوصة"]
				]
			},
			{
				title: "الميكانيكية والبيئة",
				rows: [
					["الأبعاد (ع × ع × ر)", "442 × 452.6 × 161 mm"],
					["الوزن", "42 kg"],
					["درجة الحماية", "IP20"],
					["حرارة التشغيل — شحن", "−10~55 °C"],
					["حرارة التشغيل — تفريغ", "−10~55 °C"],
					["حرارة التخزين", "−20~60 °C"],
					["الرطوبة", "5%~95% بدون تكثيف"],
					["الارتفاع عن سطح البحر", "4000 m"]
				]
			}
		],
		certificates: "IEC62619، UN38.3، RoHS، Reach، WEEE، MSDS",
		image: pylontech_uf5000_png_asset_default.url,
		files: sheet(pylontech_uf5000_pdf_asset_default.url)
	},
	{
		id: "pylontech-rv12314",
		category: "batteries",
		brand: "HiTHIUM HeroEE",
		name: "بطارية ليثيوم هيثيوم 4 كيلو 314 أمبير 12.8 فولت",
		model: "HeroEE NeoPower 4",
		power: "4 kWh",
		description: "بطارية ليثيوم هيثيوم 12.8 فولت بسعة 4 كيلو (3.6 كيلو للاستخدام) وعمر 11000 دورة وحماية IP65.",
		about: "بطارية ليثيوم هيثيوم HeroEE NeoPower 4 بجهد 12.8 فولت وسعة 4 كيلو، منها 3.6 كيلو للاستخدام بعمق تفريغ 90%. تيار شحن وتفريغ 100 أمبير، وتدعم ربط حتى 4 بطاريات.",
		features: [
			"سعة 4 كيلو — 3.6 كيلو للاستخدام (DOD 90%)",
			"11000 دورة عند 25 °C",
			"تيار شحن وتفريغ 100 أمبير — تفريغ خلال ساعتين",
			"ربط حتى 4 بطاريات",
			"الوزن 29.5 كجم",
			"حماية IP65 ضد الماء والغبار"
		],
		uses: [
			"المنظومات 12V الصغيرة والمتوسطة",
			"الاستخدامات خارج الشبكة",
			"بديل لبطاريات الرصاص",
			"الكرفانات والقوارب"
		],
		suitableFor: "لمن يحتاج سعة كبيرة بجهد 12V في بطارية واحدة ذكية مع عمر تشغيلي طويل.",
		specs: [{
			title: "المواصفات المعتمدة",
			rows: [
				["الموديل", "HeroEE NeoPower 4"],
				["فلتية البطارية", "12.8 V"],
				["سعة البطارية", "4 kWh"],
				["سعة البطارية للاستخدام", "3.6 kWh"],
				["عمق التفريغ", "90%"],
				["تيار الشحن والتفريغ", "100 A"],
				["القدرة على الربط", "4 بطاريات"],
				["فلتية الشحن والتفريغ", "14 ~ 14.6 V"],
				["القدرة على التفريغ", "ساعتين"],
				["عدد الدورات @25°C", "11000 دورة"],
				["المقاومة للرطوبة", "5% ~ 95%"],
				["الارتفاع عن سطح البحر", "4000 m"],
				["الشهادات", "IEC62619/CE/RoHS/UN38.3"],
				["المقاس", "502 × 186 × 243 mm"],
				["الوزن", "29.5 kg"],
				["الحماية", "IP65"]
			]
		}],
		certificates: "IEC62619/CE/RoHS/UN38.3",
		image: lithium_12v_314ah_png_asset_default.url,
		files: sheet(hithium_heroee_neopower_4_g2_pdf_asset_default.url)
	},
	{
		id: "pylontech-fidus-battery-plus",
		category: "batteries",
		brand: "Pylontech",
		name: "بطارية منزلية Pylontech Fidus Battery Plus ‏16kWh",
		model: "Fidus-FB-L-16-PRO",
		power: "16.08 kWh",
		description: "بطارية منزلية 51.2V بسعة 16076Wh وعمق تفريغ 100% وحماية IP65 مع وحدة إطفاء حريق.",
		about: "بطارية تخزين منزلية من Pylontech بجهد 51.2V وسعة 16kWh قابلة للاستخدام بالكامل. تصميم متعدد طبقات الحماية مع وحدة إطفاء حريق مدمجة، وتعمل في المناطق شديدة البرودة، ومقاومة للمياه والغبار والدخان والهواء المالح، وتُركب على الجدار أو الأرض مع مراقبة عبر التطبيق.",
		features: [
			"أمان واعتمادية عالية بحماية متعددة الطبقات ووحدة إطفاء حريق",
			"مصممة للظروف القاسية: البرد الشديد، رذاذ المياه، الغبار، الدخان والهواء المالح",
			"تركيب مرن على الجدار أو الأرض",
			"مراقبة ذكية عبر التطبيق وشاشة LED — Bluetooth وWIFI",
			"عمق تفريغ 100% و8000 دورة وعمر تصميمي 15 سنة",
			"تسخين تلقائي للبطارية بين −20 و0 °C للسماح بالشحن"
		],
		uses: [
			"التخزين المنزلي مع الإنفرترات الهجينة 48V",
			"المواقع الساحلية والبيئات القاسية",
			"الأنظمة متعددة البطاريات"
		],
		suitableFor: "للمنازل التي تحتاج سعة تخزين كبيرة 16kWh بجهد منخفض وأمان عالٍ، بما في ذلك المناطق الساحلية.",
		specs: [
			{
				title: "المواصفات الكهربائية",
				rows: [
					["الجهد", "51.2 Vdc"],
					["السعة الاسمية", "16076 Wh"],
					["السعة القابلة للاستخدام", "16076 Wh"],
					["عمق التفريغ", "100%"],
					["جهد التفريغ", "40 ~ 56.8 Vdc"],
					["جهد الشحن", "56 ~ 56.8 Vdc"],
					["أقصى تيار شحن/تفريغ مستمر", "200/200 A"],
					["التيار الأقصى", "300 A @15 s"],
					["دورة الحياة", "8000 (25 °C)"],
					["العمر التصميمي", "15 سنة"]
				]
			},
			{
				title: "التوصيل والتوسعة",
				rows: [
					["الاتصالات", "CAN، RS485"],
					["أقصى عدد في المجموعة", "20"],
					["أقصى عدد مجموعات", "6 (يتطلب LV-HUB-V2 للمجموعات المتعددة)"],
					["التفاعل", "شاشة، Bluetooth وWIFI"]
				]
			},
			{
				title: "البيئة والحماية",
				rows: [
					["حرارة الشحن", "0~55 °C (FB-L-16) / −20~55 °C (Pro)"],
					["حرارة التفريغ", "−20~60 °C (FB-L-16) / −20~55 °C (Pro)"],
					["حرارة التخزين", "−20 ~ 60 °C"],
					["الحماية", "IP65"],
					["مقاومة التآكل", "C5-M"],
					["الرطوبة", "5 ~ 95%"],
					["الارتفاع", "≤4000 m"],
					["التبريد", "Natural"],
					["فئة الحماية", "I"],
					["الإطفاء", "Aerosol (اختياري)"]
				]
			},
			{
				title: "الميكانيكية",
				rows: [["الأبعاد", "435 (W) × 240 (D) × 900 (H) mm"], ["الوزن", "130 kg"]]
			}
		],
		compatible: {
			items: ["LV-HUB-V2 (مطلوب لربط عدة مجموعات، ويعمل كوحدة رئيسية)"],
			source: "ملاحظة الداتاشيت الرسمي لـ Pylontech Fidus Battery Plus."
		},
		certificates: "IEC62619، IEC63056، UN38.3، EMC/CE",
		image: pylontech_fidus_battery_plus_default$1,
		files: sheet(c5_pdf_asset_default.url)
	},
	{
		id: "pylontech-powercube-m5a",
		category: "storage",
		brand: "Pylontech",
		name: "نظام تخزين Pylontech PowerCube-M5A عالي الجهد",
		model: "PowerCube-M5A-64/zzzV-L15 / -E15 — وحدة HM5A180F",
		power: "15.68 kWh / وحدة",
		description: "نظام بطاريات LiFePO4 عالي الجهد (حتى 1500V) بوحدات 15.68kWh قابلة للتوسعة حتى 21 وحدة.",
		about: "نظام تخزين تجاري/صناعي من Pylontech يتكون من وحدات بطارية HM5A180F (‏64V، 245Ah، 15.68kWh) ووحدة تحكم رئيسية، ويُركب في خزانة بـ22 فتحة. تصل كفاءة الدورة الكاملة إلى 96% وعمره التشغيلي 15+ سنة، ويتوفر بإصدارين: L15 (مفتاح عزل) وE15 (قاطع دارة).",
		features: [
			"نظام عالي الجهد حتى 1500V",
			"وحدات 15.68 kWh قابلة للتوسعة من 1 إلى 21 وحدة",
			"كفاءة دورة كاملة 96% عند 1C",
			"عمق تفريغ 95% للنظام",
			"اتصالات CANBUS / Modbus RTU / Modbus TCP/IP",
			"عمر تشغيلي 15+ سنة"
		],
		uses: [
			"المنشآت التجارية والصناعية",
			"منظومات التخزين عالية الجهد مع إنفرترات HV",
			"المشاريع الكبيرة"
		],
		suitableFor: "للمشاريع التجارية والصناعية التي تحتاج سعات تخزين كبيرة قابلة للتوسعة بجهد عالٍ.",
		specs: [
			{
				title: "وحدة البطارية HM5A180F",
				rows: [
					["السعة", "15.68 kWh"],
					["الجهد الاسمي", "64 Vdc"],
					["السعة الاسمية", "245 Ah"],
					["نطاق الجهد", "58~71 Vdc"],
					["عمق التفريغ", "90%"],
					["الأبعاد", "460 × 900 × 160.5 mm"],
					["الوزن", "115 kg"],
					["الاتصال", "RS485 (MODBUS RTU) / CAN / LAN"],
					["الحماية", "IP20"],
					["حرارة التشغيل", "0~50 °C"]
				]
			},
			{
				title: "وحدة التحكم الرئيسية",
				rows: [
					["الموديل", "S1500M5A180L / S1500M5A180E"],
					["جهد تشغيل النظام", "0~1500 Vdc"],
					["أقصى تيار تشغيل", "180 A"],
					["تغذية BMS/المروحة", "100~305VAC/50/60Hz"],
					["الاستهلاك الذاتي", "16.5 W"],
					["الوزن", "28 kg (L) / 32 kg (E)"]
				]
			},
			{
				title: "النظام الكامل",
				rows: [
					["سعة النظام", "15.68 × n kWh"],
					["جهد النظام", "64 × n Vdc"],
					["عدد الوحدات", "1~21"],
					["التيار الاسمي / المستمر", "122.5 A / 180 A"],
					["التيار الأقصى", "<210A لمدة 5 دقائق، <500A لمدة 30 ثانية"],
					["كفاءة الدورة الكاملة (1C)", "96%"],
					["عمق التفريغ", "95%"],
					["أبعاد الخزانة", "1050 × 925 × 1965 mm (22 فتحة)"],
					["الوزن", "210 + 115 × n kg"],
					["الاتصال", "CANBUS / Modbus RTU / Modbus TCP/IP"],
					["حرارة التشغيل", "10~40 °C"],
					["العمر التشغيلي", "15+ سنة"]
				]
			}
		],
		certificates: "إصدار UL: UL1973، UL9540A، UL9540، IEC62477-1، IEC62040-1، IEC62619، IEC63056، UKCA، CE LVD، CE EMC، UN38.3، VDE-AR-E 2510-50 — إصدار CE: IEC62477-1، IEC62040-1، IEC62619، IEC63056، UKCA، CE LVD، CE EMC، UN38.3، VDE-AR-E 2510-50، GB/T 36276-2018، GB/T 34131-2017",
		image: pylontech_powercube_m5a_png_asset_default.url,
		files: sheet(c6_pdf_asset_default.url)
	},
	{
		id: "pylontech-powercube-m1c",
		category: "storage",
		brand: "Pylontech",
		name: "نظام تخزين Pylontech PowerCube-M1C عالي الجهد",
		model: "PowerCube-M1C — وحدة H32148-C",
		power: "4.74 – 109 kWh",
		description: "نظام بطاريات LiFePO4 عالي الجهد بوحدات 4.74kWh قابلة للتوسعة حتى 23 وحدة وعمر 7000 دورة.",
		about: "نظام تخزين عالي الجهد من Pylontech على هيئة راك متكامل بارتفاع 2.13 متر، يتكون من وحدات H32148-C (‏32V، 148Ah، 4.74kWh) ووحدة تحكم SC1000-200J-C بجهد تشغيل حتى 1000V. يتوسع من 1 إلى 23 وحدة (حتى 109 kWh) بكفاءة 95% وعمر 7000 دورة.",
		features: [
			"راك متكامل 815 × 659 × 2130 mm بوحدات قابلة للسحب",
			"وحدات 4.74 kWh قابلة للتوسعة من 1 إلى 23 وحدة (حتى 109 kWh)",
			"جهد تشغيل النظام حتى 1000V",
			"عمر 7000 دورة وعمر تشغيلي 10+ سنوات",
			"كفاءة 95% وعمق تفريغ 95%",
			"اتصالات CAN / Ethernet / Modbus TCP/IP / Modbus RTU"
		],
		uses: ["المنشآت التجارية والصناعية الصغيرة والمتوسطة", "التخزين مع إنفرترات الجهد العالي"],
		suitableFor: "للمشاريع التي تحتاج سعة تخزين عالية الجهد مرنة تبدأ من وحدة واحدة وتتوسع تدريجياً.",
		specs: [
			{
				title: "وحدة البطارية H32148-C",
				rows: [
					["السعة", "4.74 kWh"],
					["الجهد الاسمي", "32 Vdc"],
					["السعة الاسمية", "148 Ah"],
					["نطاق الجهد", "27~36 Vdc"],
					["عمق التفريغ", "95%"],
					["الأبعاد", "330 × 628 × 150.5 mm"],
					["الوزن", "47 kg"],
					["الاتصال", "RS485 / CAN"],
					["الحماية", "IP20"],
					["حرارة التشغيل", "0~50 °C"],
					["حرارة التخزين", "−20~60 °C"],
					["العمر التشغيلي", "10+ سنوات"]
				]
			},
			{
				title: "وحدة التحكم SC1000-200J-C",
				rows: [
					["جهد تشغيل النظام", "0~1000 Vdc"],
					["أقصى تيار تشغيل", "148 A"],
					["الاستهلاك الذاتي", "6 W (مرحل مفصول) / 15 W (مرحل موصول)"],
					["الأبعاد", "330 × 628 × 150.5 mm"],
					["الوزن", "13 kg"],
					["الاتصال", "CAN / LAN / Ethernet / Modbus TCP/IP / Modbus RTU"],
					["الحماية", "IP20"],
					["حرارة التشغيل", "−20~65 °C"],
					["العمر التشغيلي", "15+ سنة"]
				]
			},
			{
				title: "النظام الكامل",
				rows: [
					["سعة النظام", "4.74 × n kWh (حتى 109 kWh)"],
					["جهد النظام", "32 × n Vdc"],
					["عدد الوحدات", "1~23"],
					["جهد الشحن الأعلى", "36 × n Vdc"],
					["جهد التفريغ الأدنى", "27 × n Vdc"],
					["أقصى/مستمر تيار التشغيل", "148 / 74 A"],
					["الكفاءة", "95%"],
					["عمق التفريغ", "95%"],
					["دورة الحياة", "7000"],
					["أبعاد النظام", "815 × 659 × 2130 mm"],
					["الوزن", "120 + 47 × n kg"],
					["الاتصال", "CAN / Ethernet / Modbus TCP/IP / Modbus RTU"],
					["حرارة التشغيل", "10~40 °C"],
					["حرارة التخزين", "−20~60 °C"],
					["الرطوبة", "5%~95%"],
					["الارتفاع عن سطح البحر", "أقل من 4000 m"],
					["العمر التشغيلي", "10+ سنوات"]
				]
			}
		],
		certificates: "IEC62619، IEC63056، UL1973، UL9540A، VDE2510-50VCE، UN38.3",
		image: pylontech_powercube_m1c_png_asset_default.url,
		files: sheet(c7_pdf_asset_default.url)
	},
	{
		id: "hithium-heroee-maxpower-16",
		category: "batteries",
		brand: "HiTHIUM (HeroEE)",
		name: "بطارية منزلية HeroEE MaxPower 16",
		model: "HeroEE MaxPower 16",
		power: "16.08 kWh",
		description: "بطارية منزلية 51.2V بسعة 16076.8Wh وعمر 11000 دورة مع شاشة لمس LCD.",
		about: "نظام تخزين منزلي (Residential ESS) بخلايا HiTHIUM سعة 314Ah وجهد 51.2V. يتميز بعمر خلايا 11000 دورة، وتوسعة حتى 16 بطارية على التوازي (256kWh)، وشاشة لمس مدمجة، وحمايات شاملة.",
		features: [
			"توسعة مرنة حتى 16 بطارية على التوازي (256 kWh)",
			"صيانة سهلة وأداء عالٍ",
			"أمان شامل: حماية من الحرارة الزائدة/المنخفضة والشحن الزائد والتيار الزائد والقصر وانخفاض الجهد",
			"خلايا HiTHIUM بسعة 314Ah وعمر 11000 دورة",
			"شاشة لمس LCD مدمجة",
			"منافذ اتصال CAN/RS485/RS232"
		],
		uses: ["التخزين المنزلي مع الإنفرترات الهجينة 48V", "المنظومات السكنية والتجارية الصغيرة"],
		suitableFor: "للمنازل والمنشآت الصغيرة التي تحتاج سعة 16kWh بجهد منخفض مع إمكانية توسعة كبيرة.",
		specs: [
			{
				title: "المواصفات الكهربائية",
				rows: [
					["نوع البطارية", "LiFePO4"],
					["السعة", "16076.8 Wh"],
					["سعة الخلية", "314 Ah"],
					["الجهد المقنن", "51.2 VDC"],
					["نطاق جهد الشحن/التفريغ", "43.2~58.4 VDC"],
					["تيار الشحن/التفريغ الموصى به", "100 A"],
					["أقصى تيار شحن/تفريغ", "200 A"],
					["عمق التفريغ", "90%"],
					["نمط الشحن", "CC-CV"],
					["عمر الخلايا", "11000 دورة (25 °C، 100% DOD، 0.5P، @70% SOH)"]
				]
			},
			{
				title: "التوصيل والتوسعة",
				rows: [
					["منافذ الاتصال", "CAN / RS485 / RS232"],
					["الشاشة", "LCD Touchscreen"],
					["التوسعة", "حتى 16 بطارية على التوازي — 256 kWh"]
				]
			},
			{
				title: "الحماية والبيئة",
				rows: [
					["الحمايات", "Overtemperature / Undertemperature / Overcharge / Overcurrent / Short Circuit / Undervoltage"],
					["الحماية", "IP30"],
					["حرارة التشغيل", "الشحن 0~40 °C — التفريغ −20~40 °C"],
					["حرارة التخزين", "−20~60 °C"],
					["الرطوبة", "10%~90%"]
				]
			},
			{
				title: "الميكانيكية",
				rows: [["الوزن", "110 kg"], ["الأبعاد", "L520 × W240 × H781.2 mm"]]
			}
		],
		certificates: "CE، CB، UN38.3، IEC 62619",
		image: p4_default,
		files: sheet(c4_pdf_asset_default.url)
	},
	{
		id: "pylontech-optimus-a300-hy",
		category: "storage",
		brand: "Pylontech",
		name: "نظام تخزين Pylontech OPTIMUS A300-HY الهجين المتكامل",
		model: "A300-HY (M5-300kWh-1000V)",
		power: "313 kWh",
		description: "خزانة تخزين طاقة تجارية وصناعية بإنفرتر هجين مدمج، سعة 313kWh، قابلة للتوسعة حتى 1565kWh.",
		about: "OPTIMUS A300-HY نظام تخزين طاقة متكامل داخل خزانة خارجية واحدة من Pylontech، يجمع بطاريات ليثيوم فوسفات الحديد (LFP) بسعة اسمية 313 kWh مع إنفرتر هجين مدمج بقدرة 50 kW وخرج ثلاثي الطور 400 فولت. يحتوي على نظام تبريد هوائي ونظام إطفاء حريق (Aerosol) وحماية IP55، ويعمل بمعدل 0.5C بعمق تفريغ 98% وعمر يفوق 7000 دورة وكفاءة ذهاب وعودة 96%. يمكن ربط حتى 5 وحدات على التوازي لتصل السعة إلى 1565 kWh.",
		features: [
			"إنفرتر هجين مدمج داخل الخزانة بقدرة 50 kW ثلاثي الطور 400Vac",
			"سعة اسمية 313 kWh وتوسعة من 156.8 حتى 1565 kWh",
			"عمر تشغيلي يفوق 7000 دورة وعمق تفريغ 98% للسلسلة الواحدة",
			"زمن تحويل من الشبكة إلى العزل أقل من 10 مللي ثانية",
			"نظام إطفاء حريق Aerosol مدمج وحماية IP55 ومقاومة تآكل C3",
			"أنماط تشغيل: تقليم الذروة، إزاحة الطاقة، الاستهلاك الذاتي، التغذية الاحتياطية"
		],
		uses: [
			"المصانع والمنشآت الصناعية",
			"المراكز التجارية والفنادق والمستشفيات",
			"محطات الشحن ومشاريع تقليم الذروة",
			"المزارع ومشاريع الطاقة الشمسية الكبيرة"
		],
		suitableFor: "للمشاريع التجارية والصناعية التي تحتاج تخزيناً كبيراً جاهزاً بالإنفرتر داخل خزانة خارجية واحدة سهلة التركيب والتوسعة.",
		specs: [
			{
				title: "بيانات عامة",
				rows: [
					["الأبعاد (عرض × عمق × ارتفاع، بدون الإنفرتر)", "1500 × 1300 × 2200 mm"],
					["الوزن", "3.5 طن"],
					["حرارة التشغيل", "−20~55 °C"],
					["درجة الحماية", "IP55"],
					["الارتفاع عن سطح البحر", "≤3000 m"],
					["الرطوبة", "0~95%"],
					["نظام الإطفاء", "Aerosol"],
					["نظام التبريد", "تبريد هوائي (Air Cooling)"],
					["استهلاك نظام التبريد (تبريد/تدفئة)", "5 / 6.4 kW"],
					["الاستهلاك المساعد (مستمر/ذروة)", "2.35 / 4 / 26 kW"],
					["أقصى عدد وحدات على التوازي", "5"],
					["مقاومة التآكل", "C3"]
				]
			},
			{
				title: "بيانات البطارية",
				rows: [
					["نوع البطارية", "Li-ion (LFP)"],
					["السعة الاسمية", "313 kWh"],
					["معدل التشغيل المستمر", "0.5C"],
					["أقصى تيار تشغيل", "180 A × 2"],
					["عمق التفريغ", "98% (سلسلة واحدة)"],
					["عمر الدورات", "أكثر من 7000 دورة"],
					["نطاق جهد التيار المستمر", "560~720 Vdc (سلسلة واحدة)"],
					["التيار الاسمي للتشغيل", "122.5 A × 2"],
					["كفاءة الذهاب والعودة @0.5C", "96%"]
				]
			},
			{
				title: "بيانات الإنفرتر الهجين (على الشبكة)",
				rows: [
					["القدرة المقننة AC", "50 kW"],
					["جهد الخرج المقنن", "400 Vac"],
					["ترددات الخرج", "50 / 60 Hz"],
					["أقصى تيار AC", "76 A (حمل خطي)"],
					["قدرة التحميل الزائد", "110%"],
					["معامل القدرة", "أكبر من 0.99 (0.8 متقدم ~ 0.8 متأخر)"],
					["كفاءة CEC", "97.4% (أقصى 97.8%)"],
					["نوع العزل", "بدون محول عزل"],
					["زمن الاستجابة (شبكة ← عزل)", "أقل من 10 ms"]
				]
			},
			{
				title: "التشغيل والاتصالات",
				rows: [["منافذ الاتصال", "RS485 (MODBUS RTU) / LAN (MODBUS TCP/IP) / CAN"], ["منطق التشغيل", "تقليم الذروة / إزاحة الطاقة / الاستهلاك الذاتي / التغذية الاحتياطية"]]
			},
			{
				title: "تكوين النظام والتوسعة",
				rows: [
					["عدد الإنفرترات", "1 إلى 10"],
					["نطاق القدرة", "50 ~ 500 kW"],
					["نطاق السعة", "156.8 ~ 1565 kWh"],
					["سعات الخزانة الواحدة", "219 / 250 / 313 kWh"],
					["عدد الخزانات", "1 إلى 5"],
					["الحد الأدنى للتكوين", "50 kW"]
				]
			}
		],
		certificates: "UN38.3، UN 3480، IEC62619، IEC62040-1، CE، UKCA (EMC/RED)، VDE2510-50، UL1973، UL9540A، G99، VDE-AR-N 4105، EN 50549-1، EN 50549-10، EIFS 2018.2، IEC 62116، IEC 61727، IEC 60068، IEC 61683، EN 50530",
		image: pylontech_optimus_a300_hy_png_asset_default.url,
		files: [{
			kind: "Datasheet",
			label: "الكتالوج / Datasheet الرسمي",
			url: pylontech_optimus_a300_hy_pdf_asset_default.url
		}]
	},
	{
		id: "hithium-heroee-legend-112c",
		category: "storage",
		brand: "HiTHIUM — HeroEE",
		name: "خزانة تخزين HiTHIUM HeroEE LEGEND 112C التجارية والصناعية",
		model: "HeroEE LEGEND 112C",
		power: "112.5 kWh",
		description: "خزانة تخزين طاقة تجارية وصناعية بسعة 112.5kWh وجهد 358.4V بتصميم معياري DC/AC منفصل.",
		about: "LEGEND 112C خزانة تخزين طاقة للتطبيقات التجارية والصناعية (C&I ESS) من HiTHIUM — HeroEE، ببطاريات ليثيوم فوسفات الحديد LiFePO4 بتجميع 1P112S وسعة اسمية 112.5 kWh وجهد اسمي 358.4 فولت وسعة خلية 314 أمبير/ساعة. تعمل بمعدل شحن وتفريغ 0.5P بعمر يصل إلى 11000 دورة، وتضم خوارزمية إدارة حرارية ذكية وتبريداً هوائياً ونظام إطفاء إيروسول ومراقبة الحرارة والدخان، بحماية IP55 ومقاومة تآكل C3. تصميمها المعياري بفصل DC عن AC يتيح التوسعة بالتوازي بمرونة.",
		features: [
			"إدارة حرارية ذكية ترفع كفاءة التحويل في النظام",
			"عمر تشغيلي يصل إلى 11000 دورة عند 25 °م و100% عمق تفريغ",
			"نظام إطفاء إيروسول مدمج مع مراقبة الحرارة والدخان",
			"تصميم معياري بفصل DC/AC يسمح بالتوسعة بالتوازي",
			"إمكانية تخصيص مستويات جهد الخرج واستراتيجيات التحكم",
			"خزانة خارجية بحماية IP55 ومقاومة تآكل C3 لبيئات التشغيل القاسية"
		],
		uses: [
			"المصانع والمنشآت الصناعية",
			"المراكز التجارية والفنادق والمستشفيات",
			"مشاريع تقليم الذروة وإزاحة الطاقة",
			"منظومات الطاقة الشمسية التجارية الكبيرة"
		],
		suitableFor: "للمنشآت التجارية والصناعية التي تحتاج وحدة تخزين خارجية بسعة ~112 كيلوواط ساعة قابلة للتوسعة بالتوازي مع إنفرتر منفصل.",
		specs: [
			{
				title: "بيانات البطارية",
				rows: [
					["نوع البطارية", "LiFePO4"],
					["نمط التجميع", "1P112S"],
					["الطاقة الاسمية", "112.5 kWh"],
					["السعة الاسمية", "314 Ah"],
					["الجهد الاسمي", "358.4 V"],
					["نطاق جهد التشغيل", "302.4–408.8 V"],
					["معدل الشحن/التفريغ المقنن", "0.5P"],
					["تيار الشحن/التفريغ القياسي", "157 A / 157 A"],
					["عمر الدورات", "11000 دورة @ (25 °م، 100% DOD، 0.5P، @70% SOH)"],
					["كفاءة جانب التيار المستمر", "≥ 93%"]
				]
			},
			{
				title: "التبريد والحماية",
				rows: [
					["نوع التبريد", "تبريد هوائي (Air Cooling)"],
					["نظام إطفاء الحريق", "إيروسول (Aerosol)"],
					["الحمايات", "حرارة زائدة / حرارة منخفضة / شحن زائد / تيار زائد / جهد منخفض"],
					["درجة الحماية", "IP55"],
					["مقاومة التآكل", "C3"],
					["الضوضاء", "أقل من 75 dB"]
				]
			},
			{
				title: "بيانات عامة",
				rows: [
					["الأبعاد (ط × ع × ر)", "900 × 1000 × 2280 mm"],
					["وزن البطارية", "1400 kg"],
					["حرارة التشغيل", "الشحن: 0 °م إلى 55 °م — التفريغ: −20 °م إلى 55 °م"],
					["حرارة التخزين", "−20 °م إلى 60 °م"],
					["الرطوبة النسبية المسموحة", "0–95% (بدون تكثيف)"],
					["الارتفاع المسموح عن سطح البحر", "≤ 4000 m (تخفيض الأداء فوق 2000 m)"]
				]
			},
			{
				title: "الاتصالات والاعتماد",
				rows: [["منافذ الاتصال", "485 / CAN / Ethernet"], ["معايير الاعتماد", "UN38.3"]]
			}
		],
		certificates: "UN38.3",
		image: hithium_legend_112c_png_asset_default.url,
		files: sheet("/catalogs/hithium-heroee-legend-112c.pdf")
	},
	{
		id: "pylontech-optimus-l260-hy",
		category: "storage",
		brand: "Pylontech",
		name: "نظام تخزين Pylontech OPTIMUS L260-HY الهجين المتكامل",
		model: "L260-HY-M7 (M7-1000V-125kW/260kWh)",
		power: "261 kWh / 125 kW",
		description: "خزانة تخزين تجارية وصناعية بسعة 261 كيلوواط ساعة وإنفرتر هجين مدمج 125 كيلوواط بتبريد سائل.",
		about: "OPTIMUS L260-HY من Pylontech خزانة تخزين طاقة متكاملة للتطبيقات التجارية والصناعية، تجمع البطاريات مع إنفرتر هجين مدمج بقدرة 125 كيلوواط في وحدة واحدة. سعتها الاسمية 261 كيلوواط ساعة قابلة للتوسعة من 260 حتى 1560 كيلوواط ساعة، والقدرة من 125 حتى 750 كيلوواط. تعتمد تبريداً سائلاً بمحلول جلايكول 50% للبطاريات وتبريداً هوائياً للإنفرتر، مع منظومة إطفاء متعددة الطبقات تضم كاشف غازات قابلة للاشتعال وكاشف دخان وكاشف حرارة ومروحة مضادة للانفجار ونظام إيروسول وحماية مائية قياسية. الخزانة بحماية IP55 ومقاومة تآكل من الفئة C5M وتعمل من −25 إلى 55 درجة مئوية، وتدعم التغذية الاحتياطية بزمن تحويل أقل من 10 ميلي ثانية وتقليم الذروة والاستهلاك الذاتي.",
		features: [
			"إنفرتر هجين مدمج بقدرة 125 كيلوواط داخل الخزانة نفسها",
			"تبريد سائل بمحلول جلايكول 50% يرفع تجانس الحرارة وعمر الخلايا",
			"منظومة إطفاء متعددة الطبقات مع كواشف غاز ودخان وحرارة ومروحة مضادة للانفجار",
			"تحويل سلس للتغذية الاحتياطية بزمن أقل من 10 ميلي ثانية",
			"عشرة متتبعات MPPT تستوعب حتى 250 كيلوواط ألواح شمسية",
			"عمق تفريغ 98% وتوسعة حتى 1560 كيلوواط ساعة و750 كيلوواط",
			"حماية IP55 ومقاومة تآكل C5M ونطاق تشغيل من −25 إلى 55 درجة مئوية"
		],
		uses: [
			"المصانع والمنشآت الصناعية الكبيرة",
			"تقليم الذروة وإزاحة الطاقة وخفض فاتورة الكهرباء",
			"التغذية الاحتياطية للمنشآت الحيوية",
			"محطات الطاقة الشمسية التجارية والمزارع الشمسية"
		],
		suitableFor: "للمشاريع التجارية والصناعية التي تحتاج تخزيناً بسعة 260 كيلوواط ساعة فأكثر مع إنفرتر هجين مدمج وقابلية توسعة حتى 1.56 ميجاواط ساعة.",
		specs: [
			{
				title: "بيانات عامة",
				rows: [
					["الأبعاد (ع × ر × ع)", "1400 × 2180 × 1300 mm"],
					["الوزن", "أقل من 3 طن"],
					["حرارة التشغيل", "−25 °م إلى 55 °م"],
					["حرارة التخزين", "−20 °م إلى 60 °م"],
					["جهد الخرج AC", "3P/N/PE — 220/380 V، 230/400 V"],
					["التردد", "50 / 60 Hz"],
					["كفاءة النظام (RTE)", "88%"],
					["استهلاك الطاقة المساعدة", "1.5 kW"],
					["درجة الحماية", "IP55"],
					["الارتفاع المسموح عن سطح البحر", "≤ 3000 m"],
					["مقاومة التآكل", "C5M"],
					["الرطوبة النسبية المسموحة", "5% ~ 95%"]
				]
			},
			{
				title: "التبريد والحماية",
				rows: [
					["نوع التبريد", "تبريد سائل بمحلول جلايكول 50%"],
					["نظام إطفاء الحريق", "كاشف غازات قابلة للاشتعال + كاشف دخان + كاشف حرارة + مروحة مضادة للانفجار + إيروسول"],
					["لوحة تنفيس الانفجار", "اختيارية"],
					["الحماية المائية من الحريق", "تكوين قياسي"],
					["معايير الاعتماد", "IEC62619، IEC62477، CE EMC، UN38.3"],
					["منافذ الاتصال", "Modbus-TCP / RTU"]
				]
			},
			{
				title: "بيانات البطارية",
				rows: [
					["السعة الاسمية", "261 kWh"],
					["نطاق جهد التيار المستمر", "728 ~ 936 V"],
					["عمق التفريغ", "98% DOD"],
					["تيار التشغيل القياسي DC", "157 A"],
					["موديل وحدة البطارية", "HM7A200L"],
					["طاقة الوحدة", "52.25 kWh"],
					["الجهد الاسمي للوحدة", "166.4 V"],
					["سعة الوحدة", "314 Ah"],
					["أبعاد الوحدة (ع × ع × ر)", "1145 × 790 × 245 mm"],
					["وزن الوحدة", "345 kg"]
				]
			},
			{
				title: "بيانات الإنفرتر الهجين",
				rows: [
					["نوع التبريد", "تبريد هوائي"],
					["درجة الحماية", "IP66"],
					["الحمايات", "ضد الجزر الكهربائي / التيار الزائد / القصر / انعكاس قطبية التيار المستمر"]
				]
			},
			{
				title: "الخرج AC",
				rows: [
					["القدرة الاسمية", "125 kW"],
					["معامل القدرة", "> 0.99 (من 0.8 متقدم إلى 0.8 متأخر)"],
					["أقصى قدرة ظاهرية", "1.2 ضعف القدرة لمدة 100 ث — 1.4 ضعف لمدة 10 ث — 1.6 ضعف لمدة 200 م.ث"],
					["زمن التحويل الاحتياطي", "أقل من 10 ms"],
					["التشوه التوافقي THDi", "أقل من 3%"]
				]
			},
			{
				title: "المدخل DC (جانب الألواح)",
				rows: [
					["أقصى حجم موصى به لمصفوفة الألواح", "250 kW"],
					["نطاق جهد MPPT", "150 ~ 950 V"],
					["عدد متتبعات MPPT / أقصى عدد سلاسل", "10 / 20"],
					["أقصى تيار دخل", "10 × 42 A"]
				]
			},
			{
				title: "تكوين النظام والتوسعة",
				rows: [
					["نطاق السعة", "260 ~ 1560 kWh"],
					["نطاق القدرة", "125 ~ 750 kW"],
					["معدل الشحن/التفريغ", "0.5C"],
					["منطق التشغيل", "تقليم الذروة / الاستهلاك الذاتي / التغذية الاحتياطية"]
				]
			}
		],
		certificates: "IEC62619، IEC62477، CE EMC، UN38.3",
		image: pylontech_optimus_l260_hy_png_asset_default.url,
		files: sheet("/catalogs/pylontech-optimus-l260-hy.pdf")
	},
	{
		id: "hithium-heroee-legend-112s",
		category: "storage",
		brand: "HiTHIUM — HeroEE",
		name: "نظام تخزين HiTHIUM HeroEE LEGEND 112S المعياري التجاري والصناعي",
		model: "HeroEE LEGEND 112S",
		power: "64.3 – 241.1 kWh",
		description: "برج بطاريات معياري قابل للتكديس من 4 إلى 15 وحدة بسعة 64.3 حتى 241.1 كيلوواط ساعة.",
		about: "LEGEND 112S من HiTHIUM — HeroEE نظام بطاريات معياري للتطبيقات التجارية والصناعية، يُركّب بالتكديس بوحدات مستقلة سعة كل منها 16.076 كيلوواط ساعة، ويمكن تكديس من 4 إلى 15 وحدة لسعة تتراوح بين 64.3 و241.1 كيلوواط ساعة، مع توسعة بالتوازي حتى 720 كيلوواط ساعة. يعتمد خلايا HiTHIUM من نوع LiFePO4 سعة 314 أمبير/ساعة بعمر 11000 دورة أي أكثر من 15 عاماً من التشغيل اليومي. معمارية التركيب Plug-and-play تنجز التثبيت في أقل من 30 دقيقة. يضم نظام إدارة بطاريات ذكي Smart BMS مع تحكم محسّن بالتبريد الطبيعي يراقب حالة النظام ويعزز الاستقرار الحراري.",
		features: [
			"تصميم معياري قابل للتكديس من 4 إلى 15 وحدة وتوسعة حتى 720 كيلوواط ساعة",
			"تركيب Plug-and-play ينجز في أقل من 30 دقيقة",
			"خلايا HiTHIUM 314 أمبير/ساعة بعمر 11000 دورة — أكثر من 15 عاماً من التشغيل اليومي",
			"نظام إدارة بطاريات ذكي Smart BMS مع تحكم محسّن بالتبريد",
			"تبريد طبيعي بلا مراوح — تشغيل صامت وصيانة أقل",
			"جهد نظام واسع من 172.8 إلى 876 فولت تيار مستمر"
		],
		uses: [
			"المحلات والمكاتب والورش التجارية",
			"المصانع الصغيرة والمتوسطة",
			"تقليم الذروة وخفض فاتورة الكهرباء",
			"التغذية الاحتياطية ومنظومات الطاقة الشمسية التجارية"
		],
		suitableFor: "للمنشآت التجارية والصناعية التي تحتاج تخزيناً معيارياً يبدأ من 64 كيلوواط ساعة وينمو تدريجياً مع توسع الحِمل.",
		specs: [
			{
				title: "بيانات النظام",
				rows: [
					["الموديل", "HeroEE LEGEND 112S"],
					["نوع البطارية", "LiFePO4"],
					["عمر الدورات", "11000 دورة @ (25 °م، 100% DOD، 0.5P، @70% SOH)"],
					["جهد/سعة الوحدة", "51.2 V / 314 Ah"],
					["عدد الوحدات القابلة للتكديس", "4 ~ 15 وحدة"],
					["نطاق طاقة النظام", "64.3 kWh ~ 241.1 kWh"],
					["جهد تشغيل النظام", "172.8 V ~ 876 V DC"],
					["تيار الشحن/التفريغ القياسي", "157 A / 157 A (0.5C)"],
					["أقصى تيار شحن/تفريغ", "200 A / 200 A"]
				]
			},
			{
				title: "التبريد والحماية",
				rows: [
					["نوع التبريد", "تبريد طبيعي (Natural Cooling)"],
					["درجة الحماية", "IP20"],
					["طريقة التركيب", "تكديس رأسي (Stack-style)"],
					["حرارة التشغيل", "الشحن: 0 °م إلى 45 °م — التفريغ: −10 °م إلى 45 °م"],
					["حرارة التخزين", "−20 °م إلى 60 °م"],
					["الرطوبة النسبية المسموحة", "10% ~ 90% (بدون تكثيف)"]
				]
			},
			{
				title: "بيانات عامة",
				rows: [
					["أبعاد النظام (ع × ع × ر)", "770 × 435 × 1986 mm (7 وحدات)"],
					["أبعاد بديلة", "770 × 435 × 1738 mm (6 وحدات) — 770 × 435 × 1490 mm (5 وحدات) — 770 × 435 × 1242 mm (4 وحدات)"],
					["الارتفاع المسموح عن سطح البحر", "≤ 4000 m"]
				]
			},
			{
				title: "وحدة البطارية المفردة",
				rows: [
					["موديل الوحدة", "112S51314"],
					["نمط التجميع", "1P16S"],
					["الجهد الاسمي", "51.2 V DC"],
					["جهد التشغيل", "43.2 V ~ 58.4 V DC"],
					["السعة الاسمية", "314 Ah"],
					["الطاقة الاسمية", "16076 Wh"],
					["أبعاد الوحدة (ع × ع × ر)", "770 × 435 × 248 mm"],
					["وزن الوحدة", "130 kg"]
				]
			},
			{
				title: "صندوق التحكم عالي الجهد",
				rows: [
					["الموديل", "112SPDU"],
					["الأبعاد (ع × ع × ر)", "770 × 435 × 150 mm"],
					["جهد النظام", "172.8 V ~ 876 V DC"],
					["أقصى تيار تشغيل", "200 A"],
					["حرارة الشحن", "0 °م إلى 45 °م"],
					["حرارة التفريغ", "−10 °م إلى 45 °م"]
				]
			},
			{
				title: "الاتصالات والاعتماد",
				rows: [["منافذ الاتصال", "RS485"], ["معايير الاعتماد", "UN38.3، IEC62619، CE"]]
			}
		],
		certificates: "UN38.3، IEC62619، CE",
		image: hithium_legend_112s_png_asset_default.url,
		files: sheet("/catalogs/hithium-heroee-legend-112s.pdf")
	}
];
var INVERTER_VARIANTS = {
	"deye-sun-3-6k-sg04lp1": {
		nameBase: "إنفرتر هجين Deye أحادي الطور",
		variants: [
			{
				key: "3K-24-SM1",
				label: "3kW (بطارية 24V)",
				power: "3 kW",
				model: "SUN-3K-SG04LP1-24-EU-SM1"
			},
			{
				key: "3K-SM1",
				label: "3kW (بطارية 48V)",
				power: "3 kW",
				model: "SUN-3K-SG04LP1-EU-SM1"
			},
			{
				key: "3.6K-SM2",
				label: "3.6kW",
				power: "3.6 kW",
				model: "SUN-3.6K-SG04LP1-EU-SM2"
			},
			{
				key: "5K-SM2",
				label: "5kW",
				power: "5 kW",
				model: "SUN-5K-SG04LP1-EU-SM2"
			},
			{
				key: "6K-SM2",
				label: "6kW",
				power: "6 kW",
				model: "SUN-6K-SG04LP1-EU-SM2"
			}
		]
	},
	"deye-sun-7-6-12k-sg02lp1": {
		nameBase: "إنفرتر هجين Deye أحادي الطور",
		variants: [
			{
				key: "7.6K",
				label: "7.6kW",
				power: "7.6 kW",
				model: "SUN-7.6K-SG02LP1-EU-AM2-P"
			},
			{
				key: "8K",
				label: "8kW",
				power: "8 kW",
				model: "SUN-8K-SG01LP1-EU"
			},
			{
				key: "10K",
				label: "10kW",
				power: "10 kW",
				model: "SUN-10K-SG02LP1-EU-AM3-P"
			},
			{
				key: "12K",
				label: "12kW",
				power: "12 kW",
				model: "SUN-12K-SG01LP1-EU-AM3"
			},
			{
				key: "16K-1P",
				label: "16kW",
				power: "16 kW",
				model: "SUN-16K-SG01LP1-EU"
			}
		]
	},
	"deye-sun-14-20k-sg05lp3": {
		nameBase: "إنفرتر هجين Deye ثلاثي الطور جهد منخفض",
		variants: [
			{
				key: "12K-3P",
				label: "12kW",
				power: "12 kW",
				model: "SUN-12K-SG04LP3-EU"
			},
			{
				key: "14K",
				label: "14kW",
				power: "14 kW",
				model: "SUN-14K-SG05LP3-EU-SM2"
			},
			{
				key: "15K",
				label: "15kW",
				power: "15 kW",
				model: "SUN-15K-SG05LP3-EU-SM2"
			},
			{
				key: "16K",
				label: "16kW",
				power: "16 kW",
				model: "SUN-16K-SG05LP3-EU-SM2"
			},
			{
				key: "18K",
				label: "18kW",
				power: "18 kW",
				model: "SUN-18K-SG05LP3-EU-SM2"
			},
			{
				key: "20K",
				label: "20kW",
				power: "20 kW",
				model: "SUN-20K-SG05LP3EU-SM2"
			}
		]
	},
	"deye-sun-29-9-50k-sg01hp3": {
		nameBase: "إنفرتر هجين Deye ثلاثي الطور جهد عالٍ",
		variants: [
			{
				key: "29.9K",
				label: "29.9kW",
				power: "29.9 kW",
				model: "SUN-29.9K-SG01HP3-EU-BM3"
			},
			{
				key: "30K",
				label: "30kW",
				power: "30 kW",
				model: "SUN-30K-SG01HP3-EU-BM3"
			},
			{
				key: "35K",
				label: "35kW",
				power: "35 kW",
				model: "SUN-35K-SG01HP3-EU-BM3"
			},
			{
				key: "40K",
				label: "40kW",
				power: "40 kW",
				model: "SUN-40K-SG01HP3-EU-BM4"
			},
			{
				key: "50K",
				label: "50kW",
				power: "50 kW",
				model: "SUN-50K-SG01HP3-EU-BM4"
			}
		]
	},
	"deye-sun-60-80k-sg02hp3": {
		nameBase: "إنفرتر هجين Deye ثلاثي الطور جهد عالٍ",
		variants: [
			{
				key: "60K",
				label: "60kW",
				power: "60 kW",
				model: "SUN-60K-SG02HP3-EU-EM6"
			},
			{
				key: "75K",
				label: "75kW",
				power: "75 kW",
				model: "SUN-75K-SG02HP3-EU-EM6"
			},
			{
				key: "80K",
				label: "80kW",
				power: "80 kW",
				model: "SUN-80K-SG02HP3-EU-EM6"
			}
		]
	},
	"solis-s6-eh2p-5-8k": {
		nameBase: "إنفرتر تخزين Solis ‏Split Phase",
		variants: [
			{
				key: "5K",
				label: "5kW",
				power: "5 kW",
				model: "S6-EH2P5K02-SV-YD-L"
			},
			{
				key: "6K",
				label: "6kW",
				power: "6 kW",
				model: "S6-EH2P6K02-SV-YD-L"
			},
			{
				key: "7.5K",
				label: "7.5kW",
				power: "7.5 kW",
				model: "S6-EH2P7.5K02-SV-YD-L"
			},
			{
				key: "8K",
				label: "8kW",
				power: "8 kW",
				model: "S6-EH2P8K02-SV-YD-L"
			}
		]
	},
	"solis-s6-eh3p-12-20k-h": {
		nameBase: "إنفرتر تخزين Solis ثلاثي الطور جهد عالٍ",
		variants: [
			{
				key: "12K",
				label: "12kW",
				power: "12 kW",
				model: "S6-EH3P12K-H"
			},
			{
				key: "15K",
				label: "15kW",
				power: "15 kW",
				model: "S6-EH3P15K-H"
			},
			{
				key: "20K",
				label: "20kW",
				power: "20 kW",
				model: "S6-EH3P20K-H"
			}
		]
	},
	"solis-s6-eh3p-29-9-50k-h": {
		nameBase: "إنفرتر تخزين Solis ثلاثي الطور جهد عالٍ",
		variants: [
			{
				key: "29.9K",
				label: "29.9kW",
				power: "29.9 kW",
				model: "S6-EH3P29.9K-H"
			},
			{
				key: "30K",
				label: "30kW",
				power: "30 kW",
				model: "S6-EH3P30K-H"
			},
			{
				key: "40K",
				label: "40kW",
				power: "40 kW",
				model: "S6-EH3P40K-H"
			},
			{
				key: "50K",
				label: "50kW",
				power: "50 kW",
				model: "S6-EH3P50K-H"
			}
		]
	},
	"solis-s6-eh3p-75-125k": {
		nameBase: "إنفرتر تخزين Solis ثلاثي الطور جهد عالٍ",
		variants: [
			{
				key: "75K",
				label: "75kW",
				power: "75 kW",
				model: "S6-EH3P75K10-NV-YD-H"
			},
			{
				key: "80K",
				label: "80kW",
				power: "80 kW",
				model: "S6-EH3P80K10-NV-YD-H"
			},
			{
				key: "99.9K",
				label: "99.9kW",
				power: "99.9 kW",
				model: "S6-EH3P99.9K10-NV-YD-H"
			},
			{
				key: "100K",
				label: "100kW",
				power: "100 kW",
				model: "S6-EH3P100K10-NV-YD-H"
			},
			{
				key: "125K",
				label: "125kW",
				power: "125 kW",
				model: "S6-EH3P125K10-NV-YD-H"
			}
		]
	}
};
var variantSlug = (key) => key.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
/** يزيل نطاقات القدرة من النصوص ويستبدلها بالقدرة الصريحة للصنف. */
function fixRanges(text, power) {
	if (!text) return text;
	return text.replace(/(?:من\s*)?\d+(?:[.,]\d+)?\s*(?:–|—|-|إلى)\s*\d+(?:[.,]\d+)?\s*kW/gi, power);
}
function expandProduct(base) {
	const def = INVERTER_VARIANTS[base.id];
	if (!def) return [base];
	return def.variants.map((v) => {
		const idx = base.modelTable ? base.modelTable.models.indexOf(v.key) : -1;
		const rows = idx >= 0 && base.modelTable ? base.modelTable.rows.map((r) => [r.label, r.values[idx] ?? "—"]) : [];
		const { modelTable: _omit, ...rest } = base;
		return {
			...rest,
			id: `${base.id}--${variantSlug(v.key)}`,
			baseId: base.id,
			name: `${def.nameBase} ${v.label}`,
			model: v.model,
			power: v.power,
			description: fixRanges(base.description, v.power) ?? base.description,
			...base.about ? { about: fixRanges(base.about, v.power) } : {},
			...base.suitableFor ? { suitableFor: fixRanges(base.suitableFor, v.power) } : {},
			specs: rows.length ? [{
				title: `مواصفات موديل ${v.label}`,
				rows
			}, ...base.specs] : base.specs
		};
	});
}
/** قائمة العرض في الكتالوج: كل قدرة إنفرتر صنف مستقل بدل النطاقات. */
/** القدرات المعروضة فقط لكل علامة في قسم الإنفرترات. */
var INVERTER_KW_ALLOWED = {
	Deye: [
		6,
		8,
		12,
		16,
		20,
		30,
		50,
		80,
		125
	],
	Solis: [
		6,
		8,
		12,
		16,
		20,
		30,
		50,
		80,
		125
	],
	"Li-Power": [1.6, 6.2]
};
function inverterAllowed(p) {
	if (p.category !== "inverters") return true;
	const allowed = INVERTER_KW_ALLOWED[p.brand];
	const kw = parseFloat(String(p.power).replace(/[^\d.]/g, ""));
	return Boolean(allowed && allowed.includes(kw));
}
var W = "ضمان 30 سنة";
var PANEL_CERTS = "IEC61215، IEC61730، ISO9001، ISO14001، ISO45001";
var panelSpec = (w, bus, eff, bifacial) => ({
	description: `لوح سنتك ${w} وات N-Type TOPCon${bifacial ? " ثنائي الوجه" : ""} بكفاءة ${eff}.`,
	features: [
		`${bus} بزار لتحسين جمع التيار`,
		`كفاءة ${eff}`,
		"إطار ألمنيوم يتحمل 5400 باسكال",
		W
	],
	specs: [{
		title: "المواصفات المعتمدة",
		rows: [
			["القدرة", `${w} W`],
			["التقنية", `N-Type TOPCon${bifacial ? " ثنائي الوجه" : ""}`],
			["عدد البزارات", bus],
			["الكفاءة", eff],
			["أقصى جهد للنظام", "1500 VDC"],
			["تفاوت القدرة", "0 ~ +5%"],
			["عامل الامتلاء", "0.80"],
			["الإطار", "ألمنيوم — 5400 Pa"],
			["الضمان", "30 سنة"],
			["الشهادات", PANEL_CERTS]
		]
	}]
});
var invSpec = (kw, phase, pv, mppt, chg, extra) => ({
	description: `انفرتر دايا هايبرد ${kw} كيلو ${phase} — دخل ألواح حتى ${pv}، ${mppt} MPPT، شحن ${chg}.`,
	specs: [{
		title: "المواصفات المعتمدة",
		rows: [
			["القدرة", `${kw} kW`],
			["الطور", phase],
			["أقصى دخل ألواح", pv],
			["عدد MPPT", mppt],
			["أقصى تيار شحن/تفريغ", chg],
			...extra
		]
	}]
});
var batSpec = (v, e, use, a, par, cyc, life, ip, extra = []) => ({
	description: `بطارية ليثيوم بايلونتك ${e} بجهد ${v} — سعة قابلة للاستخدام ${use}.`,
	specs: [{
		title: "المواصفات المعتمدة",
		rows: [
			["الجهد الاسمي", v],
			["الطاقة الاسمية", e],
			["الطاقة القابلة للاستخدام", use],
			["تيار الشحن/التفريغ", a],
			["أقصى ربط", par],
			["دورة الحياة", cyc],
			["العمر/الضمان", life],
			["الحماية", ip],
			...extra
		]
	}]
});
/** مواصفات معتمدة من العميل تحل محل مواصفات الأصناف المشابهة. */
var SPEC_OVERRIDES = {
	"suntech-stp595s-c72-nsh": panelSpec("595", "16", "23.1%", false),
	"suntech-stp720s-d66-nsh": panelSpec("720", "18", "23.2%", true),
	"deye-sun-7-6-12k-sg02lp1--8k": invSpec("8", "سنجل فاز", "16 kW", "4", "190 A", [["الكفاءة", "97.6%"], ["الحماية", "IP65"]]),
	"deye-sun-7-6-12k-sg02lp1--12k": invSpec("12", "سنجل فاز", "24 kW", "3", "250 A", [["الكفاءة", "97.6%"], ["الحماية", "IP65"]]),
	"deye-sun-7-6-12k-sg02lp1--16k-1p": invSpec("16", "سنجل فاز", "32 kW", "3", "290 A", [["مزايا", "جهاز تحكم، تصدير كهرباء، واي فاي"], ["الحماية", "IP65"]]),
	"deye-sun-14-20k-sg05lp3--12k-3p": invSpec("12", "3 فاز 400/230V", "24 kW", "2", "240 A", [["أقصى جهد ألواح", "800 V"]]),
	"deye-sun-14-20k-sg05lp3--20k": invSpec("20", "3 فاز 400/230V", "40 kW", "2", "350 A", [["أقصى جهد ألواح", "800 V"]]),
	"pylontech-fidus-battery-plus": batSpec("51.2 V", "16 kWh", "14.47 kWh", "200 A", "120 بطارية", "8000 دورة", "10 سنوات", "IP65"),
	"pylontech-uf5000": batSpec("51.2 V", "5.12 kWh", "4.864 kWh", "100 A", "20 بطارية", "6000 دورة", "15 سنة", "IP20"),
	"pylontech-rv12200": batSpec("12.8 V", "2.56 kWh", "2.3 kWh", "100 A", "16 بطارية", "4000 دورة", "10 سنوات", "IP65"),
	"pylontech-rv12100ch": batSpec("12.8 V", "1.28 kWh", "1.15 kWh", "100 A", "8 بطاريات", "4000 دورة", "10 سنوات (ضمان سنتان)", "IP20"),
	"pylontech-rv12314": {
		description: "بطارية ليثيوم هيثيوم 4 كيلو 314 أمبير 12.8 فولت — سعة قابلة للاستخدام 3.6 كيلو.",
		specs: [{
			title: "المواصفات المعتمدة",
			rows: [
				["الموديل", "HeroEE NeoPower 4"],
				["فلتية البطارية", "12.8 V"],
				["سعة البطارية", "4 kWh"],
				["سعة البطارية للاستخدام", "3.6 kWh"],
				["عمق التفريغ", "90%"],
				["تيار الشحن والتفريغ", "100 A"],
				["القدرة على الربط", "4 بطاريات"],
				["فلتية الشحن والتفريغ", "14 ~ 14.6 V"],
				["القدرة على التفريغ", "ساعتين"],
				["عدد الدورات @25°C", "11000 دورة"],
				["المقاومة للرطوبة", "5% ~ 95%"],
				["الارتفاع عن سطح البحر", "4000 m"],
				["الشهادات", "IEC62619/CE/RoHS/UN38.3"],
				["المقاس", "502 × 186 × 243 mm"],
				["الوزن", "29.5 kg"],
				["الحماية", "IP65"]
			]
		}]
	},
	"lipower-2012emh": {
		description: "انفيرتر هايبرد ليو باور 1.6 كيلو سنجل فاز 12 فولت مع الواي فاي.",
		specs: [{
			title: "المواصفات المعتمدة",
			rows: [
				["القدرة", "1.6 kW سنجل فاز"],
				["قدرة تحمل الانفيرتر من الالواح الشمسية", "2000 W"],
				["فولتية الجهد المباشر", "500 V"],
				["تيار الشحن للمنظم", "14 A"],
				["فولتية المنظم", "30–450 V"],
				["فولتية البطارية", "12–14.1 V"],
				["تيار الشحن", "100 A"],
				["منفذ BMS", "مدعوم"],
				["الواي فاي", "مدعوم"],
				["التشغيل بدون بطارية", "مدعوم"],
				["الكفاءة", "97.6%"]
			]
		}],
		features: [
			"يدعم منفذ BMS",
			"يدعم الواي فاي",
			"يدعم التشغيل بدون بطارية",
			"كفاءة 97.6%"
		]
	},
	"lipower-bz6248smh": {
		description: "انفيرتر هايبرد ليو باور 6.2 كيلو سنجل فاز 48 فولت، قابل للدمج حتى 9 أجهزة مع الواي فاي.",
		specs: [{
			title: "المواصفات المعتمدة",
			rows: [
				["القدرة", "6.2 kW سنجل فاز"],
				["الدمج", "حتى 9 أجهزة"],
				["قدرة تحمل الانفيرتر من الالواح الشمسية", "8500 W"],
				["فولتية الجهد المباشر", "500 V"],
				["تيار الشحن للمنظم", "27 A"],
				["فولتية المنظم", "90–500 V"],
				["فولتية البطارية", "48–56 V"],
				["تيار الشحن", "120 A"],
				["منفذ BMS", "مدعوم"],
				["الواي فاي", "مدعوم"],
				["التشغيل بدون بطارية", "مدعوم"],
				["الكفاءة", "97.6%"]
			]
		}],
		features: [
			"قابل للدمج حتى 9 أجهزة",
			"يدعم منفذ BMS",
			"يدعم الواي فاي",
			"يدعم التشغيل بدون بطارية",
			"كفاءة 97.6%"
		]
	}
};
function applyOverride(p) {
	const o = SPEC_OVERRIDES[p.id];
	if (!o) return p;
	const { modelTable: _m, ...rest } = p;
	return {
		...rest,
		description: o.description,
		specs: o.specs,
		...o.features ? { features: o.features } : {}
	};
}
var CATALOG_PRODUCTS = PRODUCTS.flatMap(expandProduct).filter(inverterAllowed).map(applyOverride);
function capacityKWh(p) {
	const src = `${p.power ?? ""} ${p.name ?? ""}`;
	const kwh = src.match(/([\d.]+)\s*kwh/i);
	if (kwh?.[1]) return parseFloat(kwh[1]);
	const wh = src.match(/([\d.]+)\s*wh/i);
	if (wh?.[1]) return parseFloat(wh[1]) / 1e3;
	return 0;
}
function productsByCategory(cat) {
	const items = CATALOG_PRODUCTS.filter((p) => p.category === cat);
	if (cat === "batteries") return [...items].sort((a, b) => capacityKWh(b) - capacityKWh(a));
	return items;
}
function findProduct(id) {
	return CATALOG_PRODUCTS.find((p) => p.id === id) ?? CATALOG_PRODUCTS.find((p) => p.baseId === id) ?? PRODUCTS.find((p) => p.id === id);
}
/** يطابق نص التوافق الرسمي مع منتجات الكتالوج (بالعلامة التجارية أو الموديل) — بدون أي تخمين. */
function matchCompatibleProducts(product, text) {
	const t = text.toUpperCase();
	return PRODUCTS.filter((p) => {
		if (p.id === product.id || p.category === product.category) return false;
		const brand = p.brand.toUpperCase();
		const model = p.model.toUpperCase();
		return t.includes(brand) || model.length > 3 && t.includes(model);
	});
}
/** أهم المواصفات للبطاقة السريعة — تُبنى من المواصفات الموثقة فقط. */
function quickSpecs(product, limit = 6) {
	return product.specs.flatMap((g) => g.rows).slice(0, limit);
}
/** يوحّد النص لمقارنة الموديلات: أحرف كبيرة بدون فواصل أو رموز. */
function normalizeModel(text) {
	return text.toUpperCase().replace(/[^A-Z0-9]/g, "");
}
var ARABIC_BRANDS = [
	{
		pattern: /سنتك|SUNTECH/i,
		brand: "Suntech"
	},
	{
		pattern: /داي|دي\s*اي|DEYE/i,
		brand: "Deye"
	},
	{
		pattern: /سوليس|سوليز|SOLIS/i,
		brand: "Solis"
	},
	{
		pattern: /لايف?\s*باور|لي\s*باور|ليو\s*باور|LI-?POWER/i,
		brand: "Li-Power"
	},
	{
		pattern: /بايلونتك|بايلونتيك|PYLONTECH/i,
		brand: "Pylontech"
	},
	{
		pattern: /هايثيوم|هيثيوم|HITHIUM|HEROEE/i,
		brand: "HiTHIUM"
	}
];
/**
* يعثر على منتج الكتالوج المطابق لنص بند المنظومة (اسم البند + أسطر مواصفاته).
* المطابقة بالموديل الرسمي أولاً، ثم بالقدرة للألواح، ثم بالعلامة التجارية داخل نفس الفئة.
* لا تخمين: تعيد null إذا لم يوجد تطابق موثوق.
*/
function findCatalogProductByText(text, category) {
	const norm = normalizeModel(text);
	const pool = category ? PRODUCTS.filter((p) => p.category === category) : PRODUCTS;
	let best = null;
	let bestLen = 0;
	for (const product of pool) for (const variant of product.model.split(/[/|،,]/)) {
		const token = normalizeModel(variant);
		if (token.length >= 6 && norm.includes(token) && token.length > bestLen) {
			best = product;
			bestLen = token.length;
		}
	}
	if (best) return best;
	if (!category || category === "panels") {
		const watt = text.match(/(\d{3})\s*(?:وات|واط|W\b)/i);
		if (watt && watt[1]) {
			const panel = PRODUCTS.find((p) => p.category === "panels" && p.power.includes(watt[1]));
			if (panel) return panel;
		}
	}
	const brandHit = ARABIC_BRANDS.find((b) => b.pattern.test(text));
	if (brandHit) {
		const byBrand = pool.find((p) => p.brand === brandHit.brand);
		if (byBrand) return byBrand;
	}
	return null;
}
/** يحوّل حقل القدرة إلى مجال رقمي: "7.6 – 12 kW" → {min:7.6,max:12,unit:"kW"} */
function powerRangeOf(product) {
	const m = product.power.match(/([\d.]+)\s*(?:[–—-]\s*([\d.]+))?\s*(kWh|kW|W)/i);
	if (!m || !m[1] || !m[3]) return null;
	const min = Number(m[1]);
	const max = m[2] ? Number(m[2]) : min;
	if (!Number.isFinite(min) || !Number.isFinite(max)) return null;
	const u = m[3].toLowerCase();
	return {
		min,
		max,
		unit: u === "kwh" ? "kWh" : u === "kw" ? "kW" : "W"
	};
}
function isThreePhaseProduct(product) {
	return /ثلاثي\s*الطور|3\s*phase|three\s*phase/i.test(`${product.name} ${product.model}`);
}
function wantsThreePhase(text) {
	return /ثلاثي|ثري\s*فاز|3\s*فاز|3\s*-?\s*phase|three\s*phase/i.test(text);
}
function wantsSinglePhase(text) {
	return /أحادي|احادي|سنجل|1\s*فاز|single\s*phase|split\s*phase/i.test(text);
}
/** يقرأ قدرة/سعة مذكورة في النص بالكيلووات أو كيلووات-ساعة */
function readKiloValue(text, unit) {
	const pattern = unit === "kWh" ? /([\d.,]+)\s*(?:kwh|كيلو\s*وات\s*ساعة|كيلووات\s*ساعة|ك\.و\.س)/i : /([\d.,]+)\s*(?:kw\b|كيلو\s*وات|كيلووات)(?!\s*ساعة)/i;
	const m = text.match(pattern);
	if (!m || !m[1]) return null;
	const n = Number(m[1].replace(",", "."));
	return Number.isFinite(n) ? n : null;
}
/**
* يطابق بند المنظومة المقترحة مع منتج الكتالوج الحقيقي:
* الموديل الرسمي أولاً، ثم القدرة/السعة المحسوبة مع مراعاة نوع الطور.
* يعيد null إذا لم يوجد تطابق موثوق (لا صور افتراضية).
*/
function findCatalogProductForSpec(text, category, hint = "") {
	const full = `${text} ${hint}`;
	const byModel = findCatalogProductByText(text, category);
	const pool = PRODUCTS.filter((p) => p.category === category);
	if (byModel && normalizeModel(text).length > 0) {
		if (pool.some((p) => p.id === byModel.id && p.model.split(/[/|،,]/).some((v) => {
			const t = normalizeModel(v);
			return t.length >= 6 && normalizeModel(text).includes(t);
		}))) return byModel;
	}
	if (category === "panels") {
		const watt = text.match(/(\d{3})\s*(?:وات|واط|W\b)/i);
		if (watt?.[1]) {
			const exact = pool.find((p) => p.power.includes(watt[1]));
			if (exact) return exact;
		}
		return byModel;
	}
	const brandHit = ARABIC_BRANDS.find((b) => b.pattern.test(text));
	const brandPool = brandHit ? pool.filter((p) => p.brand.toLowerCase().includes(brandHit.brand.toLowerCase().split(" ")[0])) : pool;
	const kiloNum = (u) => {
		const v = readKiloValue(text, u);
		if (v != null) return v;
		const m = text.match(/([\d]+(?:[.,]\d+)?)\s*كيلو/);
		return m?.[1] ? Number(m[1].replace(",", ".")) : null;
	};
	if (category === "inverters") {
		const kw = kiloNum("kW");
		if (kw != null) {
			const three = wantsThreePhase(full) ? true : wantsSinglePhase(full) ? false : null;
			const phaseOk = (p) => three === null || isThreePhaseProduct(p) === three;
			return brandPool.map((p) => ({
				p,
				r: powerRangeOf(p)
			})).filter((x) => !!x.r && x.r.unit === "kW").filter((x) => kw >= x.r.min - .05 && kw <= x.r.max + .05 && phaseOk(x.p)).sort((a, b) => a.r.max - b.r.max)[0]?.p ?? null;
		}
		return byModel;
	}
	if (category === "batteries") {
		const ah = text.match(/(\d{2,4})\s*(?:أمبير\s*ساعة|أمبير|امبير|Ah)\b/i);
		if (ah?.[1]) {
			const byAh = brandPool.find((p) => p.name.includes(`${ah[1]}Ah`) || p.model.includes(ah[1]));
			if (byAh) return byAh;
		}
		const kwh = kiloNum("kWh");
		if (kwh != null) return brandPool.map((p) => ({
			p,
			r: powerRangeOf(p)
		})).filter((x) => x.r && x.r.unit === "kWh" && Math.abs(x.r.min - kwh) <= .15).sort((a, b) => Math.abs(a.r.min - kwh) - Math.abs(b.r.min - kwh))[0]?.p ?? null;
		return byModel;
	}
	return byModel;
}
//#endregion
//#region src/lib/product-video.ts
var PRODUCT_VIDEOS = {
	"lipower-bz6248smh": {
		src: {
			url: "/videos/lipower-bz6248smh.mp4",
			content_type: "video/mp4",
			size: 7826124
		}.url,
		poster: "/assets/lipower-bz6248smh-DJ8hoBCH.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "6.2 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Single Phase"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "48 Vdc"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة تحويل",
				value: "98%"
			}
		]
	},
	"suntech-stp595s-c72-nsh": {
		src: {
			url: "/videos/suntech-stp595s-c72-nsh.mp4",
			content_type: "video/mp4"
		}.url,
		poster: "/assets/suntech-stp595s-c72-nsh-DR1bfSej.webp",
		cues: [
			{
				at: .5,
				until: 3.4,
				label: "القدرة القصوى Pmax",
				value: "595 W"
			},
			{
				at: 3.4,
				until: 6,
				label: "نوع الخلية",
				value: "N-Type TOPCon ثنائي الوجه"
			},
			{
				at: 6,
				until: 8,
				label: "كفاءة اللوح",
				value: "23.0%"
			},
			{
				at: 8,
				until: 10,
				label: "عدد الخلايا",
				value: "144 خلية نصفية"
			}
		]
	},
	"pylontech-rv12314": {
		src: {
			url: "/videos/pylontech-rv12314.mp4",
			content_type: "video/mp4"
		}.url,
		poster: "/assets/pylontech-rv12314-Dwhppe5P.webp",
		cues: [
			{
				at: .5,
				until: 3,
				label: "الجهد المقنن",
				value: "12.8 Vdc"
			},
			{
				at: 3,
				until: 5.6,
				label: "سعة الخلايا",
				value: "314 Ah"
			},
			{
				at: 5.6,
				until: 7.8,
				label: "سعة البطارية",
				value: "4019.2 Wh"
			},
			{
				at: 7.8,
				until: 10,
				label: "عمر الدورات",
				value: "10000 دورة"
			}
		]
	},
	"pylontech-uf5000": {
		src: {
			url: "/videos/pylontech-uf5000.mp4",
			content_type: "video/mp4",
			size: 2942131
		}.url,
		poster: "/assets/pylontech-uf5000-DGxlmmtO.webp",
		cues: [
			{
				at: .4,
				until: 2.2,
				label: "سعة وحدة البطارية",
				value: "5.12 kWh"
			},
			{
				at: 2.2,
				until: 3.6,
				label: "الجهد الاسمي",
				value: "51.2 Vdc"
			},
			{
				at: 3.6,
				until: 4.8,
				label: "عدد الوحدات في السلسلة",
				value: "20"
			},
			{
				at: 4.8,
				until: 6,
				label: "الأبعاد الحقيقية",
				value: "442 × 452.6 × 161 mm"
			}
		]
	},
	"deye-sun-3-6k-sg04lp1": {
		src: {
			url: "/videos/deye-sun-3-6k-sg04lp1.mp4",
			content_type: "video/mp4",
			size: 7762260
		}.url,
		poster: "/assets/deye-sun-3-6k-sg04lp1-OeXSbCNo.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "3 – 6 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Single Phase Hybrid"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "48 Vdc"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة تحويل",
				value: "97.6%"
			}
		]
	},
	"hithium-heroee-maxpower-16": {
		src: {
			url: "/videos/hithium-heroee-maxpower-16.mp4",
			content_type: "video/mp4"
		}.url,
		poster: "/assets/hithium-heroee-maxpower-16-BQNfShdK.webp",
		cues: [
			{
				at: .5,
				until: 3,
				label: "الجهد المقنن",
				value: "51.2 V"
			},
			{
				at: 3,
				until: 5.6,
				label: "الطاقة",
				value: "16.08 kWh"
			},
			{
				at: 5.6,
				until: 7.8,
				label: "عمر الدورات",
				value: "11000 دورة"
			},
			{
				at: 7.8,
				until: 10,
				label: "التوسعة",
				value: "حتى 16 وحدة على التوازي"
			}
		]
	},
	"suntech-stp720s-d66-nsh": {
		src: {
			url: "/videos/suntech-stp720s-d66-nsh.mp4",
			content_type: "video/mp4"
		}.url,
		poster: "/assets/suntech-stp720s-d66-nsh-ZJdS4nmq.webp",
		cues: [
			{
				at: .5,
				until: 3.4,
				label: "القدرة القصوى Pmax",
				value: "720 W"
			},
			{
				at: 3.4,
				until: 6,
				label: "نوع الخلية",
				value: "N-Type TOPCon ثنائي الوجه"
			},
			{
				at: 6,
				until: 8,
				label: "كفاءة اللوح",
				value: "23.2%"
			},
			{
				at: 8,
				until: 10,
				label: "عدد الخلايا",
				value: "132 خلية"
			}
		]
	},
	"deye-sun-7-6-12k-sg02lp1": {
		src: {
			url: "/videos/deye-sun-7-6-12k-sg02lp1.mp4",
			content_type: "video/mp4",
			size: 7963120
		}.url,
		poster: "/assets/deye-sun-7-6-12k-sg02lp1-ayw2k2pP.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "7.6 – 12 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Single Phase Hybrid"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "40–60 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.6%"
			}
		]
	},
	"deye-sun-14-20k-sg05lp3": {
		src: {
			url: "/videos/deye-sun-14-20k-sg05lp3.mp4",
			content_type: "video/mp4",
			size: 8028374
		}.url,
		poster: "/assets/deye-sun-14-20k-sg05lp3-BQYa9s0s.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "14 – 20 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase Hybrid — 3L+N+PE"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "أقصى جهد PV",
				value: "800 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.6%"
			}
		]
	},
	"deye-sun-29-9-50k-sg01hp3": {
		src: {
			url: "/videos/deye-sun-29-9-50k-sg01hp3.mp4",
			content_type: "video/mp4",
			size: 5898544
		}.url,
		poster: "/assets/deye-sun-29-9-50k-sg01hp3-lE1_Gqmq.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "29.9 – 50 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase — 3L/N/PE"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "160–800 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.60%"
			}
		]
	},
	"deye-sun-60-80k-sg02hp3": {
		src: {
			url: "/videos/deye-sun-60-80k-sg02hp3.mp4",
			content_type: "video/mp4",
			size: 8523936
		}.url,
		poster: "/assets/deye-sun-60-80k-sg02hp3-Bzuf-FxY.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "60 – 80 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase Hybrid — 3L+N+PE"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "160–1000 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.60%"
			}
		]
	},
	"solis-s6-eh2p-5-8k": {
		src: {
			url: "/videos/solis-s6-eh2p-5-8k.mp4",
			content_type: "video/mp4",
			size: 7782227
		}.url,
		poster: "/assets/solis-s6-eh2p-5-8k-Cbjn7T01.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "5 – 8 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Split Phase — L+N+PE/2L+PE"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "40–60 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "96.0%"
			}
		]
	},
	"solis-s6-eh3p-12-20k-h": {
		src: {
			url: "/videos/solis-s6-eh3p-12-20k-h.mp4",
			content_type: "video/mp4",
			size: 7247990
		}.url,
		poster: "/assets/solis-s6-eh3p-12-20k-h-a34WkJZ8.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "12 – 20 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase — 3/N/PE، 230/400V"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "120–800 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.7%"
			}
		]
	},
	"solis-s6-eh3p-29-9-50k-h": {
		src: {
			url: "/videos/solis-s6-eh3p-29-9-50k-h.mp4",
			content_type: "video/mp4",
			size: 7608918
		}.url,
		poster: "/assets/solis-s6-eh3p-29-9-50k-h-BLJoPOTJ.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "29.9 – 50 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase — 3/N/PE، 230/400V"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "150–800 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.8%"
			}
		]
	},
	"solis-s6-eh3p-75-125k": {
		src: {
			url: "/videos/solis-s6-eh3p-75-125k.mp4",
			content_type: "video/mp4",
			size: 8123264
		}.url,
		poster: "/assets/solis-s6-eh3p-75-125k-p4i7-HWT.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "75 – 125 kW"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Three Phase — 3/N/PE، 230/400V"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "جهد البطارية",
				value: "300–950 V"
			},
			{
				at: 7.4,
				until: 10,
				label: "أقصى كفاءة",
				value: "97.5%"
			}
		]
	},
	"lipower-2012emh": {
		src: {
			url: "/videos/lipower-2012emh.mp4",
			content_type: "video/mp4",
			size: 7857641
		}.url,
		poster: "/assets/lipower-2012emh-Bi9oVZY9.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة",
				value: "1600 W"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Single Phase Hybrid"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "أقصى قدرة PV",
				value: "2000 W"
			},
			{
				at: 7.4,
				until: 10,
				label: "نوع الشحن الشمسي",
				value: "MPPT — 30–500 Vdc"
			}
		]
	},
	"lipower-bz4024smhgw": {
		src: {
			url: "/videos/lipower-bz4024smhgw.mp4",
			content_type: "video/mp4",
			size: 7734190
		}.url,
		poster: "/assets/lipower-bz4024smhgw-BFN8zRbb.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "القدرة المقننة (بطارية)",
				value: "4000 W"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "نوع النظام",
				value: "Single Phase Hybrid"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "أقصى قدرة PV",
				value: "6500 W"
			},
			{
				at: 7.4,
				until: 10,
				label: "نوع الشحن الشمسي",
				value: "MPPT — 60–500 Vdc"
			}
		]
	},
	"pylontech-rv12100ch": {
		src: {
			url: "/videos/pylontech-rv12100ch.mp4",
			content_type: "video/mp4",
			size: 8329074
		}.url,
		poster: "/assets/pylontech-rv12100ch-CY8MnjD1.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "السعة",
				value: "100 Ah"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "الطاقة",
				value: "1280 Wh"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "الجهد",
				value: "12.8 VDC"
			},
			{
				at: 7.4,
				until: 10,
				label: "نوع البطارية",
				value: "LiFePO4"
			}
		]
	},
	"pylontech-rv12200": {
		src: {
			url: "/videos/pylontech-rv12200.mp4",
			content_type: "video/mp4",
			size: 8590340
		}.url,
		poster: "/assets/pylontech-rv12200-ByZ3UJLs.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "السعة",
				value: "200 Ah"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "الجهد",
				value: "12.8 VDC"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "نوع البطارية",
				value: "LiFePO4"
			},
			{
				at: 7.4,
				until: 10,
				label: "دورة الحياة",
				value: ">4000"
			}
		]
	},
	"pylontech-fidus-battery-plus": {
		src: {
			url: "/videos/pylontech-fidus-battery-plus.mp4",
			content_type: "video/mp4"
		}.url,
		poster: "/assets/pylontech-fidus-battery-plus-u4AlDo8s.webp",
		cues: [
			{
				at: .5,
				until: 3.2,
				label: "السعة الاسمية",
				value: "16076 Wh"
			},
			{
				at: 3.2,
				until: 5.4,
				label: "الجهد",
				value: "51.2 Vdc"
			},
			{
				at: 5.4,
				until: 7.4,
				label: "عمق التفريغ",
				value: "100%"
			},
			{
				at: 7.4,
				until: 10,
				label: "دورة الحياة",
				value: "8000 (25 °C)"
			}
		]
	},
	"pylontech-optimus-a300-hy": {
		src: {
			url: "/videos/pylontech-optimus-a300-hy.mp4",
			content_type: "video/mp4",
			size: 5632879
		}.url,
		poster: "/assets/pylontech-optimus-a300-hy-Cl0lDX0v.webp",
		cues: [
			{
				at: .4,
				until: 2.4,
				label: "السعة الاسمية",
				value: "313 kWh"
			},
			{
				at: 2.4,
				until: 4,
				label: "الإنفرتر الهجين المدمج",
				value: "50 kW"
			},
			{
				at: 4,
				until: 5.2,
				label: "عمر الدورات",
				value: "أكثر من 7000 دورة"
			},
			{
				at: 5.2,
				until: 7,
				label: "الأبعاد الحقيقية",
				value: "1500 × 1300 × 2200 mm — 3.5 طن"
			}
		]
	},
	"pylontech-optimus-l260-hy": {
		src: {
			version: 1,
			asset_id: "fd642d02-ef3f-47e8-97f7-983b1e01166a",
			project_id: "e1bc7926-83c3-4bfa-973d-7c7307e1efd7",
			url: "/videos/pylontech-optimus-l260-hy.mp4",
			original_filename: "pylontech-optimus-l260-hy.mp4",
			size: 6327183,
			created_at: "2026-10-01T02:35:11Z"
		}.url,
		poster: "/assets/pylontech-optimus-l260-hy-C6sd1OSo.webp",
		cues: [
			{
				at: .4,
				until: 2.2,
				label: "السعة الاسمية",
				value: "261 kWh"
			},
			{
				at: 2.2,
				until: 3.8,
				label: "الإنفرتر الهجين المدمج",
				value: "125 kW"
			},
			{
				at: 3.8,
				until: 5,
				label: "نوع التبريد",
				value: "تبريد سائل"
			},
			{
				at: 5,
				until: 6.5,
				label: "الأبعاد الحقيقية",
				value: "1400 × 2180 × 1300 mm — أقل من 3 طن"
			}
		]
	},
	"pylontech-powercube-m5a": {
		src: {
			url: "/videos/pylontech-powercube-m5a.mp4",
			content_type: "video/mp4",
			size: 7484854
		}.url,
		poster: "/assets/pylontech-powercube-m5a-jkC-JmYD.webp",
		cues: [
			{
				at: .3,
				until: 1.7,
				label: "سعة الوحدة",
				value: "15.68 kWh"
			},
			{
				at: 1.7,
				until: 3,
				label: "جهد تشغيل النظام",
				value: "0~1500 Vdc"
			},
			{
				at: 3,
				until: 4.2,
				label: "عدد الوحدات",
				value: "1~21 وحدة"
			},
			{
				at: 4.2,
				until: 5.2,
				label: "كفاءة الدورة الكاملة (1C)",
				value: "96%"
			},
			{
				at: 5.2,
				until: 6,
				label: "الأبعاد الحقيقية",
				value: "1050 × 925 × 1965 mm"
			}
		]
	},
	"pylontech-powercube-m1c": {
		src: {
			url: "/videos/pylontech-powercube-m1c.mp4",
			content_type: "video/mp4",
			size: 8809484
		}.url,
		poster: "/assets/pylontech-powercube-m1c-B8V3NUbK.webp",
		cues: [
			{
				at: .4,
				until: 2.2,
				label: "سعة الوحدة",
				value: "4.74 kWh"
			},
			{
				at: 2.2,
				until: 3.6,
				label: "جهد تشغيل النظام",
				value: "0~1000 Vdc"
			},
			{
				at: 3.6,
				until: 4.8,
				label: "عدد الوحدات",
				value: "1~23 وحدة"
			},
			{
				at: 4.8,
				until: 6,
				label: "الأبعاد الحقيقية",
				value: "815 × 659 × 2130 mm"
			}
		]
	}
};
function getProductVideo(productId) {
	return PRODUCT_VIDEOS[productId] ?? null;
}
/** ينطق الوحدات والرموز الهندسية بالعربية حتى يقرأها التعليق الصوتي سليمة. */
function spokenValue(raw) {
	return raw.replace(/(\d)\s*~\s*(\d)/g, "$1 إلى $2").replace(/(\d)\s*[–-]\s*(\d)/g, "$1 إلى $2").replace(/>\s*/g, "أكثر من ").replace(/([\d.,]+)\s*\+/g, "أكثر من $1").replace(/\bkWh\b/gi, "كيلو واط ساعة").replace(/\bWh\b/gi, "واط ساعة").replace(/\bkW\b/g, "كيلو واط").replace(/\bW\b/g, "واط").replace(/\bAh\b/gi, "أمبير ساعة").replace(/\bVdc\b/gi, "فولت تيار مستمر").replace(/\bV\b/g, "فولت").replace(/°\s*C/g, "درجة مئوية").replace(/%/g, " بالمئة").replace(/\bSingle Phase Hybrid\b/gi, "هجين أحادي الطور").replace(/\bSingle Phase\b/gi, "أحادي الطور").replace(/\bThree Phase\b/gi, "ثلاثي الأطوار").replace(/\bHybrid\b/gi, "هجين").replace(/\bLiFePO4\b/gi, "ليثيوم فوسفات الحديد").replace(/\bN-Type TOPCon\b/gi, "خلايا توبكون من النوع إن").replace(/\bPmax\b/gi, "").replace(/زجاج\s*[-–]?\s*زجاج/g, "").replace(/\s{2,}/g, " ").trim();
}
/** أسماء العلامات كما تُنطق بالعربية في التعليق الصوتي. */
function spokenName(raw) {
	return spokenValue(raw.replace(/\bSuntech\b/gi, "سن تك").replace(/\bDeye\b/gi, "داي").replace(/\bSolis\b/gi, "سوليس").replace(/\bLi-?Power\b/gi, "لي باور").replace(/\bPylontech\b/gi, "بايلونتك").replace(/\bHiTHIUM\b/gi, "هاي ثيوم").replace(/\bHeroEE\b/gi, "هيرو إي إي").replace(/\bMaxPower\b/gi, "ماكس باور").replace(/\bNeoPower\b/gi, "نيو باور").replace(/\bPowerCube\b/gi, "باور كيوب").replace(/\bFidus Battery Plus\b/gi, "فيدوس باتري بلس").replace(/\bSplit Phase\b/gi, "طور مجزّأ").replace(/[()]/g, " ").replace(/\s*\/\s*/g, " "));
}
/**
* صيغة الموديل المناسبة للنطق: نُبسّط الرموز الطويلة والمتعددة إلى وصف سلسلة مفهوم،
* ونحتفظ بالموديلات القصيرة فقط. القيمة null تعني: لا يُنطق الموديل إطلاقاً.
* النصوص المكتوبة في الكتالوج والبطاقات تبقى بالرموز الرسمية الكاملة دون تغيير.
*/
var SPOKEN_MODELS = [
	{
		match: /^STP595S/i,
		spoken: "سلسلة إس تي بي 595"
	},
	{
		match: /^STP720S/i,
		spoken: "سلسلة إس تي بي 720"
	},
	{
		match: /SG04LP1/i,
		spoken: "سلسلة إس جي 04"
	},
	{
		match: /SG02LP1/i,
		spoken: "سلسلة إس جي 02"
	},
	{
		match: /SG05LP3/i,
		spoken: "سلسلة إس جي 05 ثلاثية الطور"
	},
	{
		match: /SG01HP3/i,
		spoken: "سلسلة إس جي 01 عالية الجهد"
	},
	{
		match: /SG02HP3/i,
		spoken: "سلسلة إس جي 02 عالية الجهد"
	},
	{
		match: /^S6-EH2P/i,
		spoken: "سلسلة إس 6 إي إتش 2 بي"
	},
	{
		match: /^S6-EH3P/i,
		spoken: "سلسلة إس 6 إي إتش 3 بي"
	},
	{
		match: /^2012EMH/i,
		spoken: "موديل 2012"
	},
	{
		match: /^BZ4024/i,
		spoken: "موديل بي زد 4024"
	},
	{
		match: /^BZ6248/i,
		spoken: "موديل بي زد 6248"
	},
	{
		match: /^RV12100/i,
		spoken: "موديل آر في 12100"
	},
	{
		match: /^RV12200/i,
		spoken: "موديل آر في 12200"
	},
	{
		match: /^NeoPower/i,
		spoken: "موديل نيو باور 4 الجيل الثاني"
	},
	{
		match: /^FB-L-16/i,
		spoken: "سلسلة إف بي إل 16"
	},
	{
		match: /^PowerCube-M5A/i,
		spoken: "سلسلة باور كيوب إم 5 إيه"
	},
	{
		match: /^PowerCube-M1C/i,
		spoken: "سلسلة باور كيوب إم 1 سي"
	},
	{
		match: /^HeroEE MaxPower/i,
		spoken: null
	},
	{
		match: /^A300-HY/i,
		spoken: "أوبتيموس إيه 300 هايبرد"
	},
	{
		match: /LEGEND\s*112C/i,
		spoken: "ليجند 112 سي"
	},
	{
		match: /LEGEND\s*112S/i,
		spoken: "ليجند 112 إس"
	},
	{
		match: /^L260-HY/i,
		spoken: "أوبتيموس إل 260 هايبرد"
	},
	{
		match: /^UF5000/i,
		spoken: "موديل يو إف 5000"
	}
];
/** الموديل بصيغة منطوقة سلسة، أو null إذا كان من الأفضل عدم نطقه. */
function spokenModel(model) {
	const hit = SPOKEN_MODELS.find((m) => m.match.test(model.trim()));
	if (hit) return hit.spoken;
	const clean = model.trim();
	if (clean.length <= 12 && !/[/()+–]/.test(clean)) return `موديل ${clean}`;
	return null;
}
/** كلمة نوع المنتج كما تُنطق. */
var KIND_WORD = {
	panels: "لوح شمسي",
	inverters: "إنفرتر",
	batteries: "بطارية ليثيوم",
	storage: "نظام تخزين طاقة"
};
/**
* التعليق المصاحب للفيديو — مختصر جداً: جملة واحدة تجمع النوع والعلامة والموديل
* والقدرة (مرة واحدة فقط)، ثم أهم مواصفتين فقط كما تظهر على الشاشة.
* الفائدة العملية ولمن يناسب المنتج تُنطق بعد نهاية الفيديو.
*/
function videoIntroNarration(p, video) {
	const kind = KIND_WORD[p.category] ?? "منتج";
	const brand = spokenName(p.brand);
	const model = spokenModel(p.model);
	const power = spokenValue(p.power);
	const powerWord = p.category === "batteries" || p.category === "storage" ? "بسعة" : "بقدرة";
	return `${`${kind} ${brand}${model ? ` ${model}` : ""}، ${powerWord} ${power}`}.`;
}
/**
* التعليق بعد نهاية الفيديو — مكمّل لا مكرِّر: جملة أو جملتان عن الفائدة العملية
* وأين يُركّب ولمن يناسب، بلا أي رقم أو قدرة سبق ذكرها في الفيديو.
*/
function afterVideoNarration(p) {
	const clean = (s) => s.replace(/\([^)]*\)/g, "").split(/[،.]/)[0].replace(/[\d٠-٩%]+/g, "").replace(/[A-Za-z+\-/]+/g, "").replace(/\s+(حتى|بجهد|بقدرة|بسعة|و)\s*$/g, "").replace(/\s{2,}/g, " ").trim();
	const words = (s) => s.split(" ").length;
	const use = (p.uses ?? []).map(clean).find((u) => u.length > 4 && words(u) <= 8) ?? "";
	const feature = (p.features ?? []).filter((f) => !/[\d٠-٩A-Za-z×:]/.test(f.split(/[،.]/)[0])).map(clean).find((f) => f.length > 6 && words(f) <= 7) ?? "";
	if (use) return `مناسب لـ ${use}.`;
	return feature ? `من أبرز مزاياه: ${feature}.` : "";
}
/** نص التعليق الصوتي العربي لفيديو المنتج: الاسم ثم أهم المواصفات كما في الكتالوج. */
function videoNarration(title, video) {
	const [rawName, rawModel] = title.split("—").map((p) => p.trim());
	const name = spokenName(rawName ?? "");
	const model = rawModel ? spokenModel(rawModel) : null;
	return `${model ? `${name}، ${model}.` : `${name}.`} ${video.cues.map((c) => `${c.label.replace(/\bPmax\b/gi, "").trim()} ${spokenValue(c.value)}`).join("، ")}.`;
}
//#endregion
//#region src/lib/official-catalogs.ts
var AR_FILES = [
	"catalog-1",
	"catalog-11",
	"catalog-13",
	"catalog-15",
	"catalog-16",
	"catalog-17",
	"catalog-2",
	"catalog-3",
	"catalog-4",
	"catalog-5",
	"catalog-6",
	"catalog-7",
	"deye-sun-14-20k-sg05lp3--16k",
	"deye-sun-14-20k-sg05lp3--20k",
	"deye-sun-29-9-50k-sg01hp3--30k",
	"deye-sun-29-9-50k-sg01hp3--50k",
	"deye-sun-3-6k-sg04lp1--6k-sm2",
	"deye-sun-60-80k-sg02hp3--80k",
	"deye-sun-7-6-12k-sg02lp1--12k",
	"deye-sun-7-6-12k-sg02lp1--8k",
	"hithium-heroee-legend-112c",
	"hithium-heroee-legend-112s",
	"hithium-heroee-neopower-4-g2",
	"pylontech-optimus-a300-hy",
	"pylontech-optimus-l260-hy",
	"pylontech-uf5000",
	"solis-s6-eh2p-5-8k--6k",
	"solis-s6-eh2p-5-8k--8k",
	"solis-s6-eh3p-12-20k-h--12k",
	"solis-s6-eh3p-12-20k-h--20k",
	"solis-s6-eh3p-29-9-50k-h--30k",
	"solis-s6-eh3p-29-9-50k-h--50k",
	"solis-s6-eh3p-75-125k--125k",
	"solis-s6-eh3p-75-125k--80k",
	"suntech-stp595s-c72-nsh",
	"suntech-stp720s-d66-nsh"
];
var AR_SET = new Set(AR_FILES);
var arUrl = (name) => `/catalogs/official-ar/${name}.pdf`;
function officialCatalogUrl(product, lang) {
	const src = product.files.find((f) => f.kind === "Datasheet" || f.kind === "Catalog")?.url;
	if (!src) return null;
	if (lang === "en") return src;
	const base = product.baseId ?? product.id.split("--")[0] ?? product.id;
	for (const name of [product.id, base]) if (AR_SET.has(name)) return arUrl(name);
	const sibling = AR_FILES.find((n) => n.startsWith(`${base}--`));
	if (sibling) return arUrl(sibling);
	const legacy = (src.split("/").pop() ?? "").replace(/\.pdf$/i, "");
	if (AR_SET.has(legacy)) return arUrl(legacy);
	return null;
}
//#endregion
//#region src/lib/video-source.ts
var SPLIT_VIDEOS = {
	"/videos/pylontech-home-official.mp4": ["/videos/parts/pylontech-home-official.mp4.part00", "/videos/parts/pylontech-home-official.mp4.part01"],
	"/videos/pylontech-rv12314.mp4": ["/videos/parts/pylontech-rv12314.mp4.part00", "/videos/parts/pylontech-rv12314.mp4.part01"],
	"/videos/suntech-stp720s-d66-nsh.mp4": ["/videos/parts/suntech-stp720s-d66-nsh.mp4.part00", "/videos/parts/suntech-stp720s-d66-nsh.mp4.part01"],
	"/videos/hithium-heroee-maxpower-16.mp4": ["/videos/parts/hithium-heroee-maxpower-16.mp4.part00", "/videos/parts/hithium-heroee-maxpower-16.mp4.part01"],
	"/videos/suntech-stp595s-c72-nsh.mp4": ["/videos/parts/suntech-stp595s-c72-nsh.mp4.part00", "/videos/parts/suntech-stp595s-c72-nsh.mp4.part01"]
};
var cache = /* @__PURE__ */ new Map();
var STORE_NAME = "actes-videos-v1";
async function openStore() {
	return typeof caches !== "undefined" ? await caches.open(STORE_NAME).catch(() => null) : null;
}
/** يخزّن فيديو في ذاكرة المتصفح الدائمة إن لم يكن مخزّناً (يُستخدم للتجهيز الخلفي). */
async function warmOne(store, url) {
	if (!store) return;
	if (await store.match(url).catch(() => void 0)) return;
	const res = await fetch(url).catch(() => null);
	if (res?.ok) await store.put(url, res).catch(() => {});
}
/** يجهّز قائمة فيديوهات في الخلفية وقت فراغ المتصفح، فتنطلق فوراً عند فتحها لاحقاً. */
function warmVideos(urls) {
	if (typeof window === "undefined") return;
	const run = async () => {
		const store = await openStore();
		for (const url of urls) {
			const parts = SPLIT_VIDEOS[url] ?? [url];
			for (const p of parts) await warmOne(store, p);
		}
	};
	const idle = window.requestIdleCallback;
	if (idle) idle(() => void run(), { timeout: 8e3 });
	else window.setTimeout(() => void run(), 4e3);
}
/** يُرجع مسار التشغيل النهائي: المسار المباشر، أو رابط مؤقت لفيديو أُعيد تجميعه من أجزائه. */
function useResolvedVideoSrc(src) {
	const parts = SPLIT_VIDEOS[src];
	const [resolved, setResolved] = useState(() => parts ? cache.get(src) ?? "" : src);
	useEffect(() => {
		if (!parts) {
			const cached = cache.get(src);
			if (cached) {
				setResolved(cached);
				return;
			}
			setResolved(src);
			let cancelled = false;
			(async () => {
				const store = await openStore();
				const hit = store ? await store.match(src).catch(() => void 0) : void 0;
				if (!hit || cancelled) return;
				const url = URL.createObjectURL(await hit.blob());
				cache.set(src, url);
				setResolved(url);
			})();
			return () => {
				cancelled = true;
			};
		}
		const cached = cache.get(src);
		if (cached) {
			setResolved(cached);
			return;
		}
		let cancelled = false;
		(async () => {
			try {
				const store = await openStore();
				const buffers = await Promise.all(parts.map(async (p) => {
					const hit = store ? await store.match(p) : void 0;
					if (hit) return hit.blob();
					const res = await fetch(p);
					if (!res.ok) throw new Error(`part failed: ${p}`);
					if (store) store.put(p, res.clone()).catch(() => {});
					return res.blob();
				}));
				if (cancelled) return;
				const url = URL.createObjectURL(new Blob(buffers, { type: "video/mp4" }));
				cache.set(src, url);
				setResolved(url);
			} catch {
				if (!cancelled) setResolved("");
			}
		})();
		return () => {
			cancelled = true;
		};
	}, [src, parts]);
	return resolved;
}
//#endregion
export { pylontech_fidus_battery_plus_default$1 as A, p13_default as C, p9_default as D, p10_default as E, p3_default as M, p2_default as N, p8_default as O, actes_logo_full_default as P, p14_default as S, p11_default as T, p19_default as _, getProductVideo as a, p16_default as b, CATEGORIES as c, findProduct as d, matchCompatibleProducts as f, p20_default as g, p21_default as h, afterVideoNarration as i, p4_default as j, lithium_12v_314ah_png_asset_default as k, PRODUCTS as l, quickSpecs as m, warmVideos as n, videoIntroNarration as o, productsByCategory as p, officialCatalogUrl as r, videoNarration as s, useResolvedVideoSrc as t, findCatalogProductForSpec as u, p18_default as v, p12_default as w, p15_default as x, p17_default as y };
