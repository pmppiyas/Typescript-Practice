{
  ///////type Guard

  const add = (
    param1: number | string,
    param2: number | string
  ): number | string => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else if (typeof param1 === "string" && typeof param2 === "string") {
      return param1 + param2;
    } else {
      throw new Error(
        "Invalid parameters: both parameters must be either numbers or strings."
      );
    }
  };
  // console.log(add(1, 2));
  // console.log(add('Hello, ', 'world!'));

  ///////In gourd

  type NormalUser = {
    name: string;
    age: number;
  };

  type AdminUser = {
    name: string;
    age: number;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser): void => {
    if ("role" in user && user.role === "admin") {
      console.log(`Admin: ${user.name}, Age: ${user.age}`);
    } else {
      console.log(`User: ${user.name}, Age: ${user.age}`);
    }
  };

  const normalUser: NormalUser = {
    name: "Piyas",
    age: 25,
  };

  const adminUser: AdminUser = {
    name: "Piyas",
    age: 30,
    role: "admin",
  };
  getUser(adminUser);

  /////////////////////////
}
