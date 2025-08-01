// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/tailwind.css'],

  modules: [
    '@builder.io/sdk-vue/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    'shadcn-nuxt'
  ],

  runtimeConfig: {
    public: {
      builderIoApiKey: process.env.BUILDER_IO_API_KEY, // pub key ok for client
    }
  },

  tailwindcss: {
    editorSupport: true,
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
