// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
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
