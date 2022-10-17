<script lang="ts" setup>
import { useMutation } from '@vue/apollo-composable';
import { logErrorMessages } from '@vue/apollo-util';
import { CreateTodoDocument, CreateTodoDto } from '~~/api/generated/types';
import { defaultCreateTodoDto } from '~~/types/dto/create-todo';
import { statusSelectItems } from '~~/types/todo';

const createTodoForm: CreateTodoDto = reactive(defaultCreateTodoDto());

const emit = defineEmits(['refetch']);
const {
  mutate: mutateCreateTodo,
  loading,
  onDone,
} = useMutation(CreateTodoDocument, {
  variables: {
    todo: createTodoForm,
  },
});
onDone((result) => {
  // 一覧再取得
  emit('refetch');
  // 初期化
  Object.assign(createTodoForm, defaultCreateTodoDto());

  alert('登録しました');
});
const createTodo = async () => {
  try {
    await mutateCreateTodo();
  } catch (error) {
    console.error(error);
  }
};
</script>

<template>
  <parts-layouts-container>
    <form ref="form">
      <div class="mb-6">
        <parts-forms-input-text v-model="createTodoForm.title" label="Title"></parts-forms-input-text>
        <parts-forms-input-text v-model="createTodoForm.description" label="Description"></parts-forms-input-text>
        <!-- <parts-forms-select v-model="createTodoForm.status" label="Status" :items="statusSelectItems"></parts-forms-select> -->
      </div>
      <div class="w-full max-w-xs">
        <button type="button" class="btn btn-primary btn-block" :class="{ loading: loading }" :disabled="loading" @click="createTodo()">SUBMIT</button>
      </div>
    </form>
  </parts-layouts-container>
</template>
