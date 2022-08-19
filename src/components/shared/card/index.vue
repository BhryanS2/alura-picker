<template>
  <div class="card">
    <div class="card__title" @dblclick="visible = !visible">
      {{ title }}
    </div>
    <div class="card__content" v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script scoped>
export default {
  props: ["title"],
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style>
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
</style>
