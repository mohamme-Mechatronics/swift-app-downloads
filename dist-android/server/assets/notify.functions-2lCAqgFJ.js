import { t as createServerFn } from "./createServerFn-DDDJMFWM.js";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.js";
import { z } from "zod";
//#region src/lib/notify.functions.ts?tss-serverfn-split
/** تحويل الرقم إلى صيغة دولية بدون + (اليمن 967 افتراضياً). */
function normalizeWa(raw) {
	const digits = String(raw ?? "").replace(/\D/g, "");
	if (!digits) return "";
	if (digits.startsWith("00")) return digits.slice(2);
	if (digits.startsWith("967")) return digits;
	if (digits.length === 9) return `967${digits}`;
	return digits;
}
var escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var payloadSchema = z.object({
	text: z.string().min(1).max(3e3),
	to: z.string().optional(),
	clientName: z.string().max(120).optional(),
	clientPhone: z.string().max(40).optional(),
	orderId: z.string().max(80).optional(),
	quoteNumber: z.string().max(80).optional(),
	transferRef: z.string().max(120).optional(),
	method: z.string().max(40).optional(),
	total: z.number().optional(),
	system: z.string().max(1500).optional(),
	buttons: z.array(z.object({
		id: z.string().max(200),
		title: z.string().max(40)
	})).max(3).optional()
});
/**
* إشعار الإدارة بطلب جديد.
* الإشعارات تُسجَّل داخل التطبيق فقط (لوحة الإدارة) — لا توجد أي خدمة مراسلة خارجية.
*/
var notifyAdminWhatsapp_createServerFn_handler = createServerRpc({
	id: "c9971c19a138a739e4526377fe48f72d69e538c59580c27607c86dbc8c549fc0",
	name: "notifyAdminWhatsapp",
	filename: "src/lib/notify.functions.ts"
}, (opts) => notifyAdminWhatsapp.__executeServer(opts));
var notifyAdminWhatsapp = createServerFn({ method: "POST" }).inputValidator((data) => payloadSchema.parse(data)).handler(notifyAdminWhatsapp_createServerFn_handler, async ({ data }) => {
	const lines = [
		data.text,
		data.clientName ? `العميل: ${data.clientName}` : "",
		data.quoteNumber ? `رقم الفاتورة: ${data.quoteNumber}` : ""
	].filter(Boolean).join(" | ");
	console.log(`[actes] إشعار إدارة: ${lines.slice(0, 500)}`);
	return { ok: true };
});
var decisionSchema = z.object({
	action: z.enum(["confirm", "cancel"]),
	orderId: z.string().max(80),
	quoteNumber: z.string().max(80).optional(),
	clientName: z.string().max(120).optional(),
	clientPhone: z.string().max(40).optional(),
	transferRef: z.string().max(120).optional(),
	total: z.number().optional()
});
var CONFIRM_TEXT = "تم تأكيد فاتورتك، وسيتواصل بك مسؤول المبيعات خلال لحظات.";
var REJECT_TEXT = "عذراً، رقم الحوالة أو رقم مرجع العملية غير صحيح. يرجى إعادة إدخال رقم الحوالة أو رقم مرجع العملية.";
function buildDecisionMessages(input) {
	const ref = input.quoteNumber || input.orderId;
	const confirm = input.action === "confirm";
	return {
		clientText: [
			confirm ? "✅ <b>تأكيد الفاتورة — ACTES</b>" : "❌ <b>إلغاء الفاتورة — ACTES</b>",
			`🧾 رقم الفاتورة: ${escapeHtml(ref)}`,
			input.transferRef ? `💳 رقم الحوالة: ${escapeHtml(input.transferRef)}` : "",
			"",
			confirm ? CONFIRM_TEXT : REJECT_TEXT
		].filter(Boolean).join("\n"),
		adminText: [
			confirm ? "✅ <b>تم تأكيد فاتورة</b>" : "❌ <b>تم إلغاء فاتورة</b>",
			`🧾 رقم الفاتورة: ${escapeHtml(ref)}`,
			input.clientName ? `👤 العميل: ${escapeHtml(input.clientName)}` : "",
			input.clientPhone ? `📞 رقم العميل: ${normalizeWa(input.clientPhone)}` : "",
			input.transferRef ? `💳 رقم الحوالة: ${escapeHtml(input.transferRef)}` : "",
			typeof input.total === "number" && input.total > 0 ? `💰 الإجمالي: ${input.total}$` : "",
			"",
			confirm ? "تم إشعار العميل داخل التطبيق." : "طُلب من العميل إعادة إدخال رقم الحوالة."
		].filter(Boolean).join("\n")
	};
}
var notifyInvoiceDecision_createServerFn_handler = createServerRpc({
	id: "1cec649a0df7c8e30c4169bb52ecc81c5a8848f789ea9920e0589d54e02cd688",
	name: "notifyInvoiceDecision",
	filename: "src/lib/notify.functions.ts"
}, (opts) => notifyInvoiceDecision.__executeServer(opts));
var notifyInvoiceDecision = createServerFn({ method: "POST" }).inputValidator((data) => decisionSchema.parse(data)).handler(notifyInvoiceDecision_createServerFn_handler, async ({ data }) => {
	const messages = buildDecisionMessages(data);
	console.log(`[actes] قرار فاتورة: ${messages.adminText.slice(0, 300)}`);
	return {
		ok: true,
		admin: true,
		client: false,
		error: null
	};
});
//#endregion
export { notifyAdminWhatsapp_createServerFn_handler, notifyInvoiceDecision_createServerFn_handler };
