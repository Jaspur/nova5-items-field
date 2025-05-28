<template>
  <div>
    <div class="space-y-2">
      <div
        v-for="(item, index) in value"
        :key="index"
        class="flex items-center space-x-2"
      >
        <input
          v-model="value[index]"
          type="text"
          class="w-full form-input form-input-bordered"
        />
        <button
          type="button"
          @click="remove(index)"
          class="text-red-500 hover:text-red-700"
        >
          ×
        </button>
      </div>
    </div>

    <input
      v-model="newItem"
      @keydown.enter.prevent="add"
      @paste="handlePaste"
      type="text"
      class="mt-2 w-full form-input form-input-bordered"
      :placeholder="meta.placeholder || 'Add item'"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useField } from '@nova';

const props = defineProps({
  field: Object,
  resourceId: String,
  resourceName: String,
  resource: Object,
});

const { value, meta, update } = useField(props.field);

const newItem = ref('');

const add = () => {
  if (!newItem.value.trim()) return;
  value.value.push(newItem.value.trim());
  newItem.value = '';
  update();
};

const remove = (index) => {
  value.value.splice(index, 1);
  update();
};

const handlePaste = (event) => {
  const paste = event.clipboardData.getData('text');
  if (!meta.split) return;
  const items = paste.split(meta.split).map(s => s.trim()).filter(Boolean);
  value.value.push(...items);
  newItem.value = '';
  update();
};
</script>

<style scoped>
input.form-input {
  @apply rounded border border-gray-300 px-3 py-2;
}
</style>
