<!--`alurapic/src/components/shared/imagem-responsiva/ImagemResponsiva.vue -->

<template>
  <img class="imagem-responsiva" :src="url" :alt="title" />
</template>

<script>
export default {
  props: ["url", "title"]
};
</script>

<style scoped>
.imagem-responsiva {
  width: 100%;
}
</style>
