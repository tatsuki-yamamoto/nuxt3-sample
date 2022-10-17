<script lang="ts" setup>
import { Maybe, Todo } from '~~/api/generated/types';
import { statusSelectItems } from '~~/types/todo';

const props = withDefaults(
  defineProps<{
    todo: Maybe<Todo>;
    index: number;
  }>(),
  {},
);

const todoStatus = computed({
  get: () => props.todo?.status,
  set: (value) => {
    // TODO
  },
});
</script>

<template>
  <tr>
    <th>{{ index + 1 }}</th>
    <td>{{ todo?.title }}</td>
    <td>{{ todo?.description }}</td>
    <td>
      <select v-model="todoStatus" class="select select-bordered select-sm">
        <option v-for="item in statusSelectItems" :key="item.value">{{ item.name }}</option>
      </select>
    </td>
  </tr>
</template>
