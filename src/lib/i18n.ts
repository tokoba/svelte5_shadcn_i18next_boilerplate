import i18next from 'i18next'
import { createI18nStore } from 'svelte-i18next'
import enResource from '../locales/en/resource.json';
import jaResource from '../locales/ja/resource.json';
import frResource from '../locales/fr/resource.json';
import deResource from '../locales/de/resource.json';
import itResource from '../locales/it/resource.json';
import esResource from '../locales/es/resource.json';
import zhResource from '../locales/zh/resource.json';

const resources = {
    en: {
        resource: enResource,
    },
    ja: {
        resource: jaResource,
    },
    fr: {
        resource: frResource,
    },
    de: {
        resource: deResource,
    },
    it: {
        resource: itResource,
    },
    es: {
        resource: esResource,
    },
    zh: {
        resource: zhResource,
    },
};
console.log(resources)

/* svelte-wrapper of i18next
 * https://github.com/NishuGoel/svelte-i18next 
 * example of svelte project using i18next
 * https://github.com/NishuGoel/svelte-i18next/blob/main/example/package.json
 * the official i18next site
 * https://www.i18next.com/overview/getting-started */
await i18next
.init({
    // lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja', 'fr', 'de', 'it', 'es', 'zh'],
    compatibilityJSON: 'v4',
    debug: true,
    ns: "resource",
    resources: resources,
    cleanCode: true,
})

export default () => createI18nStore(i18next)
