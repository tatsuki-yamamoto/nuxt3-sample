<script lang="ts" setup>
const toTopPage = (event: MouseEvent) => {
  const router = useRouter();
  router.push('/');
  return event;
};
</script>

<template>
  <header
    class="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 bg-base-100 text-base-content shadow-sm"
  >
    <div class="navbar">
      <span class="btn btn-ghost normal-case text-xl" @click="toTopPage">Nuxt Sample</span>
    </div>
  </header>
</template>
