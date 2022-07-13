import nuxtConfig from '../nuxt.config';
// const config = this.$config

// export default $axios.create({
//     baseURL: `${nuxtConfig.publicRuntimeConfig.apiBaseURL}`,
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': "Bearer " + localStorage.getItem('token'),
//     },
// });

// let axios = null

// export default ({store, $axios}) => {
//   console.log('axios plugin init')
//   $axios.setBaseURL(`${nuxtConfig.publicRuntimeConfig.apiBaseURL}`)
//   $axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
//   axios = $axios
// }

// export {
//   axios
// }

// export default ({store, app: { $axios }}) => {
//     $axios.setBaseURL(`${nuxtConfig.publicRuntimeConfig.apiBaseURL}`)
//     $axios.setToken(localStorage.getItem('token'), 'Bearer', ['post', 'delete', 'get', 'put'])
// }