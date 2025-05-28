<template>
  <div class="p-4 border border-green-600">
    <h1 class="text-green-800 font-bold text-xl">✅ COMPONENT IS ACTIEF</h1>
    <p>props: {{ field }}</p>
  </div>
</template>

<script>
export default {
  name: 'nova5-items-field',
  props: ['field'],
  mounted() {
    alert('Field prop inhoud:\n' + JSON.stringify(this.field, null, 2));
  }
}
</script>
