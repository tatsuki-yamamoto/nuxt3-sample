<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue: string | number | null;
    type?: string;
    label?: string;
    placeholder?: string;
  }>(),
  {
    modelValue: '',
    type: 'text',
    label: '',
    placeholder: '',
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
    <label v-if="label" class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <input :type="type" :value="modelValue" :placeholder="placeholder" class="input input-bordered w-full max-w-xs" @input="updateValue" />
  </div>
</template>
