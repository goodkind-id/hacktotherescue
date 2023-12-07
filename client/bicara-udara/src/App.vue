<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <div class="mx-auto max-w-md bg-gray-50 min-h-screen">
    <router-view v-slot="{ Component }">
      <component :is="Component"></component>
    </router-view>
  </div>
</template>

<style scoped></style>
