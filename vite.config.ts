import { defineConfig } from 'vitest/config'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
    build: {
        /* to use top-level await in $lib/i18n.ts, we need to set ES2022 as build target.
         * Classy javascript including ES2015 etc does not support top level await.
         */
        target: 'es2022',
    },
    plugins: [sveltekit()],

    test: {
        include: ['src/**/*.{test,spec}.{js,ts}'],
    },
})
