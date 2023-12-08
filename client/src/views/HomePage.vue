<template>
  <div class="flex flex-col gap-6 min-h-screen">
    <Hero />

    <div
      class="bg-[#272929] pt-6 pb-20 sticky bottom-0 flex flex-col gap-6 mt-auto rounded-t-2xl min-h-[520px]"
    >
      <div class="flex items-center justify-center">
        <button class="w-fit">
          <span class="w-12 h-2 rounded-full bg-[#3F4242] block"></span>
        </button>
      </div>
      <SearchBar @search="updateQuery" />
      <template v-if="isLoading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="animate-spin h-10 w-10 text-white mx-auto"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </template>
      <template v-else-if="candidates?.length">
        <div class="flex flex-col gap-4">
          <p
            class="text-gray-300 font-medium mx-4 text-xl font-inter"
            v-if="route?.query?.q"
          >
            {{ total }} Caleg Bicara
            <span class="font-extrabold">"{{ route?.query?.q }}"</span>
          </p>
          <CandidateSlider :candidates="candidates" />
        </div>
      </template>
      <template v-else-if="!candidates?.length && !isLoading && route?.query?.q">
        <StatusMessage
          title="Penelusuran tidak ditemukan"
          message="Coba kata kunci lain"
          icon="list"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue"

import { getCandidates } from "../api"
import { useRoute, useRouter } from "vue-router"

const Hero = defineAsyncComponent(() => import("../components/Hero.vue"))

const StatusMessage = defineAsyncComponent(() =>
  import("../components/StatusMessage.vue")
)

const SearchBar = defineAsyncComponent(() =>
  import("../components/filter/SearchBar.vue")
)

const CandidateSlider = defineAsyncComponent(() =>
  import("../components/candidate/CandidateSlider.vue")
)

const isLoading = ref(true)
const candidates = ref([])
const total = ref(0)

const route = useRoute()

onMounted(() => {
  updateQuery(route.query.q || "")
})

const updateQuery = async (query) => {
  isLoading.value = true
  const data = await getCandidates(query)

  candidates.value = data?.result
  total.value = data?.total

  isLoading.value = false
}
</script>

<style lang="scss" scoped></style>
