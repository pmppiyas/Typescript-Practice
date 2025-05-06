"use strict";
{
    // InstanceOf
    class Animal {
        constructor(name, species, age, size) {
            this.name = name;
            this.species = species;
            this.aGe = age;
            this.size = size;
        }
        makeDetails() {
            console.log(`Name: ${this.name}, Species: ${this.species}, Age: ${this.aGe} ${this.size ? `, Size: ${this.size} kg` : ''}`);
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
    class Fish extends Animal {
        constructor(name, species, age, size) {
            super(name, species, age);
            this.size = size;
        }
        makeFry() {
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
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const isFish = (animal) => {
        return animal instanceof Fish;
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
        else if (isFish(animal)) {
            animal.makeFry();
        }
        else {
            console.log("Plaese provide a valid animal");
        }
    };
    getAnimal(fishMama);
    /////////////////()
}
