import { r as redirect } from './index2-DzcLzHBX.js';

async function load({ url }) {
  redirect(307, `/auth/login?invite&guild=${url.searchParams.get("guild") || ""}`);
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
const universal_id = "src/routes/(default)/invite/+page.js";
const imports = ["_app/immutable/nodes/13.CSRh-ZQx.js","_app/immutable/chunks/PD1Wq3xD.js","_app/immutable/chunks/CYgJF_JY.js"];
const stylesheets = [];
const fonts = [];

export { fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-DIsQUS10.js.map
