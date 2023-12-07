<template>
  <div>
    <h1 class="m-8 text-3xl text-center font-bold">
      GoodTalk & Action!
    </h1>
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
