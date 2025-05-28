import Field from "./field.vue";

if (typeof window !== "undefined" && window.Nova) {
  alert("📦 Registering nova5-items-field");
  window.Nova.booting((Vue) => {
    Vue.component("nova5-items-field", Field);
  });
} else {
  alert("❌ Nova not found on window");
}
