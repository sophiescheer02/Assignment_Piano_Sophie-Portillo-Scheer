//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//import { helloWorld, Beispiel } from "./myModule";
//import { alertMe } from "./myOtherModule";

let c3 = document.querySelector('#c3');
let a3 = document.querySelector('#a3');
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');
let key;
let ton = "init";

keyw?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(ton as string);
    console.log(ton);
  });
})

keyb?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(ton as string);
    console.log(ton);
  });
})


/* c3?.addEventListener('click', function () {
  const ton = "c3";
  playAudio(ton);
  activateButton(ton);
}); */

/*a3?.addEventListener('click', function () {
  let ton = "a3";
  playAudio(ton);
  activateButton(ton);
}); */


function playAudio(ton: string) {
  const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
  audio.play();
  //console.log('clicked');
}

function activateButton(ton: string) {
  //ton?.classList.add('active'); 
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

