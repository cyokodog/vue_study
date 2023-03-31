import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

const greet1 = ({ name, age = 21 }: { name: string; age?: number }) => {
  console.log(`hello ${name} (${age})`);
};
greet1({ name: "taro" }); // hello taro (21)

/////////

const mergeProps = <T>(props: T, defaultProps: Partial<T>) =>
  Object.assign(structuredClone(props), defaultProps);

type GreetProps = { name: string; age?: number }; // propsの型定義
const defaultGreetProps: Partial<GreetProps> = { age: 21 }; // propsのデフォルト値

const greet2 = (greetProps: GreetProps) => {
  const { name, age } = mergeProps<GreetProps>(greetProps, defaultGreetProps);
  console.log(`hello ${name} (${age})`);
};
greet2({ name: "taro" }); // hello taro (21)

// const foo = ({
//   startHeight,
//   appearFrom = "bottom",
// }: {
//   startHeight?: number;
//   appearFrom?: "bottom" | "right";
// }) => {
//   console.log(startHeight, appearFrom);
// };

// type Foo = ({
//   startHeight,
//   appearFrom = "bottom",
// }: {
//   startHeight?: number;
//   appearFrom?: "bottom" | "right";
// }) => void;

// const foo: Foo = ({ startHeight, appearFrom = "bottom" }) => {};

// type Hoge = () => void;
// const hoge: Hoge = () => {};

// foo({ appearFrom: "bottom" });

// const p = {
//   a: 1,
//   b: "B",
// };
// const f = (arg: typeof p) => {
//   console.log(arg);
// };
// f({ a: 2, b: "BB" });

// type GreetProps = { name: string; age: number } & typeof defaultProps;

// const defaultProps = {
//   age: 21,
// };
// const greet = (props: GreetProps) => {
//   const { name, age } = props;
//   console.log(`hello ${name} (${age})`);
// };
// //greet.defaultProps = defaultProps;

// greet({ name: "taro" });
