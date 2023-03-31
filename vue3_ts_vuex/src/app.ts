import { ref, reactive, computed } from "vue";

import Hello from "./components/hello.vue";

const useVueCounter = (name: string, count: number) => {
  const state = reactive({
    name,
    count,
  });
  return {
    name: computed(() => state.name),
    count: computed(() => state.count),
    setName(name: string) {
      state.name = name;
    },
    inc() {
      state.count++;
    },
  };
};

export default {
  components: {
    Hello,
  },
  setup() {
    const clickedCount = ref(0);
    const vueCounterCtx = useVueCounter("Vue", 3);
    return {
      ...vueCounterCtx,
      clickedCount,
      clickMsg() {
        clickedCount.value++;
        vueCounterCtx.inc();
      },
      changeName(name: string) {
        vueCounterCtx.setName(name);
      },
    };
  },
};
