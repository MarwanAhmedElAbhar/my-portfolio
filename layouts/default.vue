<template>
  <div class="px-50">
    <header>
      <nav>
        <ul class="d-flex justify-content-center">
          <li><NuxtLink to="#about">About</NuxtLink></li>
          <li><NuxtLink to="#projects">Projects</NuxtLink></li>
          <li><NuxtLink to="#experiences">Experiences</NuxtLink></li>
          <li><NuxtLink to="#contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.px-50
  padding: 0px 50px
nav
  position: sticky
  width: 100%
  ul
    list-style-type: none
    margin: 0
    padding: 15px
    li
      font-size: 17px
      font-weight: bold
      a
        color: rgba(0,0,0,.5)
        text-decoration: none
        padding: 14px
        &:hover
          color: #c4d1b0
          transition: 0.3s
</style>