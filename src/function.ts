// let myFunc: Function;

// myFunc = () => {
//   console.log("Hello World!");
// };

// myFunc();

// Optional Parameters
// name?: string;
// default parameters
// name: string = "John Doe";
// function return type
// type MyFunc = (a: string, b?: string, c?: number) => number | string;
const myFunc = (a: string, b?: string, c: number = 10): number | string => {
  console.log(a, b);
  console.log(c);
  return a + b + c;
};

console.log(myFunc("Hello", "World!"));
