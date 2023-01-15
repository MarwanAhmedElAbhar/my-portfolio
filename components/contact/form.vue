<script setup>
</script>

<template>
  <form
    action="mailto:marwan.a.elabhar@gmail.com"
    method="get"
    class="form-container"
  >
    <div class="row">
      <div class="col-lg-6 col-12">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          class="w-100 form-control"
        />
      </div>
      <div class="col-lg-6 col-12">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          class="w-100 form-control"
        />
      </div>
      <div class="col-12">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Body"
          class="w-100 form-control"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end col-12">
        <input
          class="btn submit-input cursor-pointer"
          type="submit"
          name="submit"
          value="Submit"
        />
      </div>
    </div>
  </form>
</template>

<style lang="sass" scoped>
.form-container
  padding: 30px
.form-control
  outline: none
  box-shadow: none
  border: 1px solid #ced4da
  border-radius: 4px
  font-weight: bold
  font-size: 16px
  color: #333
  padding: 10px
  margin-bottom: 35px
  &:focus, &:hover, &:active
    border: 1px solid #c4d1b0
  &:-ms-input-placeholder, &::placeholder
    color: red
    opacity: 1
input.form-control
  height: 40px
textarea.form-control
  font-family: sans-serif
  resize: none
.submit-input
  border: none
  background: #c4d1b0
  color: #fff
  &:hover
    color: #eee
    background: #495057
    transition: all 0.4s ease
::placeholder 
  color: rgba(0, 0, 0, 0.4)
  opacity: 1
:-ms-input-placeholder
  color: rgba(0, 0, 0, 0.4)
::-ms-input-placeholder
  color: rgba(0, 0, 0, 0.4)

</style>