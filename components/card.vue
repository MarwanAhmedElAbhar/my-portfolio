<script setup>
const { project } = defineProps({
  project: Object,
});
</script> 
 
<template>
  <div class="card-body mr-5">
    <div class="d-flex justify-content-center align-items-center w-100 upper-box">
      <img :src="project.img" alt="alt" />
      <p class="ml-2 project-name">{{ project.name }}</p>
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
    color: #474559    
</style>