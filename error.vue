<script setup lang="ts">
useHead({
  title: 'ページが表示できませんでした',
});
const error = useError();
const router = useRouter();
const backPage = () => {
  router.go(-1);
};
</script>

<template>
  <parts-container class="text-center">
    <h1 class="text-3xl font-bold inline">ページが表示できませんでした</h1>
    <p class="mt-6">時間をおいて再訪問をお願いします。</p>
    <div class="card bg-neutral mt-9 mb-12 p-4">
      <div class="grid grid-cols-2 mb-6 gap-4">
        <p class="font-bold text-right">ステータスコード</p>
        <p class="text-left">{{ error.statusCode }}</p>
      </div>
      <div class="grid grid-cols-2 mb-6 gap-4">
        <p class="font-bold text-right">メッセージ</p>
        <p class="text-left">{{ error.message }}</p>
      </div>
    </div>
    <button class="btn" @click="backPage()">前のページへ戻る</button>
  </parts-container>
</template>
