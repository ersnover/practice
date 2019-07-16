console.log("hello World")

// variables and constants

//age = 12        //global variable   (bad idea, don't use)

//var age = 23    //local var

let age = 34    // very different pertaining to scope

// const pi = 3.142    //constant doesn't change over time (js will not let it change)

// functions

function greet() {
    console.log("Hello there!")
}

function add(a,b) {
    result = a + b
    return result
}

greet()
let answer = add(3,4)
console.log(answer)

for (let index = 1; index <= 10; index ++) {
    console.log(index)
}

// arrays

let numbers = [2,3,4,5,5,6,7,0]
let names = ["Alex","John"]

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}

names.push("george")        // append

//conditions

let version = 3
let os = "macOS"

if (version > 2 && os == "macOS") {     // and && or ||
    console.log("stuff")
} else if(os == "windows") {
    console.log("windows")
} else {
    console.log("more stuff")
}

// classes and objects in javascript and javascript dynamic behavior
//ES5

// let obj = new Object()
// obj.make = "Honda"
// obj.model = "Accord"
// console.log(obj)
// Object.prototype.drive = function() {
//     console.log("i am driving")
// }

// function Car() {            // use function to create objects (no build-in objects)
//     this.make = ""          // this == self (python)
//     this.model = ""
// }

// let car = new Car()         //new object instance
// car.isElectric = false      // can add properties whenever you want (not good idea just from consistency perspective)

function Car(make, model) {
    this.make = make
    this.model = model
}

Car.prototype.drive = function() {      //prototype will attach 

}

let car = new Car("Honda","Accord")
car.drive = function() {            // attach anonymous function to object
    console.log("Driving...")       //drive is a function which is only available to a specific instance of the car class
}

car.drive()     // call function on object

// button.click {
//     title = //get title from textbox
//     priority = //get title from textbox
//     let task = new Task(title, priority)
//     tasks.push(task)
// }

//ES6

class BankAccount {
    constructor(name, accountType) {
        this.name = ""
        this.accountType = ""

    }

    openAccount() {
        console.log("Open Account")
    }
}

let bankAccount = new BankAccount("John Doe", "Checking")

bankAccount.openAccount()

bankAccount["name"]
bankAccount.name    //same thing. top is 'key' s
