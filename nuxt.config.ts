import UnpluginComponentsVite from "unplugin-vue-components/vite";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";

export default defineNuxtConfig({
  devtools: { enabled: true },
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
  css: ["~/assets/css/main.css"],
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
});
