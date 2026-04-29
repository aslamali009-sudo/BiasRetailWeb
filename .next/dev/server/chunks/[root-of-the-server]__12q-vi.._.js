module.exports = [
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[project]/src/lib/load-env.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureServerEnv",
    ()=>ensureServerEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$env$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@next/env/dist/index.js [middleware] (ecmascript)");
;
let hasLoadedServerEnv = false;
function ensureServerEnv() {
    if (hasLoadedServerEnv) {
        return;
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$next$2f$env$2f$dist$2f$index$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["loadEnvConfig"])(process.cwd(), ("TURBOPACK compile-time value", "development") === "development", console, true);
    hasLoadedServerEnv = true;
}
}),
"[project]/src/lib/admin-auth-shared.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allowOpenAdminInDevelopment",
    ()=>allowOpenAdminInDevelopment,
    "createAdminSessionToken",
    ()=>createAdminSessionToken,
    "getAdminSessionCookieName",
    ()=>getAdminSessionCookieName,
    "getAdminSessionTtlMs",
    ()=>getAdminSessionTtlMs,
    "isAdminConfigured",
    ()=>isAdminConfigured,
    "sanitizeAdminRedirectPath",
    ()=>sanitizeAdminRedirectPath,
    "verifyAdminCredentials",
    ()=>verifyAdminCredentials,
    "verifyAdminSessionToken",
    ()=>verifyAdminSessionToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$load$2d$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/load-env.ts [middleware] (ecmascript)");
;
const ADMIN_SESSION_COOKIE_NAME = "bias-admin-session";
const ADMIN_SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const SESSION_SCOPE = "bias-admin";
(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$load$2d$env$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["ensureServerEnv"])();
function getAdminCredentials() {
    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;
    if (!username || !password) {
        return null;
    }
    return {
        username,
        password
    };
}
function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer), (byte)=>byte.toString(16).padStart(2, "0")).join("");
}
async function signSessionValue(expiresAt) {
    const credentials = getAdminCredentials();
    if (!credentials) {
        throw new Error("Admin credentials are not configured.");
    }
    const secret = new TextEncoder().encode(`cms:${credentials.username}:${credentials.password}`);
    const message = new TextEncoder().encode(`${SESSION_SCOPE}:${expiresAt}`);
    const key = await crypto.subtle.importKey("raw", secret, {
        name: "HMAC",
        hash: "SHA-256"
    }, false, [
        "sign"
    ]);
    const signature = await crypto.subtle.sign("HMAC", key, message);
    return bufferToHex(signature);
}
function getAdminSessionCookieName() {
    return ADMIN_SESSION_COOKIE_NAME;
}
function isAdminConfigured() {
    return getAdminCredentials() !== null;
}
function allowOpenAdminInDevelopment() {
    return ("TURBOPACK compile-time value", "development") !== "production" && !isAdminConfigured();
}
function sanitizeAdminRedirectPath(pathname) {
    if (!pathname || !pathname.startsWith("/admin")) {
        return "/admin";
    }
    if (pathname === "/admin/login") {
        return "/admin";
    }
    return pathname;
}
async function verifyAdminCredentials(username, password) {
    const credentials = getAdminCredentials();
    if (!credentials) {
        return false;
    }
    return username === credentials.username && password === credentials.password;
}
async function createAdminSessionToken() {
    const expiresAt = Date.now() + ADMIN_SESSION_TTL_MS;
    const signature = await signSessionValue(expiresAt);
    return {
        token: `${expiresAt}.${signature}`,
        expiresAt
    };
}
async function verifyAdminSessionToken(token) {
    if (!token) {
        return false;
    }
    const [expiresAtValue, signature] = token.split(".");
    if (!expiresAtValue || !signature) {
        return false;
    }
    const expiresAt = Number(expiresAtValue);
    if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
        return false;
    }
    const expectedSignature = await signSessionValue(expiresAt);
    return signature === expectedSignature;
}
function getAdminSessionTtlMs() {
    return ADMIN_SESSION_TTL_MS;
}
}),
"[project]/src/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2d$shared$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin-auth-shared.ts [middleware] (ecmascript)");
;
;
async function proxy(request) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2d$shared$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["allowOpenAdminInDevelopment"])()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const { pathname, search } = request.nextUrl;
    const isAuthenticated = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2d$shared$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["verifyAdminSessionToken"])(request.cookies.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2d$shared$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["getAdminSessionCookieName"])())?.value ?? null);
    if (pathname === "/admin/login") {
        if (isAuthenticated) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL("/admin", request.url));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (isAuthenticated) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("next", (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2d$auth$2d$shared$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["sanitizeAdminRedirectPath"])(`${pathname}${search}`));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(loginUrl);
}
const config = {
    matcher: [
        "/admin/:path*"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12q-vi.._.js.map