<template>
  <router-link
    :to="`/candidate/${slug}`"
    class="rounded-lg h-full overflow-hidden relative block"
  >
    <figure class="flex flex-col h-full">
      <img
        :src="picUrl"
        :alt="name"
        loading="lazy"
        class="aspect-square object-cover w-full bg-gray-900 grow-0 rounded-lg"
      />

      <figcaption class="p-2.5 flex flex-col gap-2 h-full">
        <h5 class="text-sm font-extrabold line-clamp-1 break-all text-white">
          {{ name }}
        </h5>
        <div class="flex flex-col gap-3 mt-auto">
          <div class="flex items-center gap-1 text-gray-300">
            <img :src="party?.logoUrl" :alt="party" class="w-4 h-4 rounded" />
            <p class="text-xs line-clamp-1 break-all">
              {{ party.code }}
            </p>
          </div>
          <p
            class="text-xs w-full text-center bg-[#353838] text-white py-1 px-2 rounded"
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

  return "https://thispersondoesnotexist.com?cachebust=" + Math.random()
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

const slug = computed(() => {
  return props.candidate?.NAMA_LENGKAP?.toLowerCase().replace(/\s/g, "-")
})
</script>

<style lang="scss" scoped></style>
