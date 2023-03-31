<template>
  <img src="./logo.png">
  <Hello
    :name="name"
    :count="count"
    @click-msg="clickMsg"
    @change-name="changeName"
  ></Hello>
  <p>
    Clicked {{ clickedCount }} times.
  </p>
</template>

<script lang="ts" src="./app.ts"></script>

<style scoped>
img {
  width: 200px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
