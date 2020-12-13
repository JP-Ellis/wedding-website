<template>
  <div class="container">
    <div v-if="!submitted">Please RSVP by <u>23 July 2021</u></div>

    <div class="rsvp-form-wrapper" v-if="!submitted">
      <FormulateForm class="rsvp-form" v-model="formValues" @submit="sendRsvp">
        <FormulateInput
          name="name"
          type="text"
          label="Name"
          placeholder="Your name"
          validation="required"
        />
        <FormulateInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Your email address"
          validation="required|email"
        />
        <FormulateInput
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="Your phone address"
          validation="required|matches:/^\+?[0-9]+$/"
        />
        <FormulateInput
          name="attending"
          type="radio"
          label="Attending"
          validation="required"
          :options="{
            yes: 'Yes, I will be attending',
            no: 'No, I won\'t be attending',
          }"
          v-model="attending"
        />

        <div v-if="attending == 'yes'">
          <FormulateInput
            name="dietary-requirements"
            type="textarea"
            label="Dietary Requirements"
            placeholder="Your dietary requirements"
          />
          <FormulateInput
            name="guest"
            type="radio"
            label="Guest"
            validation="required"
            :options="{
              yes: 'Yes, I will be bringing a guest',
              no: 'No, I won\'t be bringing a guest',
            }"
            v-model="guest"
          />

          <FormulateInput type="group" name="guest" v-if="guest == 'yes'">
            <FormulateInput
              name="name"
              type="text"
              label="Name"
              placeholder="Guest's name"
              validation="required"
            />
            <FormulateInput
              name="dietary-requirements"
              type="textarea"
              label="Guest's Dietary Requirements"
              placeholder="Guest's dietary requirements"
            />
          </FormulateInput>
        </div>

        <FormulateInput type="submit" name="RSVP" />
      </FormulateForm>
    </div>

    <div v-else-if="submitError"></div>
    <div v-else>
      <div v-if="attending == 'no'" class="submit-message">
        <p>
          We are sorry to hear you cannot celebrate our wedding with us. We
          thank you for letting us know.
        </p>
        <p>If things change and you can attend, please RSVP again.</p>
      </div>
      <div v-if="attending == 'yes'">
        Thank for the RSVP. We looking forward to seeing you soon.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: {
    top: 1rem;
    bottom: 1rem;
  }
  text-align: center;
}

.rsvp-form {
  padding: 2em;
}
</style>

<style lang="scss">
.formulate-input {
  display: flex;
  flex-direction: column;
  margin: {
    top: 1rem;
    bottom: 1rem;
  }

  // Wrapper around label/input pairs
  .formulate-input-wrapper {
    display: flex;
  }

  .formulate-input-label {
    width: 50vh;
    min-width: 300px;
    text-align: right;
    padding: {
      right: 0.5rem;
      top: 0.3rem;
    }
  }

  // Used with radio labels
  .formulate-input-label--after {
    text-align: left;
    width: auto;
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
      top: 0rem;
      bottom: 0rem;
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
        family: inherit;
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
</style>

<script lang="ts">
import Vue from "vue";

async function sendRsvp(data) {}

export default Vue.extend({
  data() {
    return {
      submitted: false,
      submitError: false,
      attending: null,
      guest: null,
      formValues: {},
    };
  },

  methods: {
    sendRsvp(data) {
      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbxhFyJ7y6qetFepFe8vJg3KnBkouh3TC5r1Q50vcnCRWT2hqNUkvKK4/dev";

      fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          this.submitted = true;
          return response.json();
        })
        .then((data) => {
          if (data["result"] == "success") {
            this.submitError = false;
          } else {
            this.submitError = true;
          }
        })
        .catch((error) => {
          this.submitError = true;
        });
    },
  },
});
</script>