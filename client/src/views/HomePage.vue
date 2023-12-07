<template>
  <div class="flex flex-col gap-6 py-4">
    <h1 class="text-3xl text-center font-bold">
      GoodTalk & Action!
    </h1>

    <SearchBar />
    <CandidateSlider />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue"

const SearchBar = defineAsyncComponent(() =>
  import("../components/filter/SearchBar.vue")
)

const CandidateSlider = defineAsyncComponent(() =>
  import("../components/candidate/CandidateSlider.vue")
)
</script>

<style lang="scss" scoped></style>
