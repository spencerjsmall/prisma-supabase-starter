// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@prisma/nuxt', '@nuxt/ui'],  
  runtimeConfig: {
    public: {
      ENV: import.meta.env.NODE_ENV,
    },
  },
  // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/prisma-nuxt-module#resolving-typeerror-failed-to-resolve-module-specifier-prismaclientindex-browser
  vite: {
    resolve: {
      alias: {
        '.prisma/client/index-browser': './node_modules/.prisma/client/index-browser.js',
      },
    },
  },
})
