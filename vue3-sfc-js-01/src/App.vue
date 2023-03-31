<script>
  // tsでないと未importエラーがでない
  import { defineComponent, ref } from "vue";
  import Counter from "./components/Counter.vue";

  export default defineComponent({
    components: {
      Counter,
    },
    setup() {
      const count = ref(10);
      const countUp = () => (count.value = count.value + 10);
      return { count, countUp };
    },
  });
</script>

<template>
  <p>(App.vue)</p>
  <button @click="countUp">+</button>
  <Counter :count="count" />
</template>

<style scoped>
  button {
    border-radius: 8px;
    border: 1px solid #aaa;
    padding: 0.6em 1.2em;
    font-size: 1em;
  }
</style>
