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
            this.$axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
            let produtos = await this.$axios.get('/produto/api/lista/')
            .then((response) => context.commit('LISTA_PRODUTO', response.data))
            return produtos;
        } catch (error) {
            if (error.response.status == 401) {
                return error.response.status;
            }
        }
    },
    async detalheProduto(context, id) {
        try {
            var request = null;
            this.$axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
            await  this.$axios.get('/produto/api/detalhes/?id='+id)
            .then((response) => {
                context.commit('LISTA_PRODUTO', response.data)
                request = response.data;
            })
            .catch((error) => {
                request = {...error}
            })
            return request;
        } catch (error) {
            // if (error.response.status == 401) {
            //     localStorage.removeItem('token');
            //     return this.$router.push('/login');
            // }
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
        this.$axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
        return this.$axios.post('/produto/api/inserir/', data)
        .then((response) => context.commit('NOVO_PRODUTO', response.data))
    }
}