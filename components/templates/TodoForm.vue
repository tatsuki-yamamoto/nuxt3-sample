<script lang="ts" setup>
import { CreateTodoDto, defaultCreateTodoDto } from '~~/types/dto/create-todo';
import { statusSelectItems } from '~~/types/todo';

const createTodoForm: CreateTodoDto = reactive(defaultCreateTodoDto());

const loading = ref(false);
const emit = defineEmits(['refresh']);
const createTodo = async () => {
  loading.value = true;
  // 登録
  await fetch('http://localhost:3000/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `mutation {
                create(
                  todo : {
                    title: "${createTodoForm.title}"
                    description: "${createTodoForm.description}"
                  }
                ){
                  id
                  title
                  description
                  status
                  createdAt
                  updatedAt
                }
              }`,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        alert('登録が失敗しました');
        return;
      }
      alert('登録しました');
      // 一覧再取得
      emit('refresh');
      // 初期化
      Object.assign(createTodoForm, defaultCreateTodoDto());
    })
    .catch((error) => {
      console.error('通信に失敗しました', error);
    });
  loading.value = false;
};
</script>

<template>
  <parts-container>
    <form ref="form">
      <div class="mb-6">
        <parts-forms-input-text v-model="createTodoForm.title" label="Title"></parts-forms-input-text>
        <parts-forms-input-text v-model="createTodoForm.description" label="Description"></parts-forms-input-text>
        <parts-forms-select v-model="createTodoForm.status" label="Status" :items="statusSelectItems"></parts-forms-select>
      </div>
      <div class="w-full max-w-xs">
        <button class="btn btn-primary btn-block" :class="{ loading: loading }" :disabled="loading" @click="createTodo()">SUBMIT</button>
      </div>
    </form>
  </parts-container>
</template>
