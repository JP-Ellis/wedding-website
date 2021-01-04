<template>
  <div id="app">
    <Landing />
    <Location />
    <Time />
    <Rsvp />
    <Details />
  </div>
</template>

<style lang="scss">
@import "@fontsource/poiret-one/latin-400.css";
#app {
  width: 100vw;
  overflow-x: hidden;
  background-color: #f9ffff;
  font: {
    family: "Poiret One";
    weight: 400;
    size: 1.2rem;
  }
  padding-bottom: 2rem;
}

body {
  overflow-x: hidden;
}

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

@import "@fontsource/alex-brush/latin-400.css";
h1 {
  margin-block-start: 0em;
  margin-block-end: 1em;

  font: {
    family: "Alex Brush";
    weight: 400;
    size: 1.7rem;
  }
}

.two-column {
  display: flex;
  flex: {
    wrap: wrap;
  }
  column-gap: 1rem;
  justify-content: space-around;

  & > div {
    padding: 1rem 0.5rem;
    flex: 1 1 500px;
    text-align: center;
    max-width: 700px;
  }

  & > div:nth-child(1) {
    padding-top: 0rem;
  }

  & > div:nth-last-child(1) {
    padding-bottom: 0rem;
  }
}

p span {
  display: inline-block;
}
</style>

// Form styling
<style lang="scss">
.formulate-input {
  display: flex;
  flex: {
    direction: column;
    wrap: wrap;
  }
  margin: {
    top: 0.5rem;
    bottom: 0.5rem;
  }

  // Wrapper around label/input pairs
  .formulate-input-wrapper {
    display: flex;
    flex: {
      wrap: wrap;
    }
    align-items: center;
  }

  .formulate-input-label--before {
    flex: 1 0 150px;
    max-width: 300px;
    margin: {
      left: 0.3rem;
      bottom: 0.2rem;
    }
    padding: {
      right: 0.5rem;
    }
  }

  // Used with radio labels
  .formulate-input-label--after {
    flex: 1 0 150px;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    padding: 0.3rem;
    font: {
      size: 90%;
      family: inherit;
    }
    border: {
      width: 2px;
      style: solid;
      radius: 1ex;
      color: #3c5947;
    }

    &:active,
    &:focus {
      border: {
        color: #b2def0;
      }
      outline: {
        style: none;
      }
    }
  }

  input[type="radio"] {
    margin: {
      top: 0.5rem;
      bottom: 0.5rem;
      right: 0.5rem;
    }
  }

  .formulate-input-group-item {
    margin: {
      top: 0.5rem;
      bottom: 0.5rem;
    }
  }

  // Errors
  .formulate-input-errors {
    margin: {
      top: 0.2rem;
      bottom: 0rem;
      left: 0rem;
      right: 0rem;
    }

    padding: {
      left: 330px;
    }

    .formulate-input-error {
      &::marker {
        content: none;
      }

      font: {
        size: 60%;
      }
      color: darken(#d7bd98, 60%);

      text-align: left;
    }
  }

  // Buttons
  .formulate-input-element--submit {
    width: 100%;
    text-align: center;

    button {
      padding: {
        top: 0.5rem;
        bottom: 0.5rem;
        left: 1rem;
        right: 1rem;
      }
      background: {
        color: #d7bd98;
      }
      border: {
        style: none;
        radius: 1ex;
      }
      font: {
        size: 130%;
        family: "Poiret One";
        // family: inherit;
      }
      color: darken(#d7bd98, 60%);

      &:hover {
        background: {
          color: lighten(#d7bd98, 5%);
        }
      }

      &:focus {
        outline: none;
        background: {
          color: darken(#d7bd98, 5%);
        }
      }
    }
  }
}

.processing {
  span {
    padding-right: 0.5rem;
  }
  button {
    &::after {
      content: "";
      display: inline-block;
      border: 0.2rem solid #f3f3f3;
      border-radius: 50%;
      border-top: 0.2rem solid #70885d;
      width: 1rem;
      height: 1rem;
      animation: spin 2s linear infinite;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>