export default {
  target: "static",
  ssr: false,

  head: {
    title: "Bec and Josh",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  components: true,

  plugins: ["@/plugins/vue-formulate.ts", "@/plugins/gmap-vue.ts"],

  build: { transpile: [/^gmap-vue($|\/)/] },
};
