"use strict";
{
    //Access Modifiers
    class BankAccount {
        constructor(id, name, balance, zipcode) {
            this._id = id;
            this.name = name;
            this._balance = balance;
            this.zipcode = zipcode;
        }
        deposit(amount) {
            if (amount > 0) {
                this._balance += amount;
                console.log(`Deposited: ${amount} USD`);
            }
            else {
                throw new Error("Invalid deposit amount");
            }
        }
        withdraw(amount) {
            if (this._balance >= amount) {
                this._balance -= amount;
                console.log(`Withdrawn: ${amount} USD`);
            }
            else if (this._balance === 0) {
                console.log("Your account is empty");
            }
            else if (this._balance < amount) {
                console.log("Insufficient balance");
            }
            else {
                console.log("Insufficient balance");
            }
        }
        getBalance() {
            return this._balance;
        }
        getName() {
            return this.name;
        }
        setName(name) {
            this.name = name;
        }
        getId() {
            return this._id;
        }
        setId(id) {
            this._id = id;
        }
        getAccountInfo() {
            return {
                id: this._id,
                name: this.name,
                balance: this._balance,
                zipcode: this.zipcode || "Not Provided",
            };
        }
        setAccountInfo(id, name) {
            this._id = id;
            this.name = name;
        }
    }
    const Account1 = new BankAccount(1, "Prince Mahmud", 0);
    console.log("ID:", Account1.getId());
    console.log("Balance:", Account1.getBalance());
    console.log("Name:", Account1.getName());
    Account1.deposit(5000);
    Account1.withdraw(500);
    Account1.setName("Dev Piyas");
    console.log("Name:", Account1.getName());
    console.log("Balance:", Account1.getBalance());
    Account1.setAccountInfo(3, "Prince Mahmud Piyas");
    console.log("AccInfo:", Account1.getAccountInfo());
}
