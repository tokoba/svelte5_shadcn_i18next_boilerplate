import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D8T1n4Kg.js","_app/immutable/chunks/disclose-version.D70go_Zm.js","_app/immutable/chunks/utils.BrqfkG10.js","_app/immutable/chunks/index.CQnD_dY2.js","_app/immutable/chunks/legacy.CW3fcMJS.js","_app/immutable/chunks/index-client.BVsko_3F.js","_app/immutable/chunks/i18next.DUFf20pf.js"];
export const stylesheets = ["_app/immutable/assets/0.CqBtUnyZ.css"];
export const fonts = [];
