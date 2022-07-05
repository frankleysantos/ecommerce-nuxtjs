import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
    // lang: {
    //   locales: { pt },
    //   current: 'pt',
    // },
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'mdi',// this just fetches it from the repo
    },
    theme: {
      dark: false,
    },
})
