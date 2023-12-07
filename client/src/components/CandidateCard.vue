<template>
  <div class="bg-white rounded-lg h-full">
    <figure>
      <img :src="picUrl" :alt="candidate.name" class="" />
      <figcaption class="text-center p-2 flex flex-col gap-1">
        <p class="text-sm font-semibold">{{ name }}</p>
        <p class="text-xs text-gray-500">{{ party }}</p>
        <p class="text-xs text-gray-500">{{ dapil }}</p>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
})

const picUrl = computed(() => {
  // return `https://i.pravatar.cc/150?u=${props.candidate.email}`

  return "https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
})

const name = computed(() => {
  return props.candidate?.NAMA_LENGKAP
})

const party = computed(() => {
  return props.candidate?.PARTAI
})

const dapil = computed(() => {
  return props.candidate?.DAPIL
})
</script>

<style lang="scss" scoped></style>
