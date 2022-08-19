<template>
  <div class="container">
    <navbar :routes="routes"></navbar>
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import menu from "./components/shared/menu/index.vue";
export default {
  components: {
    navbar: menu
  },
  data() {
    return {
      routes
    };
  }
};
</script>

<style>
.container {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.page-enter,
.page-leave-active {
  opacity: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s;
}
</style>
