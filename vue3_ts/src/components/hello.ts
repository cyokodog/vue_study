import {
  defineComponent,
  SetupContext,
  reactive,
  watch,
  defineAsyncComponent,
  ref,
  onErrorCaptured,
} from "vue";
import { computed } from "vue";

import Bar from "./Bar.vue";
import FooLoading from "./FooLoading.vue";
import FooError from "./FooError.vue";

import { fetchData } from "./fetchData";

// const Foo = defineAsyncComponent(async () => {
//   return new Promise<any>((resolve) => {
//     setTimeout(() => {
//       resolve(import("./Foo.vue"));
//     }, 3000);
//   });
// });

interface Settings {
  fooData: string;
}

// const settings = ref({} as Settings);
const settings = reactive({} as Settings);

const fetchSettings = async () => {
  const data = await fetchData<Settings>({ fooData: "Foo Contents" }, 2000);
  settings.fooData = data.fooData;
  // settings.value = await fetchData<Settings>({ fooData: "Foo Contents" }, 2000);
};

const settingsPromise = fetchSettings();

// const Foo = defineAsyncComponent(() => import("./Foo.vue"));
const Foo = defineAsyncComponent({
  loader: async () => {
    // throw new Error("Foo エラー");
    await settingsPromise;

    return import("./Foo.vue");
  },
  loadingComponent: FooLoading,
  errorComponent: FooError,
});

export default defineComponent({
  components: {
    Foo,
    Bar,
  },
  props: {
    name: {
      type: String,
    },
    count: {
      type: Number,
    },
  },
  setup(props, context) {
    const errorMsg = ref("");

    const state = reactive({
      name: props.name,
    });

    watch(
      () => props.name,
      (name) => (state.name = name)
    );

    onErrorCaptured((e: any) => {
      errorMsg.value = e.message;
      return false;
    });

    return {
      errorMsg,
      settings,
      // fooData: settings.value.fooData,

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
