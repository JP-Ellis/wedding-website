export default {
  target: "static",

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

  plugins: ["@/plugins/vue-formulate.ts", "@/plugins/vue2-google-maps.ts"],

  build: {
    transpile: [/^vue2-google-maps($|\/)/],
  },
};
