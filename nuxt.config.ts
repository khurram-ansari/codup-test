// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/scss/main.scss"],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      APIbaseURL:
        process.env.API_BASE_URL || "https://fakestoreapi.com/products",
    },
  },

  modules: ["@nuxt/image", "@nuxt/icon", "@pinia/nuxt"],
});