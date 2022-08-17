<template>
  <div class="card">
    <div class="card__title">{{ title }}</div>
    <slot class="card__content"> </slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
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

.card__image {
  width: 100%;
  height: 100%;
}
</style>
