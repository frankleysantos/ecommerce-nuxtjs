export const state = () => ({
    user: [],
})

export const mutations = {
    USUARIO_LOGADO(state, user){
        state.user.push(user);  
    },
}

export const  actions = {
    async loginApi(context, parametros) {
        try {
            var request;
            await this.$axios.post('token/', {'password': parametros.password, 'username': parametros.username})
            .then(response => {
                localStorage.setItem('token', response.data.access)
                request = {'token': localStorage.getItem('token')};
                this.$axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
            })
            .catch((error) => {
                request = {...error}
            })
            return request
        } catch(error) {
            return error;
        }
        
    },
    async userAuth(context, parametros) {
        try {
            var request = null;
            this.$axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
            await this.$axios.get('/accounts/api/user/')
            .then(response => {
                context.commit('USUARIO_LOGADO', response.data)
                request = response.data
            })
            .catch((error) => {
                request = {...error}
            })
            return request;
        } catch(error) {
            if (error.response.status == 401) {
                return error.response.status;
            }
        }
    }
}