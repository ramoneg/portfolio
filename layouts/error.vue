<template>
  <div></div>
</template>

<script>
  export default {
    props: ['error'],
    created () {
      this.$router.push('/')
    }
  }
</script>