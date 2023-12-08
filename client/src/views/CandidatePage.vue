<template>
  <div class="flex items-center border-b border-gray-700">
    <button @click="$router.back()" class="p-4 text-gray-300" title="Kembali">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H5.56029L11.0306 18.2194C11.1003 18.2891 11.1556 18.3718 11.1933 18.4628C11.231 18.5539 11.2504 18.6515 11.2504 18.75C11.2504 18.8485 11.231 18.9461 11.1933 19.0372C11.1556 19.1282 11.1003 19.2109 11.0306 19.2806C10.9609 19.3503 10.8782 19.4056 10.7872 19.4433C10.6961 19.481 10.5985 19.5004 10.5 19.5004C10.4014 19.5004 10.3039 19.481 10.2128 19.4433C10.1218 19.4056 10.039 19.3503 9.96935 19.2806L3.21935 12.5306C3.14962 12.461 3.0943 12.3783 3.05656 12.2872C3.01882 12.1962 2.99939 12.0986 2.99939 12C2.99939 11.9014 3.01882 11.8038 3.05656 11.7128C3.0943 11.6217 3.14962 11.539 3.21935 11.4694L9.96935 4.71938C10.1101 4.57864 10.301 4.49958 10.5 4.49958C10.699 4.49958 10.8899 4.57864 11.0306 4.71938C11.1713 4.86011 11.2504 5.05098 11.2504 5.25C11.2504 5.44902 11.1713 5.63989 11.0306 5.78063L5.56029 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12Z"
          fill="currentColor"
        />
      </svg>
    </button>
    <div class="flex-grow py-4">
      <span class="text-gray-100 text-base font-bold font-montserrat"
        >Profil Caleg</span
      >
    </div>
    <button @click="handleShare" class="p-4 text-gray-100" title="Bagikan">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.9866 18.6683C19.9867 19.1545 19.8868 19.6348 19.6941 20.0756C19.5013 20.5163 19.2204 20.9067 18.8709 21.2195C18.5215 21.5322 18.112 21.7596 17.6713 21.8858C17.2305 22.012 16.7692 22.0339 16.3197 21.9499C15.8702 21.8659 15.4433 21.6781 15.0692 21.3996C14.6951 21.1212 14.3827 20.7589 14.154 20.3381C13.9253 19.9174 13.7858 19.4484 13.7453 18.9641C13.7048 18.4798 13.7644 17.9919 13.9197 17.5348L9.31638 14.384C8.87673 14.8434 8.31951 15.1543 7.71463 15.2777C7.10976 15.401 6.48416 15.3313 5.91632 15.0773C5.34849 14.8233 4.8637 14.3963 4.52278 13.8499C4.18187 13.3035 4 12.662 4 12.0058C4 11.3497 4.18187 10.7082 4.52278 10.1618C4.8637 9.61537 5.34849 9.18838 5.91632 8.93437C6.48416 8.68037 7.10976 8.61067 7.71463 8.73402C8.31951 8.85736 8.87673 9.16827 9.31638 9.62772L13.9197 6.48156C13.6561 5.70987 13.6687 4.86176 13.9549 4.09929C14.2412 3.33681 14.7811 2.71344 15.4715 2.34828C16.1619 1.98312 16.9544 1.90178 17.6976 2.1198C18.4407 2.33782 19.0824 2.83992 19.5 3.53014C19.9177 4.22037 20.0819 5.05034 19.9615 5.86145C19.841 6.67256 19.4442 7.40795 18.847 7.92709C18.2497 8.44623 17.4939 8.71273 16.7239 8.67566C15.9538 8.63859 15.2236 8.30056 14.6728 7.72615L10.0694 10.8769C10.3182 11.6094 10.3182 12.4116 10.0694 13.144L14.6728 16.2948C15.1123 15.8365 15.6689 15.5265 16.2729 15.4036C16.877 15.2806 17.5016 15.3501 18.0688 15.6034C18.6359 15.8567 19.1204 16.2826 19.4615 16.8278C19.8026 17.3729 19.9853 18.0131 19.9866 18.6683Z"
          fill="currentColor"
        />
      </svg>
    </button>
  </div>

  <div class="py-10 flex flex-col gap-10 px-4">
    <div class="flex gap-4">
      <figure class="relative w-fit">
        <img
          :src="picUrl"
          :alt="name"
          loading="lazy"
          class="object-cover bg-gray-900 w-[76px] h-[76px] aspect-square rounded-lg overflow-hidden"
          @error="
            (e) =>
              (e.target.src =
                'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png')
          "
        />

        <span
          class="bg-[#16B366] rounded-full w-6 h-6 font-semibold text-gray-100 text-xs flex items-center justify-center absolute -bottom-1 -right-1"
        >
          24
        </span>
      </figure>

      <div class="flex-1 flex flex-col gap-2">
        <h1 class="font-montserrat text-base font-extrabold text-gray-100">
          {{ name }}
        </h1>

        <div class="flex items-center gap-1 text-gray-300" v-if="party">
          <img :src="party?.logoUrl" :alt="party" class="w-4 h-4 rounded" />
          <p class="text-xs font-medium font-inter line-clamp-1">
            {{ party.name }}
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
          <p class="text-xs font-medium font-inter line-clamp-1">
            {{ candidate?.title }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h5 class="font-montserrat text-gray-300 font-extrabold text-base">
        DAPIL
      </h5>

      <p
        class="px-2 py-1 rounded text-center w-full bg-[#353838] text-xs text-gray-300 font-medium leading-normal"
      >
        {{ candidate?.DAPIL }}
      </p>
    </div>

    <div class="flex flex-col gap-4">
      <h5 class="font-montserrat text-gray-300 font-extrabold text-base">
        Tentang Caleg
      </h5>

      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h6 class="text-[#3492FF] text-xs font-semibold font-inter">
            Informasi Pribadi
          </h6>
          <ul
            class="text-xs text-gray-300 font-medium list-disc ml-4 font-inter leading-normal"
          >
            <li>
              Tempat / Tgl lahir: {{ candidate?.TANGGAL_LAHIR }},
              {{ candidate?.TEMPAT_LAHIR }}
            </li>
            <li>
              Jenis kelamin:
              {{ candidate?.gender === "l" ? "Laki-laki" : "Perempuan" }}
            </li>
            <li>Agama: {{ candidate?.AGAMA }}</li>
            <li>Status disablitas: {{ candidate?.STATUS_DISABILITAS }}</li>
            <li>Status perkawinan: {{ candidate?.STATUS_PERKAWINAN }}</li>
            <li>Status hukum: {{ candidate?.STATUS_HUKUM }}</li>
          </ul>
        </div>

        <div class="flex flex-col gap-2" v-if="pekerjaan.length">
          <h6 class="text-[#3492FF] text-xs font-semibold font-inter">
            Riwayat Pekerjaan
          </h6>
          <ul class="list-linked">
            <li class="flex flex-col gap-1.5" v-for="job in pekerjaan">
              <p class="font-montserrat text-gray-100 text-xs font-bold">
                {{ job?.JABATAN }}
              </p>
              <p class="font-montserrat text-gray-300 text-xs font-semibold">
                {{ job?.NAMA_PERUSAHAAN_LEMBAGA || job?.NAMA_INSTANSI }}
              </p>
              <p class="text-[#A3A3A3] text-xs font-medium font-inter">
                {{ job?.TAHUN_MASUK }} - {{ job?.TAHUN_KELUAR }}
              </p>
            </li>
          </ul>
        </div>

        <div class="flex flex-col gap-2" v-if="pendidikan.length">
          <h6 class="text-[#3492FF] text-xs font-semibold font-inter">
            Riwayat Pendidikan
          </h6>
          <ul class="list-linked">
            <li class="flex flex-col gap-1.5" v-for="edu in pendidikan">
              <p class="font-montserrat text-gray-100 text-xs font-bold">
                Jenjang Pendidikan {{ edu?.JENJANG_PENDIDIKAN }}
              </p>
              <p class="font-montserrat text-gray-300 text-xs font-semibold">
                {{ edu?.NAMA_INSTITUSI }}
              </p>
              <p class="text-[#A3A3A3] text-xs font-medium font-inter">
                {{ edu?.TAHUN_MASUK }} - {{ edu?.TAHUN_KELUAR }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h5 class="font-montserrat text-gray-300 font-extrabold text-base">
        Motivasi Caleg
      </h5>

      <div
        class="text-gray-300 text-xs font-medium leading-normal font-inter whitespace-pre-line"
        v-html="motivation"
      ></div>
    </div>

    <div class="flex flex-col gap-4">
      <h5 class="font-montserrat text-gray-300 font-extrabold text-base">
        Program Usulan
      </h5>

      <div
        class="text-gray-300 text-xs font-medium leading-normal font-inter whitespace-pre-line"
        v-html="program"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import { candidates, parties } from "../data"
import { useRoute } from "vue-router"
import { getCandidateById } from "../api"

const route = useRoute()

const candidate = ref({})

onMounted(async () => {
  const id = route.params.id

  candidate.value = await getCandidateById(id)
})

const picUrl = computed(() => {
  // return `https://i.pravatar.cc/150?u=${props.candidate.email}`

  // return 'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png'

  return "https://thispersondoesnotexist.com?cachebust=" + Math.random()
})

const name = computed(() => {
  return candidate.value?.name
})

const motivation = computed(() => {
  let text = candidate.value?.motivation

  text = text?.replace(/: $/, "")

  return text
})

const program = computed(() => {
  let text = candidate.value?.program

  text = text?.replace(/: $/, "")

  return text
})

const handleShare = () => {
  let shareData = {
    title: "GoodTalk & Action!",
    text: `Cek profil ${name.value} di GoodTalk & Action sekarang! Cari tahu siapa dia dan apa programnya!`,
    url: window.location.href,
  }

  if (navigator.share) {
    navigator
      .share(shareData)
      .then(() => {
        console.log("Thanks for sharing!")
      })
      .catch(console.error)
  } else {
    console.log("Web Share API not supported in your browser")
  }
}

const party = computed(() => {
  const party = parties.find((party) => {
    return party?.name === candidate.value?.PARTAI
  })

  return party
})

const pekerjaan = computed(() => {
  return (
    candidate.value?.RIWAYAT_PEKERJAAN?.filter((i) => i?.JABATAN !== "-") || []
  )
})

const pendidikan = computed(() => {
  return (
    candidate.value?.RIWAYAT_PENDIDIKAN?.filter(
      (i) => i?.NAMA_INSTITUSI !== "-"
    ) || []
  )
})
</script>

<style lang="scss" scoped>
ul.list-linked > li {
  position: relative;
  padding-left: 0.5rem;
}
ul.list-linked > li::before {
  content: "";
  position: absolute;
  background-color: #353838;
  width: 0.25rem;
  height: 100%;
  inset: 0;
}
ul.list-linked > li:not(:last-child) {
  padding-bottom: 0.5rem;
}
</style>
