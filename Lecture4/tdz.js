// // Global scope
// var age = 15;

// console.log(age); // 15

// {
//     console.log(age); // 15
// }

// if (true) {
//     console.log(age); // 15
// }

// for (let i = 0; i < 2; i++) {
//     console.log(age); // 15
// }

// function sayHello() {
//     console.log("hi", age);
// }

// sayHello(); // hi 15


// Function scope 


// {
//     var x = 10;
// }

// console.log(x); // 10 ✅


// {
//     let x = 10;
//     console.log(x); // 10 ✅
// }

// console.log(x); // ❌ ReferenceError


// {
//     const x = 10;
//     console.log(x); // 10 ✅
// }

// console.log(x); // ❌ ReferenceError


