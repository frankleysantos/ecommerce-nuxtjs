import axios from 'axios';
import nuxtConfig from '../nuxt.config';
// const config = this.$config

export default axios.create({
    baseURL: `${nuxtConfig.publicRuntimeConfig.apiBaseURL}`,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.getItem('token'),
    },
});