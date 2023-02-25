<script setup>
import useAssets from "~/handleImages";

const { project } = defineProps({
  project: Object,
});

const getAssetSrc = (name) => {
  const path = `/assets/img/${name}`;
  console.log(path)
  return useAssets(path);
};

const showIcons = ref(false);
</script> 
 
<template>
  <div class="card-body">
    <div
      @mouseenter="showIcons = true"
      @mouseleave="showIcons = false"
      class="
        upper-box
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <div class="d-flex justify-content-center align-items-center w-100">
        <img :src="project.img" alt="alt" class="project-image" />
        <p class="ml-3 project-name">{{ project.name }}</p>
      </div>

      <div
        v-if="showIcons"
        class="
          buttons-container
          d-flex
          justify-content-center
          align-items-center
        "
      >
      <NuxtLink :to="project.link" target="_blank">
        <img src="~/assets/img/link.svg" alt="" class="cursor-pointer" />
      </NuxtLink>
        <NuxtLink :to="project.githubRepo" target="_blank">
        <img
          src="~/assets/img/github.png"
          alt=""
          class="ml-3 cursor-pointer"
          style="width: 40px"
        />
        </NuxtLink>
      </div>
    </div>

    <div class="d-flex flex-wrap p-3 mt-2">
      <ProjectsTag v-for="tag in project.tags" :key="tag.name" :tag="tag" />
    </div>
  </div>
</template>



<style lang="sass" scoped>
.card-body
  height: 300px
  border: 1px solid #ddd
  box-shadow: -10px 10px 5px 0px rgba(238,238,238,1)
  // box-shadow: 20px 20px 50px 15px grey
  border-radius: 5px
  &:hover
    transform: scale(1.1)
    transition: 0.5s
.upper-box
  height: 65%
  border-bottom: 1px solid #ddd
.project-name
  font-size: 18px
  font-weight: 600
.preview-btn, .source-code-btn
  font-size: 12px
  border-radius: 50px
  padding: 10px 15px
  font-weight: bold
.preview-btn
  color: #5b5b5b
  background-color: #eee
  margin-right: 20px
  &:hover
    color: #c4d1b0
    transition: 0.3s
.source-code-btn
  background-color: #474559
  color: #fff
  &:hover
    background-color: #c4d1b0
    transition: 0.3s
.buttons-container
  background-color: rgba(0, 0, 0, 0.7)
  position: absolute
  width: 100%
  height: 65%
  z-index: 2
  animation: bottomToTop 0.7s

.project-image
  width: 50px
  height: auto

@keyframes bottomToTop
  0%
    transform: translateY(100px)
    height: 0
  100%
    transform: translateY(0)
    height: 65%

@-moz-keyframes bottomToTop
  0% 
  opacity: 0
  100%  
  opacity: 1

@-webkit-keyframes bottomToTop
  0% 
  opacity: 1
  100%  
  opacity: 0
</style>