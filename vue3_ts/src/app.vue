<template>
  <!--
  <Hello
    :name="name"
    :count="count"
    @click-msg="clickMsg"
    @change-name="changeName"
  ></Hello>
  <p>
    Clicked {{ clickedCount }} times.
  </p> -->
  <div>
    <div>
      DONE_FILTER:{{DONE_FILTER.DONE}}
    </div>
    <img src="./logo.png">

    <h1>Vue3 demo</h1>

    <h2>async component</h2>

    <h3>use `defineAsyncComponent`</h3>

    <Foo
      :width="fooSettings.width"
      :height="fooSettings.height"
      :color="fooSettings.color"
    />

    <h3>use `Suspense`</h3>

    <Suspense>
      <template #default>
        <Bar/>
      </template>
      <template #fallback>
        <Loading/>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style scoped>
img {
  width: 100px;
}
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
h2 {
  padding:10px 0;
  border-top: solid 1px #777;
}
h3 {
  color: #555;
}
</style>
