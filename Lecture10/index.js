// let firstPromise = new Promise((resolve,reject)=>{
//     console.log("hello there")
//     reject(new Error("internal server error"))

// });


// function myname() {
//     console.log("the output will pop in 10 seconds")
// }


// let firstPromise = new Promise((resolve,reject)=>{
//     setTimeout(function myname() {
//     console.log("the output will pop in 10 seconds")
// } , 15000);
// resolve(1); 
// })



// then and catch in promise 


// let promise1 = new Promise((resolve,reject)=> {
//    let value = false    ;
//     if (value) {
//         console.log("promise executed")
//     }
//     else {
//         console.log("promise rejected")
//     }
// })

// promise1.then((message)=> {
//     console.log("Then ka message is :" + message)
// }).catch((error)=> {
//     console.log("Error:" + error)
// })




// let promise = new Promise((resolve, reject) => {
//     let value  = true;
//     if(value) {
//     resolve(10);
//     }else {
//         reject("internal server error")
//     }
// });

// promise
//     .then((value) => {
//         console.log(value);       // 10
//         return value * 2;
//     })
//     .then((value) => {
//         console.log(value);       // 20
//         return value + 5;
//     })
//     .then((value) => {
//         console.log(value);       // 25
//     })
//     .catch((error) => {
//         console.log(error);
//     }).catch((error)=> {
//         console.log("kuch error aaya h")
//     }).finally((mesage)=> {
//         console.log("I will run foreever")
//     })



let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First Promise Done");
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Second Promise Done");
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Third Promise Done");
    }, 3000);
});

Promise.all([promise1, promise3, promise2])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log("Error: " + error);
    });