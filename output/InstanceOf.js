"use strict";
{
    // InstanceOf
    class Animal {
        constructor(name, species, age) {
            this.name = name;
            this.species = species;
            this.aGe = age;
        }
        makeDetails() {
            console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.aGe}`);
        }
    }
    class Dog extends Animal {
        constructor(name, species, age) {
            super(name, species, age);
        }
        makeBurk() {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        constructor(name, species, age) {
            super(name, species, age);
        }
        makeMeow() {
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
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (animal) {
            animal.makeDetails();
        }
        if (isDog(animal)) {
            animal.makeBurk();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            console.log("Plaese provide a valid animal");
        }
    };
    getAnimal(catMama);
    /////////////////()
}
