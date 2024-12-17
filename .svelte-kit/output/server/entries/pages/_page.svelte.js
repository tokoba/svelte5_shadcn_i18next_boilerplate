import { a4 as getContext, ab as escape_html, a9 as store_get, aa as unsubscribe_stores, S as pop, Q as push } from "../../chunks/index.js";
import "i18next";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const i18nContext = getContext("i18n");
  $$payload.out += `<h1>This is an example of Svelte5, SvelteKit2, Shadcn-Svelte, Svelte-i18Next.</h1> <h2>Customize the configurations as you need.</h2> <div class="greeting-various-languages text-5xl text-center">${escape_html(store_get($$store_subs ??= {}, "$i18nContext", i18nContext).t("Hello"))}
    ${escape_html(store_get($$store_subs ??= {}, "$i18nContext", i18nContext).t("World"))}</div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
