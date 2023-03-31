import { defineComponent } from "vue";

import { barRepo } from "../../repositories/bar";

export default defineComponent({
  async setup() {
    // throw new Error("BarComponentでエラー");
    const bar = await barRepo.fetch();
    return {
      style: {
        width: bar.width,
        height: bar.height,
        "background-color": bar.color,
      },
    };
  },
});
