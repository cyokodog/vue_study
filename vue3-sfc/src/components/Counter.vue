<script lang="ts">
  import { computed, defineComponent, toRefs } from "vue";

  export default defineComponent({
    props: {
      count: { type: Number, required: true },
    },
    setup(props) {
      // propsが保持する各プロパティをrefに変換した後、countを取得
      const { count } = toRefs(props);

      // countがrefに変換されたため、.valueを参照できる
      const double = computed(() => count.value * 2);

      return { double };
    },
  });
</script>

<template>
  <span class="counter">{{ count }} * 2 = {{ double }}</span>
</template>

<style scoped>
  .counter {
    background: #eee;
    display: inline-block;
    padding: 10px;
  }
</style>
