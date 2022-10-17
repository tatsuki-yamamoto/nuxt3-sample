<script lang="ts" setup>
import { SelectItem } from '~~/types/select-item';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    label?: string;
    items?: SelectItem[];
  }>(),
  {
    modelValue: '',
    label: '',
  },
);

const emit = defineEmits(['update:modelValue']);
const updateValue = (event: Event) => {
  if (!(event.target instanceof HTMLInputElement)) return;
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="form-control w-full max-w-xs mb-2">
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <select class="select select-bordered">
      <option v-for="item in items" :key="item.value" :selected="item.value === modelValue" @change="updateValue">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
