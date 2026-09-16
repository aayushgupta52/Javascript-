
// function changeText() {
// let element = document.getElementById("fpara");
// element.textContent = "This is the first event"
// }


// let element = document.getElementById("fpara");

// element.addEventListener('click', changeText)


// element.removeEventListener('click', changeText)

// let anchorElement = document.getElementById("fanchor")


// function changeText(event) {

//     event.preventDefault(); 
//     anchorElement.textContent = "click done bhai"

// }
// anchorElement.addEventListener("click" , changeText)

// let paras = document.querySelectorAll("p")

//  function laptop(event) { 
//         alert("you have clicked on para:" +  event.target.textContent);
//     }

// for (let i = 0 ; i <paras.length ; i++) {
//     let para = paras[i]
//     para.addEventListener("click", laptop )
// }




let mydiv = document.getElementById("wrapper") 

function easy(event) {
    if(event.target.nodeName === 'SPAN') {
    alert("you have clicked on para:" + event.target.textContent)
    }

}


document.addEventListener("click" , easy)