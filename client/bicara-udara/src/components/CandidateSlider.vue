<template>
  <div>
    <Swiper
      :slides-per-view="3"
      :space-between="8"
      :slides-offset-before="8"
      :slides-offset-after="8"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 100 }"
      :loop="true"
    >
      <SwiperSlide v-for="item in candidates" :key="item.NAMA_LENGKAP">
        <CandidateCard :candidate="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

import { defineAsyncComponent } from "vue"

const CandidateCard = defineAsyncComponent(() => import("./CandidateCard.vue"))

import { candidates } from "../data"
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
}
</style>
