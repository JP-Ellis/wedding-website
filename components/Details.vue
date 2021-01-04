<template>
  <div id="details" class="two-column">
    <div>
      <h1>Accommodation</h1>
      <p>Accommodation located on the estate has already been booked</p>
      <p>
        Once you have made arrangements, please let us know where you will be
        staying so we can suggest shared travel with other guests.
      </p>

      <div v-if="!submitted">
        <FormulateForm
          class="accommodation-form"
          v-model="formValues"
          @submit="sendAccommodation"
        >
          <FormulateInput
            name="name"
            type="text"
            label="Name"
            placeholder="Your name"
            validation="required"
          />
          <FormulateInput
            name="accommodation"
            type="textarea"
            label="Accommodation"
            placeholder="Your accommodation details"
          />

          <FormulateInput
            type="submit"
            name="Submit"
            v-bind:class="{ processing: processing }"
            v-bind:disabled="processing"
          />
        </FormulateForm>
      </div>
      <div v-else-if="submitError" class="submit-message submit-error">
        There was an error processing the form.
      </div>
      <div v-else class="submit-message">
        Thank you for letting us know of your accommodation details.
      </div>
    </div>
    <div>
      <h1>Overseas Travel</h1>
      <p>
        For those travelling from overseas, we hope that Australian borders will
        open in time for you to join us on our special day.
      </p>
      <p>
        At present, only permanent residents, citizens and special exemptions
        are allowed entry. The latest details can be found at the
        <a
          href="https://covid19.homeaffairs.gov.au/coming-australia"
          target="_blank"
          referrerpolicy="no-referrer"
          rel="noreferrer external"
          >Australian Home Affairs Website</a
        >.
      </p>
      <p>
        If travel restrictions ease, it is likely that all incoming travellers
        will require a COVID-19 vaccine.
      </p>
    </div>
    <div>
      <h1>Contact</h1>
      <p>
        Rebecca Sullivan &amp; Joshua Ellis <br />
        611/77 Queens Rd <br />
        Melbourne VIC 3004 <br />
      </p>
      <p>
        <a href="tel:0061429024111">+61 429 024 111 (Josh)</a><br />
        <a href="tel:0061407577813">+61 407 577 813 (Bec)</a>
      </p>
      <p>
        <a href="mailto:josh@jpellis.me">josh@jpellis.me</a><br />
        <a href="mailto:becsulllivan1993@gmail.com"
          >becsullivan1993@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>

<style lang="scss">
#details {
  justify-items: center;
  align-items: baseline;

  & > div {
    text-align: left;
  }
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
      formValues: {},
    };
  },

  methods: {
    async sendAccommodation(data) {
      this.processing = true;

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbxhFyJ7y6qetFepFe8vJg3KnBkouh3TC5r1Q50vcnCRWT2hqNUkvKK4/exec";

      await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("response: ", response);
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
