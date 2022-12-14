import axios from "axios";

export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'NUXTJS Website Designing from Scratch',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NUXTJS Website Designing from Scratch' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css'
      },
      // {
      //   rel: 'stylesheet',
      //   href: '/css/custom.css'
      // },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@300;400;500;700;800&display=swap'
      }
    ],
    script: [
      {
        src: '/js/bootstrap.bundle.min.js',
        type: 'text/javascript'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/common.scss' },
  ],

  styleResources: {
    scss: ['~/assets/scss/_variable.scss'],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    '@nuxtjs/style-resources',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/page/:p',
        component: resolve(__dirname, 'pages/index.vue'),
        name: 'page',
      })
    },
  },

  generate: {
    async routes() {
      const limit = 2
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

      // ????????????????????????
      const pages = await axios
        .get(`https://nuxtwebsite.microcms.io/api/v1/news?limit=0`, {
          headers: { "X-MICROCMS-API-KEY": "d1bced36fdc040bb9287629c218850dd0cb6" },
        })
        .then((res) =>
          range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
            route: `/page/${p}`,
          }))
        )
      return pages
    },
  },

}
