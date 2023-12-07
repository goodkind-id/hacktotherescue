<template>
  <div>

    <CandidateSlider />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const CandidateSlider = defineAsyncComponent(() =>
  import("../components/CandidateSlider.vue")
)
</script>

<style lang="scss" scoped></style>
