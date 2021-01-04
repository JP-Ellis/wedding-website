<template>
    <Landing />
    <Location />
    <Time />
    <Rsvp />
  </div>
</template>

<style lang="scss" scoped>
@import "@fontsource/comfortaa/latin-300.css";
@import "@fontsource/comfortaa/latin-700.css";
.app {
  width: 100vw;
  max-width: 2000px;
  background-color: #f9ffff;
  font: {
    family: "Comfortaa";
    weight: 300;
  }
  padding-bottom: 2rem;
}
</style>

<style lang="scss">
a {
  color: black;
  font: {
    weight: 700;
  }
  text-decoration: {
    line: underline;
    // thickness: 1pt;
  }
}

a[href^="http://"]:not([href*="becandjoshadventures.com"]),
a[href^="https://"]:not([href*="becandjoshadventures.com"]),
a[href^="//"]:not([href*="becandjoshadventures.com"])
{
  &::after {
    content: "";
    display: inline-block;
    background-image: url("~assets/images/external-link.svg");
    background-size: 100%;
    width: 0.5em;
    height: 0.5em;
    margin-bottom: 0.3em;
  }
}
</style>