<template>
  <div class="p-8 sm:p-10 md:p-16 flex justify-center">
    <div class="bg-ocean-500 w-full sm:w-3/4 xl:w-1/2 max-w-3xl" ref="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
    head() {
      // Set Meta Tags for this Page
    },
}
</script>