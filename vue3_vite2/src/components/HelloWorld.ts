import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    msg: { type: String, default: "" },
  },
  setup() {
    const count = ref(20);
    return {
      count,
    };
  },
});
