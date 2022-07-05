<template>
  <v-container>
    <v-row v-if="produto[0].nome != null">
        <v-col md="6">
            <produto-carrouselProduto :item="produto"/>
        </v-col>
        <v-col>
            <v-card
            elevation="11"
            height="500"
            >
                <v-card-title>{{produto[0].nome}}</v-card-title>
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
                        <v-row>
                            <v-col>
                                <v-img
                                    height="100"
                                    width="100"
                                    :src="$config.apiBaseURL+'media/'+produto[0].fotoproduto__foto"
                                ></v-img>
                            </v-col>
                            <v-col md="9">
                                <p>Voltagem</p>

                                <v-btn-toggle v-model="toggle_none">
                                    <v-btn>
                                        110
                                    </v-btn>

                                    <v-btn>
                                        220
                                    </v-btn>
                                </v-btn-toggle>
                            </v-col>
                        </v-row>
                        
                        
                    </div>

                    <div class="text-subtitle-1">
                        R$ <strong><label style="font-size:20pt">{{produto[0].calculo}}</label> À vista ({{produto[0].desconto}}% desconto)</strong>
                    </div>
                    <div class="text-subtitle-2">
                        R$ {{produto[0].valor}} em 10x
                    </div>
                    <div class="mt-16">
                        <v-btn
                            block
                            color="accent"
                            elevation="13"
                            large
                        >
                        Adicionar o Carrinho
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <h3>Informações do Produto</h3>
            {{produto[0].descricao}}
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    props: ['produto']
}
</script>

<style>

</style>