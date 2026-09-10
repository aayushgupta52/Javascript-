// class Human {
//     // properties 

//     age = 22;
//     #wt = 44;
//     ht = 30;



//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     // behaviour 

//     walking() {
//         console.log("I am walking" , this.#wt);
//     }

//     sleeping() {
//         console.log("going to sleep at 12o clock")
//     }



//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }

// }

// let obj = new Human(50 ,90 , 101);
// console.log(obj.age)
// console.log(obj.fetchWeight)
// // console.log(obj.age)
// // console.log(obj.wt)
// // console.log(obj.ht)
// // console.log(obj.sleeping())



// function sayName(myName = "Prabhu Deva") {
//     console.log("My Name is:", myName);
// }

// sayName();


// function sayName(fname = "Rana" , lname = fname.toUpperCase()) {
//     console.log("your name is" , fname , lname)
// }

// sayName()



// function sayName(fname = "Rana") {
//     console.log("your name is" , fname)
// }

// sayName(undefined)



function getAge() {
    return 190;
}

function utility(name = "Love", age = getAge()) {
    console.log(name, age);
}

utility();
