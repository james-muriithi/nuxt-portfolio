import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        class: "dark",
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "author",
          name: "author",
          content: "James Muriithi",
        },
        {
          hid: "theme",
          name: "theme-color",
          content: "#0a192f",
        },
        {
          hid: "google-site-verification",
          name: "google-site-verification",
          content: "",
        },
        { hid: "og-title", property: "og:title", content: "James Muriithi" },
        {
          hid: "og-type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "robots",
          name: "robots",
          content: "index, follow",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  modules: ["@vueuse/nuxt", "nuxt-vuefire"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    optimizeDeps: { exclude: ["fsevents"] },
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
        ],
      }),
      Icons({
        autoInstall: true,
      }),
    ],
  },
  vuefire: {
    config: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
});
