// object type
type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

let c: Person = {
  name: "Prince",
  age: 25,
  isActive: true,
};
console.log(c);

type country = {
  name: string;
  population: number;
  area: number;
  isFree: boolean;
  capital: string;
};

const country: country = {
  name: "Bangladesh",
  population: 170000000,
  area: 147570,
  isFree: true,
  capital: "Dhaka",
};
console.log(country);
