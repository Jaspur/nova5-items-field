import Field from './field.vue';

if (typeof window !== 'undefined' && window.Nova) {
  window.Nova.booting((Vue) => {
    Vue.component('nova5-items-field', Field);
  });
}
