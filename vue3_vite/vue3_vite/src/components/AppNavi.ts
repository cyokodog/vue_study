import { defineComponent, PropType, ref } from "vue";
import { useRouter } from "vue-router";

interface MenuItem {
  type: "heading" | "menu";
  title: string;
  icon?: string;
  url?: string;
}

export default defineComponent({
  props: {
    title: { type: String, default: "" },
    menuItems: { type: Array as PropType<MenuItem[]>, default: [] },
  },
  setup() {
    const router = useRouter();

    const isToggle = ref(false);

    const goToUrl = (url?: string) => {
      if (url != undefined) {
        router.push(url);
      }
    };
    return {
      isToggle,
      goToUrl,
    };
  },
});
