<template>
  <button :type="type" class="btn btn__danger" @click="emitirEventoDeExlusao()">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button"
    },
    type: {
      type: "submit" | "reset" | "button" | "link",
      default: "button"
    }
  },
  methods: {
    emitirEventoDeExlusao() {
      const confirmacao = confirm("Deseja realmente excluir?");
      if (confirmacao) {
        this.$emit("excluir");
      }
    }
  }
};
</script>
<style>
.btn {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.btn__danger {
  background: firebrick;
  color: white;
}

.btn__default {
  background: darkcyan;
  color: white;
}
</style>
