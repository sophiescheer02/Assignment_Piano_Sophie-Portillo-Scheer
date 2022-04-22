//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//import { helloWorld, Beispiel } from "./myModule";
//import { alertMe } from "./myOtherModule";

/*let c3 = document.querySelector('#c3');
let a3 = document.querySelector('#a3');*/
let linkKeyToTon: string[] = [];
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');
let showkeynotes = document.getElementById('note');
let note = document.querySelector(".shownotes");


let piano_checked = document.getElementById("Piano") as HTMLInputElement;
let organ_soul_checked = document.getElementById("Soul Organ") as HTMLInputElement;

/*let ton = "init";*/

keyw?.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})

keyb?.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})

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


document.addEventListener("keydown", e => {
  if (e.repeat) return; 
  const x = e.key;
  linkKeyToTon.forEach(value => {
    if (value == x) {
      const position = linkKeyToTon.indexOf(value);
      const playSound = linkKeyToTon[position-1]; 
      playAudio(playSound as string);
      let bta = document.getElementById(playSound);
      activateButton(bta as HTMLElement);
    }
    
  })
  //const ton = key.getAttribute("keyid");
    //playAudio(ton as string);
    //activateButton(key);
  });



function playAudio(ton: string) {
  
  if (piano_checked.checked) {
    const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
    audio.play();
  } else if (organ_soul_checked.checked) {
    const audio = new Audio('./src/Organ/samples_' + ton + '.m4a');
    audio.play();
  } else {
    const audio = new Audio('./src/HeavyMetalOrgan/samples_' + ton + '.m4a');
    audio.play();
  }
  //const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
  
  shownote(ton);
}



function activateButton(key: Element) {
  let color = key.getAttribute("class");
  if (color == 'key black') {
    key.classList.add('activeBlack'); 
 
  } else {
    key.classList.add('activeWhite');
  }

  setTimeout(deactivateButton, 250, key);
  
}


function deactivateButton(key: Element): void {
 key.classList.remove('activeWhite');
 key.classList.remove('activeBlack');
}

function shownote(ton: string){
  let ton_final;
  const test = document.getElementById('note');
  const test2 = test as HTMLElement;
  //const note2 = note as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    ton_final = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    ton_final = ton.toUpperCase();

  }
  test2.innerHTML = ton_final as string;
}


