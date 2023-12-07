<template>
  <div class="flex flex-col gap-6 min-h-screen">
    <Hero />

    <div
      class="bg-[#272929] pt-6 pb-20 sticky bottom-0 flex flex-col gap-6 mt-auto rounded-t-2xl"
    >
      <div class="flex items-center justify-center">
        <button class="w-fit">
          <span class="w-12 h-2 rounded-full bg-[#3F4242] block"></span>
        </button>
      </div>
      <SearchBar @search="updateQuery"/>
      <CandidateSlider :candidates="candidates" />
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue"

import { getCandidates } from "../api"

const Hero = defineAsyncComponent(() => import("../components/Hero.vue"))

const SearchBar = defineAsyncComponent(() =>
  import("../components/filter/SearchBar.vue")
)

const CandidateSlider = defineAsyncComponent(() =>
  import("../components/candidate/CandidateSlider.vue")
)

const candidates = ref([])

onMounted(async () => {
  candidates.value = await getCandidates()
})

const updateQuery = async(query) => {
  candidates.value = await getCandidates(query)
}
</script>

<style lang="scss" scoped></style>
