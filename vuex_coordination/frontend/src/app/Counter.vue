<template>
  <div>
    <button @click="down">-</button>
    <button @click="up">+</button>
    <span class="bar" :style="style">{{current}}{{unit}}</span>
    <div>
      <button @click="saveHistory">ルートを経由して保存</button>
      <button @click="myStoreToSvae">自身のstoreからよそのstoreを参照し保存</button>
      <button @click="() => directSave(current)">よそのstoreを直接参照して保存</button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  display: inline-block;
  border: solid 1px #fff;
  background: #339933;
  color: #eeffee;
  border-radius: 4px;
  text-align: center;
  font-weight: bold;
}
</style>

<script lang="ts">
/*
import Vue from 'vue';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default Vue.extend({
  props: {
    unit: String
  },
  computed: {
    ...mapState('counter', ['current']),
    ...mapGetters('counter', ['style'])
  },
  methods: mapMutations('counter', ['up', 'down'])
});
*/

/*
import Vue from 'vue'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class';

const store = namespace('counter');

@Component({
  props: {
    unit: String
  }
})
export default class Counter extends Vue {
  @store.State('current') current;

  @store.Getter('style') style

  @store.Mutation('up') up;
  @store.Mutation('down') down;

  mounted() {
    console.log(this['unit']); // props は this で認識しない
  }
}
*/

import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const store = namespace('counter');
const history = namespace('history');

@Component
export default class Counter extends Vue {
  @Prop() unit: string;

  @store.State('current') current;

  @store.Getter('style') style;

  @store.Mutation('up') up;
  @store.Mutation('down') down;

  @store.Action('saveHistory') saveHistory;
  @store.Action('myStoreToSvae') myStoreToSvae;

  @history.Mutation('save') directSave;

  mounted() {
    console.log(this.unit); // OK
  }
}
</script>
