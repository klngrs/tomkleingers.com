<template>

<div class="layout-default">
  <div class="nav-full w-full lg:fixed lg:top-0 lg:left-0 lg:w-screen">
    <NavigationFull />
  </div>

  <main class="page-container mt-9">
    <slot />
  </main>
</div>

<!--    <AppFooter />-->
</template>

<script setup lang="ts">
import NavigationFull from '@/components/nav/NavigationFull.vue';
</script>
