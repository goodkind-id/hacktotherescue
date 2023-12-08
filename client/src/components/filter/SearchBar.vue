<template>
  <div class="px-4">
    <input
      type="search"
      name=""
      id=""
      v-model="keyword"
      class="py-4 px-4 bg-white focus:outline-none border-none shadow block w-full rounded-full text-sm font-inter"
      placeholder="Search for issues"
      @keyup.enter="search"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"

const emit = defineEmits(["search"])

const keyword = ref("")

const route = useRoute()
const router = useRouter()

function search(e) {
  router.replace({ query: { q: keyword.value } })
  emit("search", keyword.value)
}

onMounted(() => {
  keyword.value = route.query.q || ""
})
</script>

<style lang="scss" scoped>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
