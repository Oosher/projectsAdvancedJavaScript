
//The DOM and type casting 

//Option 1 

//we add a ! sign at the end 

let newButton = document.querySelector("button")!;

console.log(newButton.innerText);

/*  Option 2

if (newButton) {

    console.log(newButton.innerText);

} 

*/


// Option 3
/* 
we add a ? to the element to make it not necessary to return a value
console.log(newButton?.innerText); 

*/


//Type casting 


let input1 = document.querySelector("#input1") as HTMLInputElement;


newButton.addEventListener("click",()=>{

console.log(input1.value);

});

