<template>
  <div id="app">
    <navbar />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '@/scss/app.scss';
html, body {
  height: 100%;
}
#app {
    height: 100%;
}
</style>
