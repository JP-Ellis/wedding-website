<template>
  <div id="landing">
    <div class="invitation">
      <div>
        <span>You are invited</span>
        <span>to celebrate</span>
        <span>the wedding of</span>
      </div>
    </div>
    <div class="names"><div>Bec &amp; Josh</div></div>
    <div class="date">23<br />10<br />21</div>
    <div></div>
    <div></div>
  </div>
</template>

<style lang="scss">
@import "@fontsource/alex-brush/latin-400.css";
@import "@fontsource/josefin-sans/latin-700.css";

#landing {
  height: 100vh;
  min-height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & > div {
    width: auto;
    flex: 1 1 0px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .invitation {
    padding: 1rem;
    text-align: center;
  }

  .names {
    font: {
      family: "Alex Brush";
      weight: 400;
      size: 3rem;
    }

    text-align: center;
    padding-bottom: 1em;
  }

  .date {
    font: {
      family: "Josefin Sans";
      size: 6rem;
      weight: 700;
    }
    line-height: 85%;
    letter-spacing: -0.02ch;
    color: #d7bd98;
    text-align: center;

    &::before,
    &::after {
      content: url("~assets/images/leaf-circle.svg");
      width: 150vh;
      min-width: 1050px;
      height: 150vh;
      min-height: 1050px;
      margin: -50% 0;

      @media (width <= 600px) {
        width: 100vh;
        height: 100vh;
        min-width: auto;
        min-height: auto;
      }
    }

    &::before {
      float: right;
      margin-right: 10vw;

      @media (width <= 600px) {
        margin-right: 2vw;
      }
    }

    &::after {
      float: left;
      margin-left: 10vw;

      @media (width <= 600px) {
        margin-left: 2vw;
      }
    }
  }
}
</style>