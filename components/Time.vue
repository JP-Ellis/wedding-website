<template>
  <div class="container">
    <div class="left">Lorem ipsum dolor sit amet</div>
    <div class="right">
      Ceremony commences at 4pm <br />
      Dinner and dancing to follow
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  margin: {
    top: 2rem;
    bottom: 2rem;
  }
}

.left,
.right {
  flex: 1 1 0px;
  text-align: center;
}
</style>