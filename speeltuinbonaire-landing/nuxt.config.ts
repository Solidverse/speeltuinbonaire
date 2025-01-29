import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/eslint", "@nuxt/image", "@nuxt/icon"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: "Speeltuin Bonaire Hoogvliet - Website In Aanbouw",
      meta: [
        {
          name: "description",
          content: "Speeltuin Bonaire Hoogvliet - Website In Aanbouw",
        },
      ],
      link: [
        { rel: "icon", href: "/favicon.ico" },
        // Voeg hier andere link-instellingen toe, zoals de favicon
      ],
    },
  },
});
