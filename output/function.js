"use strict";
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
const myFunc = (a, b, c = 10) => {
    console.log(a, b);
    console.log(c);
    return a + b + c;
};
console.log(myFunc("Hello", "World!"));
