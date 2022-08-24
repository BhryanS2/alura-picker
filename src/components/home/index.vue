<template>
  <div>
    <h1 class="title">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>

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
          <ImagemResponsiva
            :url="foto.url"
            :title="foto.titulo"
            v-meu-transform:rotate.animate="15"
          />
          <ButtonComponent
            type="button"
            text="Remover"
            :confirmacao="true"
            estilo="danger"
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
      filtro: "",
      mensagem: ""
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
      this.$http.delete(`http://localhost:3000/v1/fotos/${foto._id}`).then(
        () => {
          // assim que apagar, exibe a mensagem para o usuário
          this.mensagem = "Foto removida com sucesso";
        },
        err => {
          this.mensagem = "Não foi possível remover a foto";
          console.log(err);
        }
      );
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
