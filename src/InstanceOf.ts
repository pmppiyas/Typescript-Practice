{
  // InstanceOf

  class Animal {
    name: string;
    species: string;
    aGe: number;
    constructor(name: string, species: string, age: number) {
      this.name = name;
      this.species = species;
      this.aGe = age;
    }

    makeDetails(): void {
      console.log(
        `Name: ${this.name}, Species: ${this.species}, Age: ${this.aGe}`
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
  const dogMama = new Dog("Dog Mama", "Dog", 5);
  // dogMama.makeDetails();
  // dogMama.makeBurk();
  // console.log(dogMama.species);

  const catMama = new Cat("Cat Mama", "Cat", 3);
  // catMama.makeDetails();
  // catMama.makeMeow();


  //Get Animal
  /////Smart way
  const isDog = (animal: Animal): animal is Dog=> {
    return animal instanceof Dog;
  }

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  }

  const getAnimal = (animal: Animal){
    if (animal ) { 
      animal.makeDetails()
    }

    if (isDog(animal)){
      animal.makeBurk()
    }
    else if (isCat(animal)) {
      animal.makeMeow()
    }
    else {
      console.log("Plaese provide a valid animal")
    }
  
  }


  getAnimal(catMama);




  /////////////////()
}
