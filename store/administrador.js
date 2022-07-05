export const state = () => ({
    state: {
        administrador: [],
        aceite: false,
        enviado: false
    },
})

export const mutations = {
    NOVO_ADMINISTRADOR(state, novo_administrador){
        state.administrador = [];
        state.administrador.push(novo_administrador);  
    },
    NOVO_ACEITE(state, status){
        state.aceite = status;  
    },
    NOVO_ENVIO(state, status){
        state.enviado = status;  
    },
}
       
export const actions = {
    salvarAdministrador(context, parametros) {
        context.commit('NOVO_ADMINISTRADOR', parametros);
    },
    salvarAceite(context, parametros) {
        context.commit('NOVO_ACEITE', parametros);
    },

    salvarEnvio(context, parametros) {
        context.commit('NOVO_ENVIO', parametros);
    },
}