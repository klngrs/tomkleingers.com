// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: [
    '@builder.io/sdk-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils'
  ],

  runtimeConfig: {
    public: {
      builderIoApiKey: process.env.BUILDER_IO_API_KEY, // pub key ok for client
    }
  }
})
