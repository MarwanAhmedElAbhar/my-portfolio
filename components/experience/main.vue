<script setup>
import data from "./data";

const experiences = computed(() => data);
</script>

<template>
  <div class="py-5 container">
    <h1 class="mb-5">Experiences</h1>
    <div
      class="timeline"
      v-for="experience in experiences"
      :key="experience.id"
    >
      <ExperienceContent :experience="experience" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
.timeline
  position: relative
  margin-left: 20px
</style>