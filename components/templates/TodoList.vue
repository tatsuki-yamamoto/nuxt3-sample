<script lang="ts" setup>
import { Todo, statusSelectItems } from '~~/types/todo';

const props = withDefaults(
  defineProps<{
    todoList: Todo[];
  }>(),
  {},
);
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in todoList" :key="index">
          <th>{{ index + 1 }}</th>
          <td>{{ todo.title }}</td>
          <td>{{ todo.description }}</td>
          <td>
            <select v-model="todo.status" class="select select-bordered select-sm">
              <option v-for="item in statusSelectItems" :key="item.value">{{ item.name }}</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
