<template>
  <div>
    <noscript>
      <div>
        <p>
          We're sorry but this website doesn't work properly without JavaScript
          enabled.
        </p>
        <p>Please enable it to continue.</p>
      </div>
    </noscript>
    <Nuxt />
  </div>
</template>

<style lang="scss" scoped>
noscript {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background: {
    color: #d7bd98;
  }

  div {
    text-align: center;
    line-height: 100%;
    font: {
      size: 1.5rem;
      family: "Comfortaa";
    }
  }
}
</style>