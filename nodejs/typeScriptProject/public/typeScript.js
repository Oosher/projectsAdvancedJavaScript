"use strict";
//The DOM and type casting 
//Option 1 
//we add a ! sign at the end 
let newButton = document.querySelector("button");
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
let input1 = document.querySelector("#input1");
newButton.addEventListener("click", () => {
    console.log(input1.value);
});
let newPoint;
function distance(point1, point2 = { x: 0, y: 0 }) {
    let dist = Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
    return dist;
}
let newPoint1;
let newPoint2;
newPoint1 = { x: 5, y: 0 };
newPoint2 = { x: 8, y: 0 };
console.log(distance(newPoint1, newPoint2));
