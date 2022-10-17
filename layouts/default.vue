<template>
  <div>
    <templates-header></templates-header>
    <main>
      <slot />
    </main>
    <templates-footer></templates-footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
