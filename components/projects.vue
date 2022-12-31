<script setup>
import projects from "../projects"
</script> 
 
<template>
  <div class="py-5">
    <h2 class="mb-4">Projects</h2>
    <div class="row align-items-center justify-content-center no-gutters">
      <Card
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-md-3 col-sm-6 col-12 my-2"
      />
    </div>
  </div>
</template>



<style lang="sass" scoped>
</style>