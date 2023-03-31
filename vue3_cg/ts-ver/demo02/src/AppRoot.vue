<template>
  <div>
   <MyComponent
      foo="FOO"
      :hoge-fuga="'hogeFuga123'"
      :count="count"
      :setCount="setCount"
      @click="hoge"
    />
    <button :disabled="disabled">save</button>
    <hr>
    hogeFuga: {{hogeFuga}}<br/>
    foo: {{foo}}<br/>
    bar: {{bar.item.value}}<br/>
    foo2: {{foo2.data}}<br/>
    bar2: {{bar2.item.data}}<br/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed, ref } from "vue";
import MyComponent from "./MyComponent.vue";

export default defineComponent({
  components: {
    MyComponent,
  },
  setup() {
    const state = reactive({
      count: 0,
    });


// let a = 1;
// setInterval(()=>{a = a + 1},1000)
// watchEffect(()=>{
// setInterval(()=>{a = a + 1},1000)
// })



    const setCount = (value: number) => {
      console.log('value',value)
      state.count = value
      console.log('change',state.count)
    };
    return {
      state,

      hogeFuga: ref('HogeFuga'),

      foo: ref(123),
      bar: {
        item: ref(123),
      },
      foo2: reactive({data:123}),
      bar2: {
        item: reactive({data:123}),
      },



      ...toRefs(state),
      disabled: computed(() => state.count === 0),
      setCount,

      hoge(){
        console.log('click')
      }
    };
  }
});
</script>
