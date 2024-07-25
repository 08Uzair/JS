// Example 1:

// class hello {
//     welcome(city, yr, engg) {
//         let name = city;
//         let year = yr;
//         let enggr = engg;
//         console.log(`Hello Uzer Qureshi stydy in ${name}. In ${yr} of ${enggr}`)
//     }
//     sorry() {
//         console.log("Sorry for the late message")
//     }
// }
// let a = new hello()
// a.welcome("Pune", "2nd yr", "Enginnering");
// a.sorry();

// Example :2

class student {
    constructor() {
        let name;
        console.log("constructor function")
    }
    hello() {
        console.log("Hello " + this.name)
    }
    static staticMethod() {
        console.log(`This function is a Static Function`)
    }
}
let a = new student();

a.name = "Uzer Qureshi";
a.hello();
student.staticMethod();

