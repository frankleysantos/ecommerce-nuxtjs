<template>
   <v-container>
    <div>
        {{template}}
    </div>
   </v-container>
</template>

<script>
export default {
    created() {
        this.produto.id = this.$route.params.produtoId;
        if(this.produto.id) {
            this.detalhesProduto();
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
            this.$store.dispatch('produto/detalheProduto', this.produto.id)
                        .then((resp) => {
                            this.produto = this.$store.state.produto.produto
                            if(this.produto[0].nome) {
                                this.template = '{{<produto-detalheProdutos :produto="produto"/>}}'
                            }
                        })
        }
    }
}
</script>