import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.NODE_ENV === 'production' ? "http://localhost:8888" : "http://localhost:8888",
    },
  },
  css: ["@/assets/styles/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": "false",
    },
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css",
      },
    ],
  },
  buildModules: ["@nuxtjs/tailwindcss"],
  typescript: {
    strict: true
  },
})
