<script lang="ts">
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
  <button @click="countUp">+</button> <Counter :count="count" />
</template>
