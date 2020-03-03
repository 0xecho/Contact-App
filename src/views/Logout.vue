<template>
  <h2>You are being redirected</h2>
</template>

<script>
export default {
    created () {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      this.$router.replace('/')
    }
}
</script>

<style>

</style>