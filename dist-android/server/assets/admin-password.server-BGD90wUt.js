//#region src/lib/admin-password.server.ts
/** Password verification stays server-only; never export the configured value. */
async function validAdminPassword(password) {
	const expected = process.env["ADMIN_PASSWORD"];
	if (!expected || !password) return false;
	const encode = new TextEncoder();
	const [a, b] = await Promise.all([crypto.subtle.digest("SHA-256", encode.encode(password)), crypto.subtle.digest("SHA-256", encode.encode(expected))]);
	const left = new Uint8Array(a);
	const right = new Uint8Array(b);
	let difference = 0;
	for (let index = 0; index < left.length; index++) difference |= (left[index] ?? 0) ^ (right[index] ?? 0);
	return difference === 0;
}
async function checkAdminPassword(password) {
	if (!await validAdminPassword(password)) throw new Error("Unauthorized");
}
//#endregion
export { checkAdminPassword, validAdminPassword };
