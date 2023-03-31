const app = Vue.createApp({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onReset() {
      this.count = 0;
    },
  },
  mounted() {
    setInterval(() => {
      this.count++;
    }, 1000);
  },
  template: `
    <counter :count="count" @reset="onReset"/>
  `,
});
