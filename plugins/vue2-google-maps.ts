import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBYGL06_ul909-rUUMh6vXqPIlmypY1zBA",
    libraries: "places",
  },
});
