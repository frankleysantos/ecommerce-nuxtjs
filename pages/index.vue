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
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   return this.$router.push("login");
    // }
  },
  async fetch() {
    let response = await this.produtos();
  },
  data() {
    return {
      produto: [],
    };
  },
  methods: {
    produtos: function () {
      this.$store.dispatch("produto/todosProdutos").then((resp) => {
        console.log(resp)
        if (resp != undefined && resp == 401) {
            return this.$router.push('/login')
        }
        this.produto = this.$store.state.produto.produto;
      });
    },
  },
};
</script>