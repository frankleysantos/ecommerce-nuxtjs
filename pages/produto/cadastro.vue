<template>
<v-container grid-list-md>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="cadastrarProduto"
  >
      <v-row>
        <v-col>
          <v-text-field
              v-model="produto.nome"
              :rules="rules.nome"
              label="Nome do Produto"
              required
              prepend-icon="mdi-cart-plus"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
                v-model="produto.categoria"
                :items="items"
                item-text="nome"
                item-value="id"
                label="Categorias"
                :rules="rules.categoria"
                prepend-icon="mdi-store-search-outline"
          ></v-select>
        </v-col>
        <v-col>
          <v-text-field
              v-model="produto.valor"
              :rules="rules.valor"
              label="Valor do Produto"
              prepend-icon="R$"
              required
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
              v-model="produto.desconto"
              :rules="rules.desconto"
              label="Desconto do Produto"
              required
              prepend-icon="mdi-percent"
          ></v-text-field>
        </v-col>
      </v-row>
    
    <v-row>
      <v-col>
        <v-file-input
            label="Foto Principal"
            v-model="produto.imagem_principal"
            prepend-icon="mdi-camera"
            accept="image/png, image/jpeg"
        ></v-file-input>
      </v-col>
      <v-col>
        <v-file-input
            multiple
            label="Fotos do Produto"
            v-model="produto.fotos"
            prepend-icon="mdi-camera"
            accept="image/png, image/jpeg"
        ></v-file-input>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-textarea
              outlined
              label="Descrição"
              v-model="produto.descricao"
        ></v-textarea>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn
          :disabled="!buttonValidate"
          color="success"
          class="mr-4"
          type="submit"
        >
          Cadastrar
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Limpar
        </v-btn>
      </v-col>
    </v-row>
  <!-- {{categorias}} -->

  </v-form>
</v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      buttonValidate: false,
      select: [],
      items: [],
      produto: [
        {
            nome: null,
            categoria:null,
            descricao: null,
            fotos: null,
            valor: null,
            desconto: null,
            imagem_principal: null,
        }
      ],
      rules: {
        nome: [
            v => !!v || 'Nome do produto é obrigatório',
            v => (v && v.length > 2) || 'Produto deve ter mais de 2 caracteres',
        ],
        categoria: [
            v => !!v || 'Categoria é obrigatório',
        ],
        valor: [
            v => !!v || 'Valor é obrigatório',
        ],
        desconto: [
            v => !!v || 'Desconto é obrigatório',
        ],
      },
    }),

    head() {
      return {
        titleTemplate: process.env.NOME_APLICACAO + ' - PRODUTO - CADASTRO',
      }
    },

    async fetch() {
        await this.listaCategoria()
    },

    methods: {
      cadastrarProduto: function () {
        this.$refs.form.validate()
        if (this.$refs.form.validate()) {
            this.$store.dispatch('produto/cadastro', this.produto)
        }
      },
      listaCategoria: function() {
          this.$store.dispatch('categoria/listarCategorias')
                        .then((resp) => {
                            this.items = this.$store.state.categoria.categoria
                        })
      },
      reset () {
        this.$refs.form.reset()
      },
    },
    watch: {
      produto() {
        if (this.$refs.form.validate()) {
          this.buttonValidate = true
        } else {
          this.buttonValidate = false
        }
      }
    }
  }
</script>

<style>

</style>