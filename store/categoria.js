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
    DELETE_CATEGORIA(state, categoria_id) {
        let filter = state.categoria.filter(c => c.id == categoria_id)
        state.categoria.forEach(function(c, index) {
            if(c.id == categoria_id) {
                state.categoria.splice(index, 1)
            }
        })        
    }
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
    },
    delete(context, parametros) {
        const data = new FormData();
        data.append('id', parametros.id)

        return axios.post('categoria/api/delete/', data)
                    .then((response) => context.commit('DELETE_CATEGORIA', response.data[0].id))
    }
}