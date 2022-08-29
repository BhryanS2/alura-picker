<template>
  <button
    :type="type"
    class="btn"
    :class="classeBotao"
    @click="emitirEventoDeExlusao()"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "Button",
      required: true
    },
    type: {
      type: "submit" | "reset" | "button" | "link",
      default: "button",
      required: true
    },
    confirmacao: {
      type: Boolean,
      default: false
    },
    estilo: {
      type: "default" | "danger",
      default: "default"
    }
  },
  methods: {
    emitirEventoDeExlusao() {
      if (this.confirmacao) {
        if (!confirm("Deseja realmente excluir?")) return;
      }
      this.$emit("excluir");
    }
  },
  computed: {
    classeBotao() {
      const estilo = this.estilo === "default" ? "btn-default" : "btn-danger";
      return estilo;
    }
  }
};
</script>
<style>
@import url("./style.scss");
</style>
