<!-- <script>
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
</script> -->

<script setup>
  // tsでないと未importエラーがでない
  import { ref } from "vue";
  import Counter from "./components/CounterSetup.vue";
  import Foo from "./components/Foo.vue"

  // setup使うと defineComponent、components、return がいらなくなる

  const visible = ref(true);

  const count = ref(10);
  const countUp = () => (count.value = count.value + 10);

  const counterRef = ref(null);
</script>

<template>
  <Suspense>
    <template #default>
      <div>
        <Foo/>
        <!-- 非同期処理が完了した時の描画 -->
        <p>(AppSetup.vue)</p>
        <button @click="countUp">+</button>
        <Counter :count="count" v-if="visible" ref="counterRef" />
        <input type="checkbox" v-model="visible" />
        <div class="b">b</div>
        <button @click="counterRef.hello">call child component method</button>
      </div>
    </template>
    <template #fallback>
      <!-- 非同期処理が実行中の時の描画 -->
      <div>データ取得中...</div>
    </template>
  </Suspense>
</template>

<style scoped>
  button {
    border-radius: 8px;
    border: 1px solid #aaa;
    padding: 0.6em 1.2em;
    font-size: 1em;
  }
</style>

<!--
<style lang="scss" scoped>
  button {
    border-radius: 8px;
    border: 1px solid #aaa;
    padding: 0.6em 1.2em;
    font-size: 1em;
  }
  .a .b {
    background: red;
  }
  $primary-color: #333;
  body {
    color: $primary-color;
  }
</style> -->
