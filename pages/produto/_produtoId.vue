<template>
   <v-container>
        <produto-detalheProdutos :produto="produto"/>
   </v-container>
</template>

<script>
export default {
    async fetch() {
        this.produto.id = this.$route.params.produtoId;
        if (this.produto.id) {
            await this.detalhesProduto()
        }
    },
    data() {
        return {
            template: null,
            produto : [
                {
                    id: null,
                    nome: null,
                    descricao: '',
                    valor: null,
                    desconto: null,
                    calculo: null,
                    fotoproduto__foto: null,
                    categoria__nome: null
                }
            ],
        }
    },
    methods: {
        detalhesProduto:  function() {
            return this.$store.dispatch('produto/detalheProduto', this.produto.id)
                        .then((resp) => {
                            this.produto = this.$store.state.produto.produto
                        })
        }
    }
}
</script>