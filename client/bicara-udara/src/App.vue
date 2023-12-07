<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
</template>

<style scoped></style>
