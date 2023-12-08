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
        @error="
          (e) =>
            (e.target.src =
              'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png')
        "
      />

      <figcaption class="p-2.5 flex flex-col gap-2 h-full">
        <h5
          class="text-sm font-extrabold line-clamp-1 break-all text-white font-montserrat"
        >
          {{ name }}
        </h5>
        <div class="flex flex-col gap-3 mt-auto">
          <div class="flex items-center gap-1 text-gray-300" v-if="party">
            <img :src="party?.logoUrl" :alt="party" class="w-4 h-4 rounded" />
            <p class="text-xs line-clamp-1 break-all font-inter font-medium">
              {{ party.code }}
            </p>
          </div>
          <div
            class="flex items-center gap-1 text-gray-300"
            v-if="candidate?.title"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.6223 13.59C11.5996 13.7937 11.5027 13.9822 11.35 14.1197C11.1973 14.2572 10.9993 14.3342 10.7934 14.3362H5.90644C5.7013 14.334 5.50412 14.2568 5.35249 14.1192C5.20086 13.9816 5.10536 13.7932 5.08421 13.59L4.35481 7.11842V7.05897H3.30713L4.04979 13.6626C4.09872 14.1198 4.31514 14.5429 4.65767 14.8512C5.0002 15.1594 5.4448 15.331 5.90644 15.3333H10.7934C11.2555 15.3325 11.7009 15.1614 12.0437 14.8529C12.3865 14.5443 12.6025 14.1203 12.6501 13.6626L13.3861 7.11842V7.04579H12.3517L11.6223 13.59Z"
                  fill="currentColor"
                />
                <path
                  d="M14.2017 5.2562H5.49531V3.93547C5.4951 3.59306 5.62844 3.26396 5.86719 3.01756C6.10594 2.77116 6.43146 2.62673 6.77507 2.61475H7.03368C7.13588 2.88265 7.31744 3.11328 7.5543 3.27604C7.79115 3.4388 8.07209 3.52599 8.35986 3.52605H10.1568C10.5207 3.50141 10.8616 3.34008 11.1106 3.07467C11.3596 2.80927 11.4981 2.4596 11.4981 2.09638C11.4981 1.73316 11.3596 1.3835 11.1106 1.11809C10.8616 0.852685 10.5207 0.691315 10.1568 0.666672H8.35322C8.06546 0.666739 7.78452 0.753929 7.54767 0.916686C7.31081 1.07944 7.12925 1.31008 7.02705 1.57798H6.76845C6.15056 1.58321 5.55997 1.83225 5.12616 2.27046C4.69236 2.70867 4.45073 3.30033 4.45426 3.91568V5.23641H2.465C2.33707 5.25081 2.21895 5.31161 2.13318 5.40722C2.04741 5.50284 2 5.62656 2 5.75478C2 5.88299 2.04741 6.00671 2.13318 6.10233C2.21895 6.19795 2.33707 6.25874 2.465 6.27314H14.2017C14.3296 6.25874 14.4477 6.19795 14.5335 6.10233C14.6193 6.00671 14.6667 5.88299 14.6667 5.75478C14.6667 5.62656 14.6193 5.50284 14.5335 5.40722C14.4477 5.31161 14.3296 5.25081 14.2017 5.23641V5.2562ZM8.35322 1.75629H10.1502C10.2443 1.76857 10.3308 1.81455 10.3934 1.88563C10.4561 1.9567 10.4906 2.04805 10.4906 2.14261C10.4906 2.23718 10.4561 2.32848 10.3934 2.39956C10.3308 2.47064 10.2443 2.51661 10.1502 2.5289H8.35322C8.25907 2.51661 8.17262 2.47064 8.10999 2.39956C8.04736 2.32848 8.01283 2.23718 8.01283 2.14261C8.01283 2.04805 8.04736 1.9567 8.10999 1.88563C8.17262 1.81455 8.25907 1.76857 8.35322 1.75629Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <p class="text-xs line-clamp-1 break-all font-inter font-medium">
              {{ candidate.title }}
            </p>
          </div>
          <p
            class="text-xs w-full text-center bg-[#353838] text-white py-1 px-2 rounded break-all line-clamp-1 overflow-hidden leading-normal"
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

  return 'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png'

  // return "https://thispersondoesnotexist.com?cachebust=" + Math.random()
})

const name = computed(() => {
  return props.candidate?.name
})

const party = computed(() => {
  const party = parties.find((party) => {
    return party?.name === props.candidate?.PARTAI
  })

  return party
})

const dapil = computed(() => {
  return props.candidate?.DAPIL?.replace("KEPULAUAN", "KEP.")
})

const slug = computed(() => {
  return props.candidate?.id
})
</script>

<style lang="scss" scoped></style>
