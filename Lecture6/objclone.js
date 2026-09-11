// object are dynamic in nature 

// let obj = {
//     age:23,
//     wt:70,
//     ht:180
// }

// console.log(obj)

// obj.color = "White"

// console.log(obj)


// let src = {
//     age:23,
//     wt:180,
//     ht:60
// }


// let des = {...src}


// src.age = 100

// console.log("src" , src)
// console.log("des" , des)


// assign method use karenge clone ke liye 



let src = {
    age:23,
    wt:180,
    ht:60
}

let src1 = {
    name:"Aayush"

}


let des = Object.assign({} , src , src1)


src.age = 69
src1.name = "Rahul"

console.log("src" , src)
console.log("src1" , src1)
console.log("des" , des)


