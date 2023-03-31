// import { ref, reactive, computed } from "vue";

import {
  computed,
  defineAsyncComponent,
  defineComponent,
  onErrorCaptured,
  reactive,
  readonly,
  ref,
} from "vue";
import { Settings } from "./models/settings/types";
import { settingsRepo } from "./repositories/settings";

// import Hello from "./components/hello.vue";

// const useVueCounter = (name: string, count: number) => {
//   const state = reactive({
//     name,
//     count,
//   });
//   return {
//     name: computed(() => state.name),
//     count: computed(() => state.count),
//     setName(name: string) {
//       state.name = name;
//     },
//     inc() {
//       state.count++;
//     },
//   };
// };

// export default {
//   components: {
//     Hello,
//   },
//   setup() {
//     // const name = ref("Vue3");
//     // const count = ref(0);
//     // const state = reactive({
//     //   name: "Vue",
//     //   count: 0,
//     // });

//     const clickedCount = ref(0);

//     const vueCounterCtx = useVueCounter("Vue", 3);

//     const clickMsg = () => {
//       // count.value++;
//       // state.count++;
//       vueCounterCtx.inc();
//     };

//     return {
//       // name,
//       // count,
//       // state,
//       ...vueCounterCtx,
//       clickedCount,
//       clickMsg() {
//         // count.value++;
//         // state.count++;
//         clickedCount.value++;
//         vueCounterCtx.inc();
//       },
//       changeName(name: string) {
//         vueCounterCtx.setName(name);
//       },
//     };
//   },
// };

// const useSettings = () => {
//   const state = ref();
//   settingsRepo.fetch().then((res) => {
//     state.value = res;
//   });
//   return state;
// };

// const settings = reactive<Settings>({
//   foo: { width: 0, height: 0, color: "" },
// });
// const fetchedSettingsPromise = settingsRepo.fetch().then((res) => {
//   // settings.value = res;
//   settings.foo = res.foo;
// });

import Loading from "./components/Loading.vue";
import ExceptionError from "./components/ExceptionError.vue";

import Bar from "./components/dynamic/Bar.vue";

const settings = ref<Settings>();
const fetchedSettingsPromise = settingsRepo.fetch().then((res) => {
  settings.value = res;
});

const Foo = defineAsyncComponent({
  loader: async () => {
    // throw new Error("FooComponentのimport前にエラー");
    await fetchedSettingsPromise;
    return import("./components/Foo.vue");
  },
  // loader()のPromiseが完了するまで表示される
  loadingComponent: Loading,

  // いろいろ試したけど、どーすればこれが呼ばれるのかがわからない...
  errorComponent: ExceptionError,

  // ロード時間がこれを超過するとonErrorCaptured()が呼ばれる
  // timeout: 300,

  // componentの読み込みの開始を遅らせる
  // delay: 3000,

  onError(_error, _retry, _fail, _attempts) {
    // loader() 内でエラーが発生すると呼ばれる
    console.log("onError", _error);
  },
});

const DONE_FILTER = readonly({
  DONE: true,
  UNDONE: false,
  ALL: null,
});

export default defineComponent({
  components: {
    Foo,
    Bar,
    Loading,
  },
  data() {
    return {
      DONE_FILTER,
    };
  },
  setup() {
    console.log(DONE_FILTER);
    onErrorCaptured((e) => {
      console.log("e", e);
      return false;
    });

    return {
      fooSettings: computed(() => settings.value?.foo || {}),
    };
  },
});
