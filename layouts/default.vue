<template>
  <div class="px-40">
    <header>
      <nav>
        <ul class="d-flex justify-content-center">
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
.px-40
    padding: 0px 40px
nav
    position: sticky
    width: 100%
    ul
        list-style-type: none
        margin: 0
        padding: 15px
        li
            font-size: 17px
            a
                color: rgba(0,0,0,.5)
                text-decoration: none
                padding: 14px
                &:hover
                    color: #c4d1b0
                    transition: 0.3s
</style>