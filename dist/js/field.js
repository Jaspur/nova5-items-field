
window.Nova.booting((Vue) => {
  alert('✅ nova5-items-field registered!');
  Vue.component('nova5-items-field', {
    props: ['field'],
    template: `<div class='p-4 border border-green-600'>
                 <h1 class='text-green-800 font-bold text-xl'>✅ COMPONENT IS ACTIEF</h1>
                 <p>{{ field }}</p>
               </div>`,
    mounted() {
      alert('Props ontvangen: ' + JSON.stringify(this.field));
    }
  });
});
