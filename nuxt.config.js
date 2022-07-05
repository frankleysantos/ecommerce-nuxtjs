import colors from 'vuetify/es5/util/colors'
import pt from 'vuetify/es5/locale/pt'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  publicRuntimeConfig: {
    apiBaseURL: process.env.API_BASE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - projeto-nuxt',
    title: 'projeto-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.scss',
    '@mdi/font/css/materialdesignicons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-snotify.js',
    '~/plugins/vue-maska.js',
    '~/plugins/vue-localStorage.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/dotenv'
  ],
  axios: {
    baseURL: 'http://localhost:8000/',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    lang: {
      locales: { pt },
      current: 'pt',
    },
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: false,
      icons: 'md',// this just fetches it from the repo
    },
    theme: {
      dark: false,
    },
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
