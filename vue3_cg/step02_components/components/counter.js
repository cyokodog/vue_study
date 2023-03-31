app.component("counter", {
  props: {
    count: Number,
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    onReset() {
      this.$emit("reset");
    },
  },
  template: `
      <h1>Counter</h1>
      <p>x1: {{count}}</p>
      <p>x2: {{double}}</p>
      <div>
        <button @click="onReset">reset</button>
      </div>
  `,
});
