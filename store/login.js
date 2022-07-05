import axios from "../plugins/axios"

export const state = () => ({
    login: [],
})

export const mutations = {
    // NOVA_EMPRESA(state, nova_empresa){
    //     state.empresa = [];
    //     state.empresa.push(nova_empresa);  
    // },
}

export const  actions = {
    loginApi(context, parametros) {
        return axios.post('token/', {'password': parametros.password, 'username': parametros.username})
                    .then(response => {
                        localStorage.setItem('token', response.data.access)
                    })
                    .finally(() => this.$router.push('/'))
    },
}