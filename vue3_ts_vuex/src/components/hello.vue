<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <p>
      <input
        v-model="state.name"
        @change="changeName()"
        @keyup="changeName()"
      />
      <button @click="clickMsg()">{{count}}+</button>
    </p>
  </div>
</template>

<script lang="ts" src="./hello.ts"></script>
<style lang="scss" scoped>
button {
  font-size: 30px;
}

</style>
<!--
<style lang="scss" src="./hello.scss" scoped></style>
-->
