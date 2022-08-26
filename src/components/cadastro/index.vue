<!-- alurapic/src/components/cadastro/Cadastro.vue -->

<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <h2 v-if="this.$route.params.id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <p v-show="this.mensagem" class="centralizado">{{ this.mensagem }}</p>

    <form @submit.prevent="cadastrar()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input
          name="titulo"
          v-model.lazy="foto.titulo"
          id="titulo"
          autocomplete="off"
          v-validate
          data-vv-as="título"
          data-vv-rules="required|min:3|max:30|alpha_spaces"
          required
        />
        <span v-show="errors.has('titulo')" class="error">
          {{ errors.first("titulo") }}
        </span>
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input
          id="url"
          name="url"
          autocomplete="off"
          v-model.lazy="foto.url"
          v-validate
          data-vv-as="URL"
          data-vv-rules="required"
          required
        />
        <span v-show="errors.has('url')" class="error">
          {{ errors.first("url") }}
        </span>
        <imagem-responsiva
          :url="foto.url"
          :title="foto.titulo"
          v-show="foto.url"
        />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          v-model="foto.descricao"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao text="GRAVAR" type="submit" />
        <router-link :to="{ name: 'home' }"
          ><meu-botao text="VOLTAR" type="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagemResponsiva/index.vue";
import Botao from "../shared/button/index.vue";
import { Foto } from "../../domain/foto";
import { FotoService } from "../../domain/foto/service";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
      mensagem: ""
    };
  },
  methods: {
    cadastrar() {
      const validateAll = this.$validator.validateAll();

      const fotoSave = this.fotoService.save(this.foto);
      validateAll.then(
        success => {
          if (!success) return;
          fotoSave.then(
            () => {
              if (this.$route.params.id) {
                this.$router.push({ name: "home" });
                return;
              }
              this.foto = new Foto();
              this.mensagem = "Foto cadastrada com sucesso!";
              setTimeout(() => {
                this.mensagem = "";
              }, 3000);
            },
            err => (this.mensagem = err.message)
          );
        },
        error => (this.mensagem = "Preencha os campos obrigatórios")
      );
    }
  },
  created() {
    this.fotoService = new FotoService(this.$resource);
    if (this.id) {
      const fotoPromise = this.fotoService.get(this.id);
      fotoPromise.then(
        foto => (this.foto = foto),
        err => (this.mensagem = err.message)
      );
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

.error {
  color: red;
}
</style>
