export {};

const greet1 = ({ name, age = 21 }: { name: string; age?: number }) => {
  console.log(`hello ${name} (${age})`);
};
greet1({ name: "taro" }); // hello taro (21)

////////////////////////////////////////////

type GreetProps = { name: string; age?: number }; // propsの型定義
const defaultGreetProps: Partial<GreetProps> = { age: 21 }; // propsのデフォルト値

const withDefaults = <T>(props: T, defaultProps: Partial<T>) =>
  Object.assign(structuredClone(props), defaultProps);

const greet2 = (greetProps: GreetProps) => {
  const { name, age } = withDefaults<GreetProps>(greetProps, defaultGreetProps);
  console.log(`hello ${name} (${age})`);
};
greet2({ name: "taro" }); // hello taro (21)
