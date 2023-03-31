// tsでないと未importエラーがでない
import { defineComponent, ref } from "vue";
import Counter from "../components/CounterSrc/index.vue";

const messageHtml = /* html */ `<p>Hello World</p>`;

export default defineComponent({
  template: /* html */ `
    <div class="Greet">
      ${messageHtml}
    </div>
  `,
});


// export default defineComponent({
//   name: "App",
//   components: {
//     Counter,
//   },
//   setup() {
//     const count = ref(10);
//     const countUp = () => (count.value = count.value + 10);



//     return { count, countUp };
//   },
// });
