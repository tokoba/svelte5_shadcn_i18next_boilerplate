import i18next from "i18next";
import { createI18nStore } from "svelte-i18next";

i18next.init({
    lng: "en",
    resources: {
        en: {
            translation: {
                key: "hello world",
            },
        },
        ja: {
            translation: {
                key: "こんにちは",
            },
        },
    },
    interpolation: {
        escapeValue: false, // not needed for svelte as it escapes by default
    },
});

export default () => createI18nStore(i18next);
