import { createApp } from "vue";
import App from "./App.vue";
import { Foo } from "./Foo";

console.log(Foo);

createApp(App).mount("#app");
// createApp(Foo).mount("#app");
