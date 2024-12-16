import i18next from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// import HttpBackend from 'i18next-http-backend'
// import resourcesToBackend from 'i18next-resources-to-backend';
import { createI18nStore } from 'svelte-i18next'
// 言語ファイルをインポートします。
import enResource from '../locales/en/resource.json';
import jaResource from '../locales/ja/resource.json';

const resources = {
    en: {
        resource: enResource,
    },
    ja: {
        resource: jaResource,
    },
};
console.log(resources)

/* https://github.com/NishuGoel/svelte-i18next svelte-wrapper */
/* reference : https://github.com/NishuGoel/svelte-i18next/blob/main/example/package.json
 * pnpm i svelte-i18next i18next
 * pnpm i i18next-browser-languagedetector
 * pnpm i i18next-http-backend
 * 
*/ 
/* https://www.i18next.com/overview/getting-started */
await i18next
// .use(customBackend)
// .on('failedLoading', (lng, ns, msg) => console.error(msg))
// .use(resourcesToBackend((language: string, namespace: string) => import(`/locales/${language}/${namespace}.json`)))
// .on('failedLoading', (lng, ns, msg) => console.error(msg))
// .use(HttpBackend)
// .use(LanguageDetector)
.init({
    // lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja'],
    compatibilityJSON: 'v4',
    debug: true,
    ns: "resource",
    resources: resources,
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
    // interpolation: {
    //     escapeValue: false, // not needed for svelte as it escapes by default
    // },
    // cleanCode: true,
    // backend: {
    //     loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },
    // detection: {
    //     order: ["querystring", "localStorage", "navigator"],
    //     caches: ["localStorage"],
    //     lookupQuerystring: "lng",
    //     lookupLocalStorage: "locale",
    // },
})

export default () => createI18nStore(i18next)
