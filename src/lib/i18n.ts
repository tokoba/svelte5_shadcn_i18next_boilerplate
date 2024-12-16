import i18next from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
import HttpBackend from 'i18next-http-backend'
import { createI18nStore } from 'svelte-i18next'

/* https://github.com/NishuGoel/svelte-i18next svelte-wrapper */
/* reference : https://github.com/NishuGoel/svelte-i18next/blob/main/example/package.json
 * pnpm i svelte-i18next i18next
 * pnpm i i18next-browser-languagedetector
 * pnpm i i18next-http-backend
 * 
*/ 
/* https://www.i18next.com/overview/getting-started */
await i18next
.use(HttpBackend)
// .use(LanguageDetector)
.init({
    // lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
    // resources: {
    //     en: {
    //         translation: {
    //             hello: 'hello world',
    //         },
    //     },
    //     ja: {
    //         translation: {
    //             hello: 'こんにちは',
    //         },
    //     },
    // },
    interpolation: {
        escapeValue: false, // not needed for svelte as it escapes by default
    },
    compatibilityJSON: 'v4',
    debug: true,
    // cleanCode: true,
    backend: {
        loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    ns: "resource",
    detection: {
        order: ["querystring", "localStorage", "navigator"],
        caches: ["localStorage"],
        lookupQuerystring: "lng",
        lookupLocalStorage: "locale",
    },
})

export default () => createI18nStore(i18next)
