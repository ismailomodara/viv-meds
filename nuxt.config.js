import getSiteMeta from './utils/getSiteMeta'
const meta = getSiteMeta()

export default {
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    __dangerouslyDisableSanitizersByTagID: {
      'gtag-script2': ['innerHTML'],
      'gtag-script1': ['innerHTML'],
    },

    script: [
      // Global site tag (gtag.js) - Google Analytics
      {
        hid: 'gtag-script1',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-1G2784MSCD',
        defer: true,
      },
      {
        hid: 'gtag-script2',
        innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-1G2784MSCD');`,
        type: 'text/javascript',
        charset: 'utf-8',
      },
    ],
    title: 'Vivmeds Pharmacy | 303 Unicorn Blvd Suite 280 Denton TX 76210',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { name: 'author', content: 'VivMeds Pharmacy' },
      { name: 'theme-color', content: '#6A8B2C' },
      {
        name: 'description',
        content:
          'Vivmeds Pharmacy in Denton TX provides disease management, affordable prescription medications and compounding services in a compassionate environment.',
      },
      {
        name: 'keywords',
        content:
          'VivMeds Pharmacy, Vivmeds, vivmeds, viv-meds, pharmacy, compounding services, covid-19, Pharmacy in Denton TX,  disease management, affordable prescription medications, compassionate environment, affordable prescription medications and compounding services',
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
          'Vivmeds Pharmacy in Denton TX provides disease management, affordable prescription medications and compounding services in a compassionate environment.',
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
          'Vivmeds Pharmacy in Denton TX provides disease management, affordable prescription medications and compounding services in a compassionate environment.',
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
  modules: ['nuxt-compress'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  sitemap: {
    hostname: 'https://vivmeds.com',
    gzip: true,
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: false, // disables the icon module
  },
  generate: {
    fallback: true,
  },
}
