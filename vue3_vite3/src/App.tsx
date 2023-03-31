import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
export const App = defineComponent({
  render(x, y, aa) {
    console.log("aa", aa);
    const msg = "やっほー";
    return (
      <>
        <HelloWorld msg={msg} />
      </>
    );
  },
});
