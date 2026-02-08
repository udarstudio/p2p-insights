// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  runtimeConfig: {
    public: {
      firebase: {
        apiKey: 'AIzaSyAj_w9GxZWmznzmmr2R2ufMjbl9_Z7TJbQ',
        authDomain: 'p2p-insights-f0c2b.firebaseapp.com',
        projectId: 'p2p-insights-f0c2b',
        storageBucket: 'p2p-insights-f0c2b.firebasestorage.app',
        messagingSenderId: '394372418813',
        appId: '1:394372418813:web:aee6e8f6f7f77bca164294',
        measurementId: 'G-1KTGVEJK16'
      }
    }
  },
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },
  site: {
    url: 'https://p2pinsights.com'
  },
  sitemap: {},
  robots: {
    rules: [{ UserAgent: '*', Allow: '/' }]
  },
  app: {
    head: {
      title: 'P2P Insights',
      meta: [
        { name: 'description', content: 'P2P insights comparison website.' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})
