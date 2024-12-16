import { Q as setContext, S as bind_props, R as pop, P as push } from "../../chunks/index.js";
import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import { w as writable } from "../../chunks/index2.js";
const isLoading = writable(true);
class I18NextTranslationStore {
  constructor(i18n) {
    this.i18n = this.createInstance(i18n);
    this.isLoading = this.createLoadingInstance(i18n);
  }
  createInstance(i18n) {
    const i18nWritable = writable(i18n);
    i18n.on("initialized", () => {
      i18nWritable.set(i18n);
    });
    i18n.on("loaded", () => {
      i18nWritable.set(i18n);
    });
    i18n.on("added", () => i18nWritable.set(i18n));
    i18n.on("languageChanged", () => {
      i18nWritable.set(i18n);
    });
    return i18nWritable;
  }
  createLoadingInstance(i18n) {
    i18n.on("loaded", (resources) => {
      Object.keys(resources).length !== 0 && isLoading.set(false);
    });
    i18n.on("failedLoading", () => {
      isLoading.set(true);
    });
    return isLoading;
  }
}
const createI18nStore = (i18n) => {
  const i18nStore = new I18NextTranslationStore(i18n);
  return i18nStore.i18n;
};
await i18next.use(HttpBackend).init({
  // lng: 'en',
  fallbackLng: "en",
  supportedLngs: ["en", "ja"],
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
    escapeValue: false
    // not needed for svelte as it escapes by default
  },
  compatibilityJSON: "v4",
  debug: true,
  // cleanCode: true,
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json"
  },
  ns: "resource",
  detection: {
    order: ["querystring", "localStorage", "navigator"],
    caches: ["localStorage"],
    lookupQuerystring: "lng",
    lookupLocalStorage: "locale"
  }
});
const getI18nStore = () => createI18nStore(i18next);
function _layout($$payload, $$props) {
  push();
  setContext("i18n", getI18nStore());
  const i18nContext = getI18nStore();
  let { children } = $$props;
  children($$payload);
  $$payload.out += `<!---->`;
  bind_props($$props, { i18nContext });
  pop();
}
export {
  _layout as default
};
