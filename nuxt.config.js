export default {
  ssr: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VivMeds Pharmacy',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'author', content: 'VivMeds Pharmacy' },
      { name: 'theme-color', content: '#6A8B2C' },
      {
        name: 'description',
        content:
          'At Vivmeds Pharmacy , we work directly with you to determine where there may be medication-related problems or concerns. Medication management will ensure that all of your medications are consistent with each other and with you.',
      },
      {
        name: 'keywords',
        content:
          'VivMeds Pharmacy, Vivmeds, vivmeds, viv-meds, pharmacy, compounding services, covid-19',
      },

      // Schema.org markup for Google+
      { itemprop: 'name', content: 'VivMeds' },
      { itemprop: 'description', content: 'VivMeds Pharmacy' },
      {
        itemprop: 'image',
        content: 'https://vivmeds.com/vivmedscard.png',
      },

      // Twitter Card data
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@vivmeds' },
      { name: 'twitter:title', content: 'VivMeds Pharmacy' },
      { name: 'twitter:url', content: 'https://vivmeds.com' },
      {
        name: 'twitter:image',
        content: 'https://vivmeds.com/vivmedscard.png',
      },
      {
        name: 'twitter:description',
        content:
          'At Vivmeds Pharmacy , we work directly with you to determine where there may be medication-related problems or concerns. Medication management will ensure that all of your medications are consistent with each other and with you.',
      },
      { name: 'twitter:app:country', content: 'NG' },
      { name: 'twitter:creator', content: '@vivmeds' },
      { name: 'twitter:domain', content: '@vivmeds' },
      {
        name: 'twitter:image:src',
        content: 'https://vivmeds.com/vivmedscard.png',
      },

      // Open Graph data
      { property: 'og:title', content: 'VivMeds Pharmacy' },
      { property: 'og:url', content: 'https://vivmeds.com' },
      {
        property: 'og:image',
        content: 'https://vivmeds.com/vivmedscard.png',
      },
      {
        property: 'og:description',
        content:
          'At Vivmeds Pharmacy , we work directly with you to determine where there may be medication-related problems or concerns. Medication management will ensure that all of your medications are consistent with each other and with you',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'VivMeds Pharmacy' },
      {
        hid: 'og:type',
        property: 'og:site_name',
        content: 'VivMeds Pharmacy',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'VivMeds Pharmacy',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&family=PT+Serif&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/plugins/carousel',
      ssr: false,
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
  generate: {
    fallback: true,
  },
}
