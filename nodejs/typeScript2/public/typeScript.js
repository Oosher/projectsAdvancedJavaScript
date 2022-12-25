"use strict";
//type - any
let a;
a = 435;
a = "suiiii";
a = true;
let arrayOfAny = [];
arrayOfAny.push(35);
arrayOfAny.push("gffd");
let anyStudent;
//functions 
let hello = () => {
    console.log("Hello");
};
hello();
let newFunction;
newFunction = () => {
    console.log(a);
};
newFunction();
//define type of args
let addNums = (num1, num2) => {
    console.log((num1 % num2));
};
addNums(7, 4);
//define optional arguments
let addNums2 = (a, b, c) => {
    console.log(a / b);
    console.log(c);
};
//c is optional so you don't have to input it when you call the function
addNums2(45, 23);
//default value
let addNums3 = (a, b, c = 10) => {
    console.log(a / b * c);
};
addNums3(1, 6, 7);
//function type
let addNums4 = (num1, num2) => {
    return num1 - num2;
};
let array = [2, 3, 5, 6, 7, 8, 9, 0, 4, 5];
function twoAddedNumbers(array, sumValue) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((array[i] + array[j]) == sumValue) {
                return array[i] + " " + array[j];
            }
        }
    }
    return null;
}
console.log(twoAddedNumbers(array, 5));
;
const newFunction2 = (student) => {
    console.log("hello i am " + student.name);
};
const student = {
    name: "233", age: 23
};
newFunction2(student);
class Exchange {
    constructor(symbol, lastPrice, volume, priceChangePrecent) {
        this.symbol = symbol;
        this.lastPrice = lastPrice;
        this.priceChangePrecent = priceChangePrecent;
        this.volume = volume;
    }
}
//class task 2 
class bankAccount {
    constructor(checkingAccount, belongsTo) {
        this.checkingAccount = checkingAccount;
        this.belongsTo = belongsTo;
    }
    getBalance() {
        return this.checkingAccount;
    }
    addBalance(amount) {
        this.checkingAccount += amount;
    }
    withdraw(amount) {
        if (this.checkingAccount - amount < 0) {
            console.log("you cannot withdraw more than you have in this account");
        }
        else {
            this.checkingAccount -= amount;
        }
    }
}
let newBankAccount = new bankAccount(23245, "yusef");
newBankAccount.addBalance(10000);
newBankAccount.withdraw(2000000000);
console.log(newBankAccount.getBalance());
