import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.W4y2A5Gz.js","_app/immutable/chunks/disclose-version.BUSkuIA1.js","_app/immutable/chunks/runtime.BA54F5W-.js","_app/immutable/chunks/i18next.DUFf20pf.js","_app/immutable/chunks/preload-helper.CmsKOCeN.js","_app/immutable/chunks/index.StKBPifa.js"];
export const stylesheets = ["_app/immutable/assets/0.CE_KPBoY.css"];
export const fonts = [];
