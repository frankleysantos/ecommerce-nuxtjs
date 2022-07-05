<template>
  <v-card
    :loading="false"
    class="mx-auto my-2"
    max-width="374"
    max-height="463"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="250"
      :src="$config.apiBaseURL.slice(0, -1)+cardProduto.imagem_principal"
    ></v-img>

    <v-card-title>{{cardProduto.nome.substring(0,25)+"..."}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        R$ {{cardProduto.valor}}

      </div>

      <div>{{cardProduto.descricao.substring(0,37)+"..." }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        :to="'/produto/'+cardProduto.id"
      >
        Detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      baseUrl: ''
    }
  },
  props: ['cardProduto']
}
</script>