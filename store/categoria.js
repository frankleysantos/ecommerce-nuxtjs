import axios from "../plugins/axios"

export const state = () => ({
    state: {
        categoria: [],
    },
})

export const mutations = {
    NOVA_CATEGORIA(state, nova_categoria){
        state.categoria.push(nova_categoria);  
    },
    LISTA_CATEGORIA(state, categorias){
        state.categoria = categorias;  
    },
}
       
export const actions = {
    listarCategorias(context, parametros) {
        return axios.get('categoria/api/categorias/')
            .then((resp) => context.commit('LISTA_CATEGORIA', resp.data))
    },
    cadastrar(context, parametros) {
        const data = new FormData();
        data.append('nome', parametros.nome)
        return axios.post('categoria/api/cadastrar/', data)
                    .then((response) => context.commit('NOVA_CATEGORIA', response.data[0]))
    }
}