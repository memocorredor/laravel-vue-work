<template>
  <main>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  name: "MainApp",
  components: {},
  created() {}
};
</script>

<style lang="scss">
main {
  height: 100%;
}
// --------------
// Transition views
// --------------
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0.1;
}
</style>