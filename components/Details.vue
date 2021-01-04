<template>
  <div id="details" class="two-column">
    <div>
      <h1>Accommodation</h1>
      <p>Accommodation located on the estate has already been booked</p>
      <p>
        Once you have made arrangements, please let us know where you will be
        staying so we can suggest shared travel with other guests.
      </p>

      <FormulateForm class="rsvp-form" v-model="formValues" @submit="sendRsvp">
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
        />
      </FormulateForm>
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
</script>
