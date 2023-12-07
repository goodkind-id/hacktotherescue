<template>
  <div class="px-4">
    <input
      type="search"
      name=""
      id=""
      class="py-4 px-4 bg-white focus:outline-none border-none shadow block w-full rounded-full"
      placeholder="Search for issues"
      @keyup.enter="search"
    />
  </div>
</template>

<script setup>
  const emit= defineEmits(["search"])
 
  function search(e) {
    emit("search", e.target.value);
  }
</script>

<style lang="scss" scoped>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
