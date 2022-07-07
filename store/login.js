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
    async loginApi(context, parametros) {
        try {
            await axios.post('token/', {'password': parametros.password, 'username': parametros.username})
                        .then(response => {
                            localStorage.setItem('token', response.data.access)
                            const token = localStorage.getItem("token");
                            if (token) {
                                return this.$router.push("/");
                            }
                            return this.$router.push("login");
                        })
        } catch(error) {
            // console.log(error.response.status);
            return this.$router.push("login");
        }
        
    },
}