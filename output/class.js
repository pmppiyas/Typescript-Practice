"use strict";
{
    ///// OOP- class
    class Animal {
        // name: string;
        // sound: string;
        constructor(name, sound) {
            this.name = name;
            this.sound = sound;
            // this.name = name;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`${this.name} makes sound: ${this.sound}`);
        }
    }
    const Dog = new Animal("Dog", "Gheu Gheu");
    const Cat = new Animal("Cat", "Meow Meow");
    console.log(Dog.makeSound());
    console.log(Cat.makeSound());
    //////
}
