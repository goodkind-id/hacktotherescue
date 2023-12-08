<script setup>
import { RouterView } from "vue-router"
</script>

<template>
  <div class="mx-auto max-w-md bg-[#191A1A] min-h-screen">
    <transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
