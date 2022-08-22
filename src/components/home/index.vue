<template>
  <div>
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
          <ImagemResponsiva :url="foto.url" :title="foto.titulo" />
          <ButtonComponent
            type="button"
            text="Remover"
            @excluir="excluirFoto(foto)"
          />
        </Card>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "../shared/card/index.vue";
import ImagemResponsiva from "../shared/imagemResponsiva/index.vue";
import Button from "../shared/button/index.vue";

export default {
  components: {
    Card,
    ImagemResponsiva: ImagemResponsiva,
    ButtonComponent: Button
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
  methods: {
    excluirFoto(foto) {
      console.log(foto);
      this.fotos.splice(this.fotos.indexOf(foto), 1);
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

<style scoped>
.title {
  text-align: center;
}

.listImage {
  list-style: none;
}

.listImage__item {
  display: inline-block;
}

.filter {
  width: 100%;
  padding: 10px;
  display: block;
}
</style>
