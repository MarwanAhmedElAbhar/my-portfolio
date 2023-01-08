<script setup>
const { tag } = defineProps({
  tag: Object,
});
</script>

<template>
  <p class="tag-style mr-2" :style="{ backgroundColor: tag.backgroundColor }">
    {{ tag.name }}
  </p>
</template>

<style lang="sass" scoped>
.tag-style
    color: white
    font-weight: 600
    padding: 3px 6px
    border-radius: 12px
    font-size: 12px
</style>
