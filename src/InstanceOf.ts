{
  // InstanceOf

  class Animal {
    name: string;
    species: string;
    aGe: number;
    size?: number;
    constructor(name: string, species: string, age: number, size?: number) {
      this.name = name;
      this.species = species;
      this.aGe = age;
      this.size = size;
    }

    makeDetails(): void {
      console.log(
        `Name: ${this.name}, Species: ${this.species}, Age: ${this.aGe} ${
          this.size ? `, Size: ${this.size} kg` : ""
        }`
      );
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string, age: number) {
      super(name, species, age);
    }

    makeBurk(): void {
      console.log(`${this.name} barks.`);
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string, age: number) {
      super(name, species, age);
    }

    makeMeow(): void {
      console.log(`${this.name} meows.`);
    }
  }

  class Fish extends Animal {
    size: number;
    constructor(name: string, species: string, age: number, size: number) {
      super(name, species, age);
      this.size = size;
    }
    makeFry(): void {
      console.log(`${this.name} frying.`);
    }
  }

  const dogMama = new Dog("Dog Mama", "Dog", 5);
  // dogMama.makeDetails();
  // dogMama.makeBurk();
  // console.log(dogMama.species);

  const catMama = new Cat("Cat Mama", "Cat", 3);
  // catMama.makeDetails();
  // catMama.makeMeow();

  const fishMama = new Fish("fish Mama", "Fish", 1, 5);

  //Get Animal
  /////Smart way
  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const isFish = (animal: Animal): animal is Fish => {
    return animal instanceof Fish;
  };

  const getAnimal = (animal: Animal) => {
    if (animal) {
      animal.makeDetails();
    }

    if (isDog(animal)) {
      animal.makeBurk();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else if (isFish(animal)) {
      animal.makeFry();
    } else {
      console.log("Plaese provide a valid animal");
    }
  };

  getAnimal(fishMama);

  /////////////////()
}
