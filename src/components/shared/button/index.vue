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
      required: <true></true>
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
.btn {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.btn-danger {
  background: firebrick;
  color: white;
}

.btn-default {
  background: darkcyan;
  color: white;
}
</style>
