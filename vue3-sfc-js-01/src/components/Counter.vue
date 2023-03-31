<script>
  import { computed, defineComponent, toRefs } from "vue";

  export default defineComponent({
    props: {
      count: { type: Number, required: true },
    },
    setup(props) {
      const { count } = toRefs(props);
      const double = computed(() => count.value * 2);
      return { double };
    },
  });
</script>

<template>
  <span class="counter">{{ count }} * 2 = {{ double }} (Counter.vue) </span>
</template>

<style scoped>
  .counter {
    margin: 0 2px;
    padding: 0.4em 1.2em;
    border-radius: 8px;
    border: dotted 1px #aaa;
    display: inline-block;
    box-sizing: content-box;
  }
</style>
