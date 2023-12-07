<template>
  <div class="bg-white rounded-lg h-full">  
    <figure>
      <img
        :src="picUrl"
        :alt="candidate.name"
        class=""
      />
      <figcaption class="text-center p-2">
        <div class="text-sm font-semibold">{{ name }}</div>
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
</script>

<style lang="scss" scoped></style>
