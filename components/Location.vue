<template>
  <div class="container">
    <div class="left">
      Celebration will be held at<br />
      <a
        href="https://www.sevilleestate.com.au/"
        target="_blank"
        referrerpolicy="no-referrer"
        rel="noreferrer external"
      >
        Seville Estate
      </a>
    </div>
    <div class="right">
      <GmapMap :center="center" :zoom="zoom">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
        />
      </GmapMap>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: {
    bottom: 2rem;
  }
}

.left {
  flex: 1 1 0px;
  text-align: center;
  margin: auto;
  line-height: 200%;
}

.right {
  flex: 1 1 0px;
  text-align: center;
  width: 50%;
}

.vue-map-container {
  width: 90%;
  min-width: 500px;
  height: 500px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      center: {
        lat: -37.7888173,
        lng: 145.4732921,
      },
      zoom: 13,
      markers: [
        {
          title: "Seville Estate",
          position: {
            lat: -37.7888173,
            lng: 145.4732921,
          },
        },
      ],
    };
  },
});
</script>
