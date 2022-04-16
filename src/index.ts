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


function playAudio(ton: string) {
  const audio = new Audio('./samples_' + ton + '.mp3');
  audio.play();
  //console.log('clicked');
}

function activateButton(ton: string) {
  ton?.classList.add('active');
  setTimeout(deactivateButton, 200);
}

function activateButton2() {
  a3?.classList.add('active');
  setTimeout(deactivateButton, 200);
}

function deactivateButton(ton: string) {
  a3?.classList.remove('active');
  a3?.classList.remove('active');
}

