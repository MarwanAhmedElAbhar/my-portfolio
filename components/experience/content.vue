<script setup>
const { experience } = defineProps({
  experience: {
    type: Object,
  },
});
</script>

<template>
  <div class="content">
    <div class="d-flex align-items-center mb-2 flex-wrap">
      <img :src="experience.logo" alt="company-logo" class="logo-size mr-2">
      <div class="d-flex align-items-baseline">
      <p class="experience-name mr-2">{{ experience.name }}</p>
      <p class="experience-period">{{ experience.period }}</p>
      </div>
    </div>
    <p class="experience-description">{{ experience.description }}</p>
  </div>
</template>

<style lang="sass" scoped>
.content
    border-left: 3px solid #474559
    padding-left: 30px
    padding-bottom: 50px
    &::before
        content: ''
        width: 25px
        height: 25px
        background-color: #474559
        border-radius: 50%
        position: absolute
        left: -10px
.experience-name, .experience-period
    color: #474559
    font-weight: bold
.logo-size
  width: 80px
.experience-name
    font-size: 26px
.experience-period
    font-size: 16px
.experience-description
    font-size: 18px
    color: #5b5b5b
    line-height: 1.5
</style>