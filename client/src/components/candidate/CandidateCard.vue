<template>
  <router-link
    to="/"
    class="bg-white rounded-lg h-full overflow-hidden relative block"
  >
    <figure class="flex flex-col h-full">
      <img
        :src="picUrl"
        :alt="candidate.name"
        class="aspect-square object-cover w-full bg-gray-100 grow-0 rounded-lg"
      />

      <figcaption class="text-center p-2.5 flex flex-col gap-2 h-full">
        <h5 class="text-sm font-semibold line-clamp-2">{{ name }}</h5>
        <div class="flex flex-col gap-3 mt-auto">
          <div class="flex items-center gap-1 justify-center">
            <img :src="party?.logoUrl" :alt="party" class="w-4 h-4" />
            <p class="text-xs text-gray-500 line-clamp-1 break-all">
              {{ party.name }}
            </p>
          </div>
          <p
            class="text-xs w-fit mx-auto bg-yellow-400 text-black py-1 px-2 rounded"
          >
            {{ dapil }}
          </p>
        </div>
      </figcaption>
    </figure>
  </router-link>
</template>

<script setup>
import { computed } from "vue"

import { parties } from "../../data"

const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
})

const picUrl = computed(() => {
  // return `https://i.pravatar.cc/150?u=${props.candidate.email}`

  // return 'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png'

  return "https://thispersondoesnotexist.com"
})

const name = computed(() => {
  return props.candidate?.NAMA_LENGKAP
})

const party = computed(() => {
  const party = parties.find((party) => {
    return party?.name === props.candidate?.PARTAI
  })

  return party
})

const dapil = computed(() => {
  return props.candidate?.DAPIL
})
</script>

<style lang="scss" scoped></style>
