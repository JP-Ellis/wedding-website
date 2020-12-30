import Vue from "vue";
import * as GmapVue from 'gmap-vue'

Vue.use(GmapVue, {
  load: {
    key: "AIzaSyBYGL06_ul909-rUUMh6vXqPIlmypY1zBA",
    libraries: "places",
  },
  installComponents: true,
});
