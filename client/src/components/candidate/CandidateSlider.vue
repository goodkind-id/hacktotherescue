<template>
  <div>
    <Swiper
      :modules="[Pagination, Navigation, Autoplay, EffectFade, EffectCoverflow]"
      :slides-per-view="2.4"
      :space-between="16"
      :slides-offset-before="16"
      :slides-offset-after="16"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="isAutoPlay"
      :loop="isAutoPlay"
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

import { computed, defineAsyncComponent } from "vue"
import { useRoute } from "vue-router"

const CandidateCard = defineAsyncComponent(() => import("./CandidateCard.vue"))

const props = defineProps({
  candidates: {
    type: Array,
    required: true,
  },
})

const route = useRoute()

const isAutoPlay = computed(() => {
  return route.query.q ? false : true
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  height: auto;
}
</style>
