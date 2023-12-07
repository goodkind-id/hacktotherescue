<template>
  <div>
    <SearchBar />
    <CandidateSlider />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const SearchBar = defineAsyncComponent(() =>
  import("../components/SearchBar.vue")
)

const CandidateSlider = defineAsyncComponent(() =>
  import("../components/CandidateSlider.vue")
)
</script>

<style lang="scss" scoped></style>
