import { count, countUp } from "./counter.js";

const App2 = Vue.defineComponent({
  props: ["count", "countUp"],
  template: `
    <h1>app2</h1>
    <button @click="countUp">+</button> {{count.value}}
  `,
});
const app2 = Vue.createApp(App2, { count, countUp });
app2.mount("#app2");
