<script lang="ts" setup>
import { Maybe, Todo } from '~~/api/generated/types';
import { statusSelectItems } from '~~/types/todo';

const props = withDefaults(
  defineProps<{
    todoList?: Maybe<Todo>[];
    loading?: boolean;
  }>(),
  {
    loading: false,
  },
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
        <templates-todo-list-row v-for="(todo, index) in todoList" :key="index" :todo="todo" :index="index"></templates-todo-list-row>
      </tbody>
    </table>
  </div>
</template>
