<template>
<v-container grid-list-xs>
    <v-row>
        <v-col>
            <h2>Categorias</h2>
            <v-card class="px-4 py-4">
                <v-form @submit.prevent="cadastrarCategoria">
                    <v-row>
                        <v-col>
                            <v-text-field
                                v-model="categoria.nome"
                                label="Categoria"
                                required
                            >
                            <v-btn type="submit" color="primary" slot="append">Salvar</v-btn>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-card>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Buscar Categorias"
                        single-line
                        hide-details
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="categorias"
                :search="search"
                >
                    <template v-slot:item.id="{ item }">
                        <v-icon
                            small
                            color="info"
                           @click="editItem(item)"
                        >
                           mdi-text-box-edit-outline
                        </v-icon>
                        <v-icon
                            small
                            color="error"
                           @click="deleteItem(item)"
                        >
                           mdi-delete
                        </v-icon>
                    </template>
                </v-data-table>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
export default {
    created() {
        this.categoriasCadastradas()
    },
    head() {
      return {
        titleTemplate: process.env.NOME_APLICACAO + ' - CATEGORIAS',
      }
    },
    data() {
        return {
            categorias: [],
            categoria: [],
            search: '',
            headers: [
                { text: 'Categoria', value: 'nome' },
                { text: 'Acões', value: 'id', sortable: false },
            ],
        }
    },
    async fetch() {
        // await 
    },
    methods: {
        categoriasCadastradas: function() {
            this.$store.dispatch('categoria/listarCategorias')
                        .then((resp) => {
                            this.categorias = this.$store.state.categoria.categoria
                        })
        },
        cadastrarCategoria: function() {
            this.$store.dispatch('categoria/cadastrar', this.categoria)
        },
        deleteItem: function(categoria) {
            this.$store.dispatch('categoria/delete', categoria)
        },
        editItem: function(item) {
            alert('edição'+item.id)
        }
    }
}
</script>

<style>

</style>