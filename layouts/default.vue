<template>
    <v-app id="inspire">
    <layouts-default-appBar :links="menu"/>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <!-- <layouts-default-colunaCategorias/> -->
          <!-- conteudo principal -->
          <layouts-default-colunaPrincipalSite/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default({
    data() {
      return {
        menu: [
            { url: '/', nome: 'Home' },
            { url: '/categoria', nome: 'Categorias' },
            { url: '/produto/cadastro', nome: 'Produtos' },
        ]
      }
    }
})
</script>
