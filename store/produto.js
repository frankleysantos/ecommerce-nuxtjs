import axios from "../plugins/axios";

export const state = () => ({
        produto: [],
})

export const mutations = {
    NOVO_PRODUTO(state, novo_produto){
        state.produto.push(novo_produto);  
    },
    LISTA_PRODUTO(state, produtos){
        state.produto = produtos;  
    },
}

export const  actions = {
    async todosProdutos(context) {
        try {
            let produtos = await axios.get('/produto/api/lista/')
                                .then((response) => context.commit('LISTA_PRODUTO', response.data))
            return produtos;
        } catch (error) {
            // if (error.response.status == 401) {
            //     localStorage.clear();
            //     return this.$router.push('/login');
            // }
        }
    },
    async detalheProduto(context, id) {
        try {
            let dados = await  axios.get('/produto/api/detalhes/?id='+id)
                    .then((response) => context.commit('LISTA_PRODUTO', response.data))
            return dados;
        } catch (error) {
            if (error.response.status == 401) {
                localStorage.removeItem('token');
                return this.$router.push('/login');
            }
        }
        
    },
    cadastro(context, parametros) {
        const data = new FormData()
        var fotosProdutos = []
        data.append('nome', parametros.nome)
        data.append('categoria_id', parametros.categoria.id)
        data.append('descricao', parametros.descricao)
        data.append('valor', parametros.valor)
        data.append('desconto', parametros.desconto)
        data.append('imagem_principal', parametros.imagem_principal)
        // console.log(data)
        parametros.fotos.forEach(function(foto, key) {
            data.append('fotos', foto)
        })
        
        return axios.post('/produto/api/inserir/', data)
                    .then((response) => context.commit('NOVO_PRODUTO', response.data))
    }
}