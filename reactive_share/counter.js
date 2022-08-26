export const count = Vue.ref(0);
export const countUp = () => (count.value = count.value + 10);
