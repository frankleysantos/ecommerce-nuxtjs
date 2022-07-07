import axios from "../plugins/axios";

export const state = () => ({
        produto: [],
})

export const mutations = {
    NOVO_PRODUTO(state, nova_empresa){
        state.empresa = [];
        state.empresa.push(nova_empresa);  
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
            //     localStorage.removeItem('token');
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
        
    }
}