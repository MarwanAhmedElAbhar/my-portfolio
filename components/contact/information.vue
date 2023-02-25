<script setup>
</script>

<template>
  <div class="contact-info">
    <div class="mb-3">
      <p class="info-header">Interested to work together?</p>
      <p class="info-header">Get in touch.</p>
    </div>
    <p class="info-text">
      Would be my pleasure to serve if the right project comes along, Feel free
      to contact me.
    </p>
    <div class="details-container">
      <div class="d-flex align-items-center px-2 word-break">
        <img src="~/assets/img/map.svg" alt="map-image" />
        <p class="ml-2 info-details">Mohandeseen, Giza, Egypt</p>
      </div>
      <div class="d-flex align-items-center mt-4 px-2 word-break">
        <img src="~/assets/img/mail.svg" alt="mail-image" />
        <p class="ml-2 info-details">marwan.a.elabhar@gmail.com</p>
      </div>
      <div class="d-flex align-items-center mt-4 px-2 word-break">
        <img src="~/assets/img/phone.svg" alt="phone-image" />
        <p class="ml-2 info-details">+201000632144</p>
      </div>
      <div class="d-flex align-items-center mt-4 px-2 word-break">
        <img src="~/assets/img/linkedin.svg" alt="linkedin-image" />
        <a
          class="ml-2 info-details linkedin-profile"
          href="https://www.linkedin.com/in/marwanelabhar"
          target="_blank"
          >LinkedIn Profile</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.contact-info
  background: #f7f7ff
  padding: 30px
.info-header
  font-size: 28px
  font-weight: 600
.info-text
  color: #555
  font-weight: 400
  margin-top: 25px
.info-details
  font-size: 16px
  font-weight: 500
  line-height: 1.3
.details-container
  margin-top: 50px
.linkedin-profile
  color: #000
</style>