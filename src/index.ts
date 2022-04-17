//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//import { helloWorld, Beispiel } from "./myModule";
//import { alertMe } from "./myOtherModule";

let c3 = document.querySelector('#c3');
let a3 = document.querySelector('#a3');
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');
let ton = "init";

keyw?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(key);
  });
})

keyb?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(key);
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

function activateButton(key: Element) {
  key.classList.add('active'); 
  setTimeout(deactivateButton, 300, key);
  
}


function deactivateButton(key: Element): void {
 key.classList.remove('active');
}

