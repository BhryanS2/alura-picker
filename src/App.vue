<template>
<div>
  <h1>{{titulo}}</h1>
  <img :src="foto.url" :alt="foto.descricao" :title="foto.titulo">
  <h1>Lista</h1>
  <ul>
    <li v-for="foto in fotos" v-bind:key="foto.id">
      <img :src="foto.url" :alt="foto.descricao" :title="foto.titulo">
    </li>
  </ul>

</div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      foto: {
        titulo: "Foto Alura 1",
        url: "https://picsum.photos/1200/600",
        descricao: "Apenas uma forto aleatória"
      },
      fotos: [
        {
          id: 1,
          titulo: "Foto Alura aleatória 1",
          url: "https://picsum.photos/1200/600",
          descricao: "Apenas uma forto aleatória"
        },
        {
          id: 2,
          titulo: "Foto Alura aleatória 2",
          url: "https://picsum.photos/1200/600",
          descricao: "Apenas uma forto aleatória"
        },
        {
          id: 3,
          titulo: "Foto Alura aleatória 3",
          url: "https://picsum.photos/1200/600",
          descricao: "Apenas uma forto aleatória"
        },
        {
          id: 4,
          titulo: "Foto Alura aleatória 4",
          url: "https://picsum.photos/1200/600",
          descricao: "Apenas uma forto aleatória"
        }
      ]
    }
  }
}
</script>

<style>
</style>
