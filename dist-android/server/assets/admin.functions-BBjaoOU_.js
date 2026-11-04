import { t as createServerFn } from "./createServerFn-DDDJMFWM.js";
import { t as createServerRpc } from "./createServerRpc-CxD4EZ5P.js";
//#region src/lib/admin.functions.ts?tss-serverfn-split
var verifyAdminPassword_createServerFn_handler = createServerRpc({
	id: "64d9edb191fcc72a0f2036e0d7f8cab40791da1b07c4403a57bd93992139252f",
	name: "verifyAdminPassword",
	filename: "src/lib/admin.functions.ts"
}, (opts) => verifyAdminPassword.__executeServer(opts));
var verifyAdminPassword = createServerFn({ method: "POST" }).inputValidator((data) => ({ password: String(data?.password ?? "") })).handler(verifyAdminPassword_createServerFn_handler, async ({ data }) => {
	const { validAdminPassword } = await import("./admin-password.server-BGD90wUt.js");
	return { ok: await validAdminPassword(data.password) };
});
//#endregion
export { verifyAdminPassword_createServerFn_handler };
