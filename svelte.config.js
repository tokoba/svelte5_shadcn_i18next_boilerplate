import { mdsvex } from 'mdsvex'
/* for SSR(Server Side Rendering), SPA(Single Page Application) use adapter-auto */
// import adapter from '@sveltejs/adapter-auto';
/* for SSG(Static Site Generation) use adapter-auto */
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://svelte.dev/docs/kit/integrations
    // for more information about preprocessors
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extension: '.svx',
        }),
    ],

    kit: {
        // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
        // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
        // See https://svelte.dev/docs/kit/adapters for more information about adapters.
        /* for SSG(Static Site Generation) set as folows
         */
        adapter: adapter({
            /* SSG */
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: undefined,
            precompress: false,
            strict: true,
        }),
        /* for SSR(Server Side Rendering), SPA(Single Page Application) set as follows
         */
        // adapter: adapter(), /* SSR, SPA */
        outDir: 'dist',
    },
    '@/*': './path/to/lib/*',

    extensions: ['.svelte', '.svx'],
}

export default config
