<template>
  <div>
    <button @click="down">-</button>
    <button @click="up">+</button>
    <span class="bar" :style="style">{{current}}{{unit}}</span>
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

@Component
export default class Counter extends Vue {
  @Prop() unit: string;

  @store.State('current') current;

  @store.Getter('style') style

  @store.Mutation('up') up;
  @store.Mutation('down') down;

  mounted() {
    console.log(this.unit); // OK
  }
}

</script>
