// function outer() {
//     let name = "Aayush";

//     function inner() {
//         console.log(name);
//     }

//     return inner;
// }

// let result = outer();

// result();


// function outer() {
//     let name = 'Babbar';

//     function inner() {
//         console.log(name);

   
//     }
//       return inner;
// }

// let result = outer()

// result()



function counterouter() {
    let count = 0;

    function countinner() {
        count++;
        console.log(count)
    }
     
    return countinner;
}

let result = counterouter();

result();
result();
result();


