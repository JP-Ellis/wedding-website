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
    top: 1rem;
    bottom: 1rem;
  }

  flex: {
    wrap: wrap;
  }
}

.left,
.right {
  margin: 1rem;
  flex: 1 1 350px;
  text-align: center;
}
</style>