<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos" v-bind:key="foto.url">
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

<style></style>
