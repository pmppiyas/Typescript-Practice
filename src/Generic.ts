// Generic

type User = { name: string; age: number; division: string };
const user: Array<User> = [
  { name: "Mezba", age: 70, division: "CTG" },
  { name: "Piyas", age: 100, division: "DHA" },
  { name: "Kabir", age: 232, division: "RNG" },
];

// console.log(user);

interface Developer<T, X = null> {
  name: string
  computer: {
    brand: string;
    model: string;
    releaseDate: number;
  };
  smartWatch: T;
  bike?: X;
}

interface poorWatch {
  brand: string;
  model: string;
  display: string;
}

const poorDev: Developer<poorWatch> = {
  name: "Prince Mahmud Piyas",
  computer: {
    brand: "Hp",
    model: "HP850",
    releaseDate: 2012,
  },
  smartWatch: {
    brand: "Apple",
    model: "679M",
    display: "OLED",
  },
};

// type richType = {
//   brand: string;
//   model: string;
//   display: string;
//   price: number;
//   releaseDate: number;
// };

interface richWatch {
  brand: string;
  model: string;
  display: string;
  price: number;
  releaseDate?: number;
  origin?: string;
}

type bikeType = {
  name: string;
  model: string;
  releaseDate: number;
};

const richDev: Developer<richWatch, bikeType> = {
  name: "Rich Vai",
  computer: {
    brand: "Apple",
    model: "MacLatest",
    releaseDate: 2022,
  },
  smartWatch: {
    brand: "AppleWatch",
    model: "5681",
    display: "Oled",
    price: 2000000,
    releaseDate: 2025,
    origin: "USA",
  },
  bike: {
    name: "Kawasaki",
    model: "Ninja",
    releaseDate: 2020,
  },
};
console.log(poorDev, richDev);
