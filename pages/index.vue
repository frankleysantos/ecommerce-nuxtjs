<template>
  <div>
    <v-container grid-list-xs>
      <v-row>
        <v-col v-for="prod in produto" :key="prod.id" cols="4">
          <produto-cardProdutos :cardProduto="prod" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  created() {
    const token = localStorage.getItem("token");
    if (!token) {
      return this.$router.push("login");
    }
  },
  async fetch() {
    await this.produtos();
  },
  data() {
    return {
      produto: [],
    };
  },
  methods: {
    produtos: function () {
      this.$store.dispatch("produto/todosProdutos").then((resp) => {
        this.produto = this.$store.state.produto.produto;
      });
    },
  },
};
</script>