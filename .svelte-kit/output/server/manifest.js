export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","locales/en/resource.json","locales/ja/resource.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CNha8fq_.js","app":"_app/immutable/entry/app.TlNF5-0_.js","imports":["_app/immutable/entry/start.CNha8fq_.js","_app/immutable/chunks/entry.D7e8SKdv.js","_app/immutable/chunks/runtime.BA54F5W-.js","_app/immutable/chunks/index.StKBPifa.js","_app/immutable/entry/app.TlNF5-0_.js","_app/immutable/chunks/preload-helper.CmsKOCeN.js","_app/immutable/chunks/runtime.BA54F5W-.js","_app/immutable/chunks/store.Xw69ZH3z.js","_app/immutable/chunks/disclose-version.BUSkuIA1.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
