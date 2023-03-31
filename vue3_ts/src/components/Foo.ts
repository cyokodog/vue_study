import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  setup(props) {
    // throw new Error("FooComponentでエラー");
    return {
      style: {
        width: props.width,
        height: props.height,
        "background-color": props.color,
      },
    };
  },
});
