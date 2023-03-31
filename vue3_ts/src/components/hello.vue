<template>
  <div class="hello">

    <p v-if="errorMsg">{{errorMsg}}</p>

    <Suspense>
      <template #default>
        <Bar/>
      </template>
      <template #fallback>
        Loading Bar...
      </template>
    </Suspense>

    <Foo :fooData="settings.fooData"/>

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

<style scoped>
.hello > button {
  font-size: 30px;
}
</style>
