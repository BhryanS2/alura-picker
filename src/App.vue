<template>
  <div class="container">
    <h1 class="title">{{ titulo }}</h1>

    <input
      type="search"
      class="filter"
      placeholder="Filtrar pelo título"
      v-on:input="filtro = $event.target.value"
    />

    <ul class="listImage">
      <li
        v-for="foto of fotosFiltradas"
        v-bind:key="foto.url"
        class="listImage__item"
      >
        <Card :title="foto.titulo">
          <img :src="foto.url" :alt="foto.titulo" class="card__image" />
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./components/shared/card/index.vue";
export default {
  components: {
    Card
  },
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: ""
    };
  },
  computed: {
    fotosFiltradas() {
      if (!this.filtro.trim().length) return this.fotos;
      const regex = new RegExp(this.filtro, "i");
      return this.fotos.filter(({ titulo }) => regex.test(titulo));
    }
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

.card__image {
  width: 100%;
  height: 100%;
}

.filter {
  width: 100%;
  padding: 10px;
  display: block;
}
</style>
