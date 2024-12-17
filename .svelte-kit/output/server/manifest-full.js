export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","i18next-icon.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.DynXzpH6.js","app":"_app/immutable/entry/app.B9PG5J-S.js","imports":["_app/immutable/entry/start.DynXzpH6.js","_app/immutable/chunks/entry.DdwXr6ti.js","_app/immutable/chunks/utils.BrqfkG10.js","_app/immutable/chunks/index.CQnD_dY2.js","_app/immutable/entry/app.B9PG5J-S.js","_app/immutable/chunks/utils.BrqfkG10.js","_app/immutable/chunks/disclose-version.D70go_Zm.js","_app/immutable/chunks/index-client.BVsko_3F.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
