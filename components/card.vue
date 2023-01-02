<script setup>
const { project } = defineProps({
  project: Object,
});
</script> 
 
<template>
  <div class="card-body mr-5">
    <div class="upper-box d-flex flex-column justify-content-center align-items-center">
    <div class="d-flex justify-content-center align-items-center w-100">
      <img :src="project.img" alt="alt" />
      <p class="ml-3 project-name">{{ project.name }}</p>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3">
     <div class="btn preview-btn d-flex align-items-center cursor-pointer">
          Live Preview
        </div>
        <div class="btn source-code-btn cursor-pointer">Source Code</div>
    </div>
    </div>
    <div class="d-flex flex-wrap p-3 mt-2">
    <Tag v-for="tag in project.tags" :key="tag.name" :tag="tag" />
    </div>
  </div>
</template>



<style lang="sass" scoped>
.card-body
    height: 300px
    border: 1px solid #ddd
    box-shadow: -10px 10px 5px 0px rgba(238,238,238,1)
    border-radius: 5px
.upper-box
    height: 65%
    border-bottom: 1px solid #ddd    
.project-name
    font-size: 18px
    font-weight: 600
.preview-btn, .source-code-btn
  font-size: 12px 
  border-radius: 50px
  padding: 10px 25px
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
</style>