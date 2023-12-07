<template>
  <div class="grid grid-cols-2">
    <div class="bg-yellow-100 p-4">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500 hover:text-gray-700 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </router-link>
    </div>

    <div class="flex justify-end p-4">
      <button class="rounded text-xs font-semibold">Bagikan</button>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <div>
      <div class="flex flex-col gap-4 bg-yellow-100 p-4">
        <figure>
          <img
            :src="picUrl"
            :alt="name"
            class="aspect-square object-cover w-full bg-gray-100 grow-0 rounded-lg"
          />
        </figure>

        <h1 class="text-lg text-orange-700 font-bold text-center">
          {{ name }}
        </h1>
      </div>
    </div>

    <div class="p-4">
      <div class="">
        <ul class="flex flex-col gap-4">
          <li>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">Partai</p>
              <p class="text-sm font-semibold">{{ candidate?.PARTAI }}</p>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">Dapil</p>
              <p class="text-sm font-semibold">{{ candidate?.DAPIL }}</p>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">Jenis Kelamin</p>
              <p class="text-sm font-semibold">
                {{ candidate?.JENIS_KELAMIN }}
              </p>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">Tempat Lahir</p>
              <p class="text-sm font-semibold">{{ candidate?.TEMPAT_LAHIR }}</p>
            </div>
          </li>
          <li>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">Tanggal Lahir</p>
              <p class="text-sm font-semibold">
                {{ candidate?.TANGGAL_LAHIR }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"
import { candidates } from "../data"
import { useRoute } from "vue-router"

const route = useRoute()

const candidate = computed(() => {
  return candidates.find((candidate) => {
    return candidate?.NAMA_LENGKAP?.toLowerCase().replace(/\s/g, "-") === route.params.name
  })
})

const picUrl = computed(() => {
  // return `https://i.pravatar.cc/150?u=${props.candidate.email}`

  // return 'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png'

  return "https://thispersondoesnotexist.com?cachebust=" + Math.random()
})

const name = computed(() => {
  return candidate.value?.NAMA_LENGKAP
})
</script>

<style lang="scss" scoped></style>
