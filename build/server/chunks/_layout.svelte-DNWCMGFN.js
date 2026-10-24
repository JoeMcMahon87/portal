import { h as head, b as attr } from './index-DE0-gV0a.js';
import './escaping-CqgfEcN3.js';

function _layout($$payload, $$props) {
  let { data, children } = $$props;
  const { guild } = data;
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="icon"${attr("href", `${guild.logo}`)}>`;
  });
  $$payload.out += `<div>`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-DNWCMGFN.js.map
