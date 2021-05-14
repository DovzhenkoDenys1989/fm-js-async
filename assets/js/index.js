"use strict";

const square1 = document.getElementById("square1");
const square2 = document.getElementById("square2");
const square3 = document.getElementById("square3");

function clickHandler(e, msg){
  console.log(e.currentTarget, e.target)
  alert(msg);
}

window.addEventListener('click', (e) => {
  clickHandler(e, 'window');
})

document.addEventListener('click', (e) => {
  clickHandler(e, 'document');
}, true)

square1.addEventListener('click', (e) => {
  clickHandler(e, '1');
  e.stopPropagation();
}, true)

square2.addEventListener('click', (e) => {
  clickHandler(e, '2');
})

square3.addEventListener('click', (e) => {
  clickHandler(e, '3');
})

