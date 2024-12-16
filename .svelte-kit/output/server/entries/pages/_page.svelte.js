import { V as getContext, W as store_get, X as unsubscribe_stores, R as pop, P as push } from "../../chunks/index.js";
import "i18next";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const i18nContext = getContext("i18n");
  console.log(store_get($$store_subs ??= {}, "$i18nContext", i18nContext).language);
  $$payload.out += `<div>${escape_html(store_get($$store_subs ??= {}, "$i18nContext", i18nContext).t("Hello"))}
    ${escape_html(store_get($$store_subs ??= {}, "$i18nContext", i18nContext).t("World"))}</div> <button>Change Language</button>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
