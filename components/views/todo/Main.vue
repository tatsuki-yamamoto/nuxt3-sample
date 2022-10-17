<script lang="ts" setup>
import { useQuery } from '@vue/apollo-composable';
import { logErrorMessages } from '@vue/apollo-util';
import { FindTodosDocument } from '~~/api/generated/types';

const { result, refetch, loading } = useQuery(FindTodosDocument);
const todoList = computed(() => result.value?.findTodos || []);
</script>

<template>
  <parts-layouts-container>
    <templates-todo-form @refetch="refetch()"></templates-todo-form>
    <div class="divider"></div>
    <templates-todo-list :todoList="todoList" :loading="loading"></templates-todo-list>
  </parts-layouts-container>
</template>
