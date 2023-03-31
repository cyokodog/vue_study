<script>
  console.log("script");
</script>

<script setup>
  import { computed, toRefs } from "vue";

  console.log("script setup");

  // --------------
  // reactive props
  // --------------
  // const props = defineProps({
  //   count: { type: Number, required: true },
  // });
  // const double = computed(() => props.count * 2);

  // --------------
  // ref props
  // --------------
  const props = defineProps({
    count: { type: Number, required: true },
  });
  const { count } = toRefs(props);
  const double = computed(() => count.value * 2);
  const hello = () => {
    alert("hello");
  };
  defineExpose({ hello });

  const fetchFoo = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("FOO"), 3000);
    });
  };
  const foo = await fetchFoo();
  console.log(foo);
</script>

<template>
  <span class="counter"
    >{{ count }} * 2 = {{ double }} (CounterSetup.vue)
  </span>
  <div class="b">b</div>
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
