import { createElementBlock as d, openBlock as l, createElementVNode as r, toDisplayString as s } from "vue";
const a = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, i] of o)
    n[t] = i;
  return n;
}, f = {
  name: "nova5-items-field",
  props: ["field"],
  mounted() {
    alert(`Field prop inhoud:
` + JSON.stringify(this.field, null, 2));
  }
}, c = { class: "p-4 border border-green-600" };
function p(e, o, n, t, i, u) {
  return l(), d("div", c, [
    o[0] || (o[0] = r("h1", { class: "text-green-800 font-bold text-xl" }, "✅ COMPONENT IS ACTIEF", -1)),
    r("p", null, "props: " + s(n.field), 1)
  ]);
}
const m = /* @__PURE__ */ a(f, [["render", p]]);
typeof window < "u" && window.Nova ? (alert("📦 Registering nova5-items-field"), window.Nova.booting((e) => {
  e.component("nova5-items-field", m);
})) : alert("❌ Nova not found on window");
