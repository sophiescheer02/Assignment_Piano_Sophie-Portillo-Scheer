//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//import { helloWorld, Beispiel } from "./myModule";
//import { alertMe } from "./myOtherModule";

let allkeys = ['c3', 'a3'];
let ton;

let c3 = document.querySelector('#c3');
let a3 = document.querySelector('#a3');


c3?.addEventListener('click', function () {
  let ton = "c3";
  playAudio(ton);
  activateButton(ton);
});

a3?.addEventListener('click', function () {
  let ton = "a3";
  playAudio(ton);
  activateButton(ton);
});





