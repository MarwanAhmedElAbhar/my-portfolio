<script setup>
import data from "./data"

const projects = computed(() => data)
</script> 
 
<template>
  <div class="py-5 container">
    <h1 class="mb-4">Projects</h1>
    <div class="row align-items-center justify-content-center no-gutters gap-30">
      <ProjectsCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-md-3 col-sm-6 col-12 my-2"
      />
    </div>
  </div>
</template>



<style lang="sass" scoped>
.gap-30
  gap: 30px
</style>