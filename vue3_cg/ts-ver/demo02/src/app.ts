import { createApp } from "vue";
import AppRoot from "./AppRoot.vue";

class Hoge {
  #prop1: string;
  constructor() {
    this.#prop1 = "PROP1";
  }
  showProp1() {
    console.log(this.#prop1);
  }
}

let a = undefined;
let b = 2;

let x = a ?? b;
a ??= b;

console.log(a, x);

// const obj: Record<string, string> = { foo: "bar" };
// obj.foo; // string
// obj.baz; // string
// export const foo = obj.baz.charAt(0);

// const dateString = <Y extends number, M extends number, D extends number>(
//   year: Y,
//   month: M,
//   date: D
// ) => {
//   return `${year}/${month}/${date}` as `${Y}/${M}/${D}`;
// };
// dateString(2020, 10, 10);

// type Size = `${number}px`;
// export const x: Size = "10px";

// export type DateString = ReturnType<typeof dateString>;

// export const d: DateString = "123";

const hoge = new Hoge();
hoge.showProp1();

const app = createApp(AppRoot);
app.mount("#App");
