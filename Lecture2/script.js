// objects in js 

// let rectangle = {
//     length : 1,
//     breadth : 2,

//     draw : function () {
//         console.log("draw reactangle")
//     }
// }


// factory function creation 


// function createRectangle( length , breadth) {
    
//     return rectangle = {
//         length : length,
//         breadth : breadth


//         // draw() {
//         //     console.log("drawing rectangle");
//         // }

//     }
// }

// let rectangleObj1 = createRectangle(3 ,4 )
// console.log(rectangleObj1)


// constructor function 

// function rectangle ( len , bre) {
//     this.length = len
//     this.breadth = bre
//     this.draw = function () {
//         console.log("hello jee")
//     } 
// }

//  let a = new rectangle( 20 , 40); 
//  console.log(a)


// primivitves vs reference 

// let a = 10;
// let b = a;

// a++;
// console.log(a)
// console.log(b)


// let a =  {
//     value: 10 
// }
// let b = a;
// a.value++;
// console.log(a.value)
// console.log(b)


// let a = 10

// function inc (a) {
//     a++;
// }

// inc(a);
// console.log(a);

// for of and for-in 

// let rectangle = {
//     length :2,
//     breadth :4
// }

// // for-in
// for(let key in rectangle) {
//     console.log(key , rectangle[key])
// }

// for-in 
let obj = {
    length: 2,
    breadth: 4
};

for (let key of Object.entries(obj)) {
    console.log(key);
}f