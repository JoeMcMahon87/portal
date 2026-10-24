import { e as escape_html } from './escaping-CqgfEcN3.js';
import { p as push, g as getContext, a as pop } from './index-DE0-gV0a.js';
import { s as stores } from './client-DzNq35tu.js';
import './exports-Ds8M2f_0.js';

({
  check: stores.updated.check
});
function context() {
  return getContext("__request__");
}
const page$1 = {
  get error() {
    return context().page.error;
  },
  get status() {
    return context().page.status;
  }
};
const page = page$1;
function Error$1($$payload, $$props) {
  push();
  $$payload.out += `<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`;
  pop();
}

export { Error$1 as default };
//# sourceMappingURL=error.svelte-BH3KtK7z.js.map
