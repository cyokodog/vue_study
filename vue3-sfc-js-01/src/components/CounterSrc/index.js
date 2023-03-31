import { computed, defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Counter",
  props: {
    count: { type: Number, required: true },
  },
  setup(props) {
    const { count } = toRefs(props);
    const double = computed(() => count.value * 2);
    return { double };
  },
});
