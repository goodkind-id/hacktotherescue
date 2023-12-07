<template>
  <div>
    <Swiper
      :modules="[Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow]"
      :slides-per-view="2.6"
      :space-between="8"
      :slides-offset-before="16"
      :slides-offset-after="16"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
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

import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCoverflow,
} from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-fade"
import "swiper/css/effect-coverflow"

import { defineAsyncComponent } from "vue"

const CandidateCard = defineAsyncComponent(() => import("./CandidateCard.vue"))

const props = defineProps({
  candidates: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
}
</style>
