import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false, // SPAモード
  target:"static",
  runtimeConfig: {},
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
