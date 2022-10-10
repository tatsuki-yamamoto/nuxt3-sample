<script lang="ts" setup>
import { Todo } from '~~/types/todo';

const todoList = ref<Todo[]>([]);
const fetchTodoList = async () => {
  const response = await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query {
                    findAll{
                      id
                      title
                      description
                      status
                      createdAt
                      updatedAt
                    }
                  }`,
    }),
  });
  const { data } = await response.json();
  todoList.value = data.findAll;
};

fetchTodoList();
</script>

<template>
  <parts-container>
    <templates-todo-form @refresh="fetchTodoList()"></templates-todo-form>
    <div class="divider"></div>
    <templates-todo-list :todoList="todoList"></templates-todo-list>
  </parts-container>
</template>
