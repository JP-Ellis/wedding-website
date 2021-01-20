<template>
  <div id="rsvp">
    <div class="rsvp-notice" v-if="!submitted">
      Répondez s'il vous plaît by <u>26 July 2021</u>
    </div>

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
            name="has-guest"
            type="radio"
            label="Guest"
            validation="required"
            :options="{
              yes: 'Yes, I will be bringing a guest',
              no: 'No, I won\'t be bringing a guest',
            }"
            v-model="hasGuest"
          />

          <FormulateInput type="group" name="guest" v-if="hasGuest == 'yes'">
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

        <FormulateInput
          type="submit"
          name="RSVP"
          v-bind:class="{ processing: processing }"
          v-bind:disabled="processing"
        />
      </FormulateForm>
    </div>

    <div v-else-if="submitError" class="submit-message submit-error">
      There was an error processing the RSVP.
    </div>
    <div v-else class="submit-message">
      <div v-if="attending == 'no'">
        <p>
          We are sorry to hear you cannot celebrate our wedding with us. We
          thank you for letting us know.
        </p>
        <p>If things change and you can attend, please RSVP again.</p>
      </div>
      <div v-if="attending == 'yes'">
        Thank for the <span class="font-small-caps">RSVP</span>. We looking
        forward to seeing you soon.
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#rsvp {
  display: flex;
  flex-direction: column;
  margin: {
    top: 1rem;
    bottom: 1rem;
  }

  background-color: #70885d55;
  border: {
    top: {
      style: solid;
      color: #70885d;
    }
    bottom: {
      style: solid;
      color: #70885d;
    }
  }
}

.rsvp-notice {
  text-align: center;
  margin: 1rem;

  font: {
    size: 1.5rem;
  }
}

.rsvp-form-wrapper {
  margin: {
    left: auto;
    right: auto;
  }
}

.rsvp-form {
  margin: 1rem;
  display: flex;
  flex-direction: column;
  max-width: 700px;
}

.submit-message {
  padding: 1rem;

  div {
    margin: 0 auto;
    max-width: 700px;
  }
}

.submit-error {
  color: darken(red, 40%);
  background-color: #aa000033;
}
</style>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      processing: false,
      submitted: false,
      submitError: false,
      attending: null,
      hasGuest: null,
      formValues: {},
    };
  },

  methods: {
    async sendRsvp(data) {
      this.processing = true;

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbxhFyJ7y6qetFepFe8vJg3KnBkouh3TC5r1Q50vcnCRWT2hqNUkvKK4/exec";

      await fetch(scriptUrl, {
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
          console.log("Error: ", error);
          this.submitted = true;
          this.submitError = true;
        });

      this.processing = false;
    },
  },
});
</script>