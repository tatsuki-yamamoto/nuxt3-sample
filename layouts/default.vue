<template>
  <div>
    <the-header></the-header>
    <main>
      <slot />
    </main>
    <the-footer></the-footer>
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
