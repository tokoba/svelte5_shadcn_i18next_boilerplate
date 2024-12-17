/* Edit your language resource files
 * path: /src/locales/{languages}/resource.json
 * key: en, ja, fr, de, etc... customize them
 */

import i18next from 'i18next'
import { createI18nStore } from 'svelte-i18next'
/* resource definition */
import enResource from '../locales/en/resource.json'
import jaResource from '../locales/ja/resource.json'
import frResource from '../locales/fr/resource.json'
import deResource from '../locales/de/resource.json'
import itResource from '../locales/it/resource.json'
import esResource from '../locales/es/resource.json'
import zhCNResource from '../locales/zhCN/resource.json'
import zhTWResource from '../locales/zhTW/resource.json'

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
    zhCN: {
        resource: zhCNResource,
    },
    zhTW: {
        resource: zhTWResource,
    },
}

interface Language {
    value: string
    label: string
}

/* language label shown on Navigation bar Language Selector menu */
const languages: Language[] = [
    { value: 'en', label: 'English' },
    { value: 'ja', label: '日本語' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'Deutsch' },
    { value: 'it', label: 'Italiano' },
    { value: 'es', label: 'Español' },
    { value: 'zhCN', label: '简体中文' },
    { value: 'zhTW', label: '繁体中文' },
]

/* svelte-wrapper of i18next
 * https://github.com/NishuGoel/svelte-i18next
 * example of svelte project using i18next
 * https://github.com/NishuGoel/svelte-i18next/blob/main/example/package.json
 * the official i18next site
 * https://www.i18next.com/overview/getting-started */
await i18next.init({
    // lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ja', 'fr', 'de', 'it', 'es', 'zh-CN', 'zh-TW'],
    compatibilityJSON: 'v4',
    debug: true,
    ns: 'resource',
    resources: resources,
    cleanCode: true,
})

export { languages }
export default () => createI18nStore(i18next)
