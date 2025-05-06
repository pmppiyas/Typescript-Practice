"use strict";
{
    ///////type Guard
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else if (typeof param1 === "string" && typeof param2 === "string") {
            return param1 + param2;
        }
        else {
            throw new Error("Invalid parameters: both parameters must be either numbers or strings.");
        }
    };
    const getUser = (user) => {
        if ("role" in user && user.role === "admin") {
            console.log(`Admin: ${user.name}, Age: ${user.age}`);
        }
        else {
            console.log(`User: ${user.name}, Age: ${user.age}`);
        }
    };
    const normalUser = {
        name: "Piyas",
        age: 25,
    };
    const adminUser = {
        name: "Piyas",
        age: 30,
        role: "admin",
    };
    getUser(adminUser);
    /////////////////////////
}
