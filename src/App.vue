<template>
  <div class="container">
    <h1 class="title">{{ titulo }}</h1>
    <ul class="listImage">
      <li v-for="foto in fotos" v-bind:key="foto.url" class="listImage__item">
        <img :src="foto.url" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: []
    };
  },
  created() {
    const promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise.then(response => {
      this.fotos = response.data;
    });
  }
};
</script>

<style>
.container {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.title {
  text-align: center;
}

.listImage {
  list-style: none;
}

.listImage__item {
  display: inline-block;
}
</style>
