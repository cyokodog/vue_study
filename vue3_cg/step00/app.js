const data = {
  counter: 0,
};

const Counter = {
  data() {
    // return {
    //   counter: 0,
    // };
    return data;
  },
  mounted() {
    setInterval(() => {
      this.counter++;
      // data.counter++; // NG
    }, 1000);
  },
  computed: {
    double() {
      return this.counter * 2;
    },
  },
};
const app = Vue.createApp(Counter);
const vm = app.mount("#counter"); // return rootComponentInstance

console.log("Vue.component", Vue.component);

// console.log(vm.counter);
// vm.counter = 100;
// vm.$data.counter = 200;
