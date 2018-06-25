<template>
  <div>
    History: {{counts.length}}
    <ul>
      <li
        v-for="(count, idx) in counts" :key="idx"
      >{{count}}</li>
    </ul>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const store = namespace('history');

@Component
export default class History extends Vue {
  @store.State('counts') counts;

  mounted() {
    console.log('history'); // OK
  }
}
</script>
