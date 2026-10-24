import { p as push, s as setContext, b as attr, c as clsx, a as pop } from './index-DE0-gV0a.js';
import './index-CZvAxaSW.js';
import './index-B7gr3AnY.js';
import './escaping-CqgfEcN3.js';
import './_commonjsHelpers-BFTU3MAI.js';

function _layout($$payload, $$props) {
  push();
  let { data, children } = $$props;
  const { client, user, theme, locale } = data;
  setContext("client", client);
  setContext("user", user);
  setContext("theme", theme);
  setContext("locale", locale);
  $$payload.out += `<div${attr("class", clsx(theme))}>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BDQVi8WQ.js.map
