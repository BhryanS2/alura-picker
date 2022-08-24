<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <form @submit.prevent="cadastrar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          id="titulo"
          autocomplete="off"
          @input="foto.titulo = $event.target.value"
          :value="foto.titulo"
        />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          id="url"
          autocomplete="off"
          @input="foto.url = $event.target.value"
          :value="foto.url"
        />
        <imagem-responsiva />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          @input="foto.descricao = $event.target.value"
          :value="foto.descricao"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao text="GRAVAR" type="submit" />
        <router-link to="/"
          ><meu-botao text="VOLTAR" type="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagemResponsiva/index.vue";
import Botao from "../shared/button/index.vue";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: ""
      }
    };
  },
  methods: {
    cadastrar() {
      console.log(this.foto);
      this.foto.titulo = "";
      this.foto.url = "";
      this.foto.descricao = "";
    }
  }
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
