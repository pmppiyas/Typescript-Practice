"use strict";
{
    //inheritance
    class Parent {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getDetails() {
            console.log(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`);
        }
        getSleep(number) {
            console.log(`${this.name} is sleep for ${number} hours`);
        }
    }
    class Student extends Parent {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Piyas", 22, "Dhaka, Bangladesh");
    // console.log(student1.getDetails());
    // console.log(student1.getSleep(8));
    // class Teacher {
    //   name: string;
    //   age: number;
    //   address: string;
    //   designation: string;
    //   constructor(
    //     name: string,
    //     age: number,
    //     address: string,
    //     designation: string
    //   ) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    //     this.designation = designation;
    //   }
    //   getDetails() {
    //     console.log(
    //       `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`
    //     );
    //   }
    //   getSleep(number: number) {
    //     console.log(`${this.name} is sleep for ${number} hours`);
    //   }
    //   takeClass(numOfClass: number) {
    //     console.log(`${this.name} is take ${numOfClass} class`);
    //   }
    // }
    // const teacher1 = new Teacher(
    //   "Piyas",
    //   22,
    //   "Dhaka, Bangladesh",
    //   "Software Engineer"
    // );
    // console.log(teacher1.getSleep(6));
    // console.log(teacher1.getDetails());
    class Developer extends Parent {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        getDesignation() {
            console.log(`My name is ${this.name} and I am a ${this.designation}`);
        }
    }
    const developer1 = new Developer("Piyas", 22, "Dhaka Bangladesh", "Software Enginner");
    // console.log(developer1.getDesignation());
    ///////
    class Country {
        constructor(name, population, capital, district) {
            this.name = name;
            this.population = population;
            this.capital = capital;
            this.district = district;
        }
        getDetails() {
            console.log(`Country name: ${this.name}, Population: ${this.population}, Capital: ${this.capital}, District: ${this.district}`);
        }
    }
    const country1 = new Country("Bangladesh", 170000000, "Dhaka", 64);
    // console.log(country1.getDetails());
    // class for Planet.......
    class Planet extends Country {
        constructor(name, population, capital, district) {
            super(name, population, capital, district);
        }
        getPopulation() {
            console.log(`Population of ${this.name} is ${this.population}`);
        }
    }
    const Earth = new Planet("Earth", 5000000000000, "New Delhi", 28);
    const Mars = new Planet("Mars", 1000000000, "Mars City", 10);
    // console.log(Earth.getPopulation());
    // console.log(Earth.getDetails());
    // class Bangladesh extends Country {
}
