<script setup>
let isFirstTextDisplayed = ref(true);
onMounted(() => {
  setInterval(() => {
    isFirstTextDisplayed.value = !isFirstTextDisplayed.value
  }, 3000);
});
</script>

<template>
  <div class="d-flex justify-content-between">
    <div class="col-6">
      <div class="d-flex align-items-baseline">
        <h1 class="mr-2">Hello World, I'm</h1>
       <span :class="isFirstTextDisplayed ? 'fade-in' : 'fade-out'" class="text-secondary font-style">Marwan Ahmed</span>
       <span :class="isFirstTextDisplayed ? 'fade-out' : 'fade-in'" class="text-secondary font-style">Frontend Developer</span>
      </div>
      <div class="mt-4">
        <p class="description">
          Building a successful product is a challenge. I am highly energetic in
          user experience design, interfaces and web development.
        </p>
      </div>
      <div class="d-flex mt-4 align-items-center">
        <div class="download-btn d-flex align-items-center cursor-pointer">
          <span>Download Resume</span>
        </div>
        <div class="github-btn cursor-pointer">Visit Github Account</div>
      </div>
    </div>
    <div class="col-4">
      <img
        class="cover-img"
        src="@/assets/images/man-working.jpeg"
        alt="man-working"
      />
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
.description
  color: #5b5b5b
.file-img
  width: 20px
  margin-right: 5px
.download-btn, .github-btn
  border-radius: 50px
  padding: 13px 29px
  font-weight: bold
  font-size: 14px
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