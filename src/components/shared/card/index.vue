<template>
  <div class="card">
    <div class="card__title" @dblclick="visible = !visible">
      {{ title }}
    </div>
    <transition name="card__fade">
      <div class="card__content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
.card {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.card .card__title {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px;
}

.card__fade-enter,
.card__fade-leave-active {
  opacity: 0;
}

.card__fade-enter-active,
.card__fade-leave-active {
  transition: opacity 0.4s;
}

.card__content {
  overflow: hidden;
}
</style>
