<script setup>
let isFirstTextDisplayed = ref(true);
const visitGithub = () => {
  window.open("https://github.com/MarwanAhmedElAbhar/");
};
onMounted(() => {
  setInterval(() => {
    isFirstTextDisplayed.value = !isFirstTextDisplayed.value;
  }, 3000);
});
</script>

<template>
  <div class="container">
    <div class="row align-items-center justify-content-between">
      <div class="col-md-6 col-12">
        <div class="row align-items-baseline no-gutters">
          <h1 class="mr-2 col-sm-12 col-md-auto">Hello World, I'm</h1>
          <span
            :class="isFirstTextDisplayed ? 'fade-in' : 'fade-out'"
            class="text-secondary font-style col-sm-12 col-md-auto"
            >Marwan Ahmed</span
          >
          <span
            :class="isFirstTextDisplayed ? 'fade-out' : 'fade-in'"
            class="text-secondary font-style col-sm-12 col-md-auto"
            >Frontend Developer</span
          >
        </div>
        <div class="mt-4">
          <p class="description">
            Care and Passion are the two words I relate to the most while
            building products for others. I also love coding with my cat.
          </p>
        </div>
        <div class="d-flex mt-4 align-items-center">
          <div
            class="btn download-btn d-flex align-items-center cursor-pointer"
          >
            Download Resume
          </div>
          <div class="btn github-btn cursor-pointer" @click="visitGithub">
            Visit Github Account
          </div>
        </div>
      </div>
      <div class="col-md-4 col-12">
        <img
          class="cover-img"
          src="~/assets/img/man-working.jpeg"
          alt="man-working"
        />
      </div>
    </div>
  </div>
</template>


<style lang="sass" scoped>
.font-style
  font-size: 28px
  font-weight: bold
.cover-img
  max-width: 100%
  height: auto
  @media (max-size: 768px)
    margin-top: 50px
.description
  color: #5b5b5b
.file-img
  width: 20px
  margin-right: 5px
.download-btn
  color: #5b5b5b
  background-color: #eee
  margin-right: 20px
  &:hover
    color: #c4d1b0
    transition: 0.3s
.github-btn
  background-color: #474559
  color: #fff
  &:hover
    background-color: #c4d1b0
    transition: 0.3s
.btn
  @media (max-width: 480px) 
    font-size: 12px
    padding: 11px 14px

.fade-in
  display: inline
  animation: fadeIn 2s

.fade-out
  display: none
  animation: fadeOut 2s

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

@-moz-keyframes fadeIn
  0% 
  opacity: 0
  100%  
  opacity: 1

@-webkit-keyframes fadeIn
  0% 
  opacity: 1
  100%  
  opacity: 0

@keyframes fadeOut
  0%
    opacity: 1
  100%
    opacity: 0

@-moz-keyframes fadeOut
  0% 
  opacity: 1
  100%  
  opacity: 0

@-webkit-keyframes fadeOut
  0% 
  opacity: 1
  100%  
  opacity: 0



</style>