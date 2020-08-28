import { defineComponent, SetupContext, reactive, watch } from "vue";
import { computed } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  setup(props, context) {
    const state = reactive({
      name: props.name,
    });

    watch(
      () => props.name,
      (name) => (state.name = name)
    );

    return {
      state,
      clickMsg() {
        context.emit("click-msg");
      },
      changeName() {
        context.emit("change-name", state.name);
      },
      msg: computed(() => `Hello ${props.name}${props.count}`),
    };
  },
});
