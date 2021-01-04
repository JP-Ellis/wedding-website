<template>
  <div id="location" class="two-column">
    <div class="text">
      <div class="leaf leaf1"></div>
      <div class="leaf leaf2"></div>
      <div class="leaf leaf3"></div>
      <div class="leaf leaf4"></div>
      <div class="leaf leaf5"></div>
      <div>
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
    </div>
    <div>
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

<style lang="scss">
#location {
  z-index: 900;
  background-color: #f9ffff;
  margin-bottom: 1rem;
  align-items: center;

  div {
    max-width: 100%;
  }

  .text {
    position: relative;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    div :not(.leaf) {
      z-index: 100;
    }

    .leaf {
      @media (width < 1025px) {
        display: none;
      }

      position: absolute;
      z-index: 0;
      width: 300px;
      height: 300px;

      background: {
        size: contain;
        repeat: no-repeat;
      }
    }

    .leaf1 {
      background-image: url("~assets/images/branch-4.png");

      top: 0px;
      right: -35px;
      transform: rotate(-90deg) scaleX(-1);
    }

    .leaf2 {
      background-image: url("~assets/images/branch-4.png");

      bottom: 0px;
      right: -80px;
      transform: rotate(-85deg) scale(0.9);
    }

    .leaf3 {
      background-image: url("~assets/images/branch-2.png");

      top: -50px;
      right: -170px;
      transform: rotate(-60deg);
    }

    .leaf4 {
      background-image: url("~assets/images/branch-3.png");

      bottom: 80px;
      right: -150px;
      transform: rotate(-75deg);
    }
  }
}

.vue-map-container {
  width: 100%;
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
