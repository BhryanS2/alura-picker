<template>
<div>
  <h1>{{titulo}}</h1>
  <img :src="foto.url" :alt="foto.descricao" :title="foto.titulo">


</div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto: {
        titulo: "Foto alura",
        url: "https://picsum.photos/1200/600",
        descricao: "Apenas uma forto aleatória"
      },
    }
  }
}
</script>

<style>
</style>
