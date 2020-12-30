<template>
  <div class="container">
    <div class="left"></div>
    <div class="center">
      <div class="top">
        <div class="invitation">
          You are invited to celebrate the wedding of
        </div>
        <div class="names">Bec &amp; Josh</div>
      </div>
      <div class="middle">
        <div class="date">23<br />10<br />21</div>
      </div>
      <div class="bottom"></div>
    </div>
    <div class="right"></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  min-height: 900px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

// Left and right divs are used for the decorations
.left,
.right {
  height: 100vh;
  min-height: 900px;
  width: 30%;
  background-image: url("~assets/images/decoration.svg");
  background-repeat: no-repeat;
  background-size: auto 100%;
  // overflow: visible;
}

.left {
  margin-right: -30%;
  background-position: right;
}

.right {
  margin-left: -30%;
  background-position: left;
}

.top,
.center,
.bottom {
  flex: 1 1 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.middle {
  flex: 0 0 0px;
}

@import "@fontsource/alex-brush/400.css";
.names {
  font: {
    family: "Alex Brush";
    weight: 400;
    size: 3rem;
  }
}

@import "@fontsource/josefin-sans/700.css";
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
}
</style>