import { count, countUp } from "./counter.js";

const App1 = Vue.defineComponent({
  props: ["count", "countUp"],
  template: `
    <h1>app1</h1>
    <button @click="countUp">+</button> {{count.value}}
  `,
});
const app1 = Vue.createApp(App1, { count, countUp });
app1.mount("#app1");
