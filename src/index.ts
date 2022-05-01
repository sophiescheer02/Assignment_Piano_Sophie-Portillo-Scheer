

import { activateButton} from "./changeKeyColor";
import { playAudio} from "./playAudio";
import { shownote } from "./shownote";
import { toggleVisibility } from "./toggleVisibility";
import {curtainOpen} from "./curtain";

document.addEventListener('onload', focus);
document.addEventListener('keydown', e => {
  curtainOpen (e as unknown as HTMLElement);
});

let linkKeyToTon: string[] = [];
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');



let checkboxes = document.querySelectorAll("input[type=checkbox][name=controlLabel]");

// Zuordnung Ton zu Tastatur für schwarze und weiße Tasten
keyw.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})

keyb.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})


//Click-Steuerung mit Maus
keyw.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    shownote(ton as string);
    activateButton(key);
  });
})

keyb.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    shownote(ton as string);
    activateButton(key);
  });
})

// Steuerung per Tastatur 
document.addEventListener("keydown", e => {
  if (e.repeat) return; 
  const x = e.key;
  linkKeyToTon.forEach(value => {
    if (value == x) {
      const position = linkKeyToTon.indexOf(value);
      const playSound = linkKeyToTon[position-1]; 
      playAudio(playSound as string);
      shownote(playSound as string);
      let bta = document.getElementById(playSound);
      activateButton(bta as HTMLElement);
    }
    
  })
  //const ton = key.getAttribute("keyid");
    //playAudio(ton as string);
    //activateButton(key);
  });

//Boxen zum steuern, ob auf der Tastatur Töne und Steuerungstasten angezeigt werden sollen 
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
      toggleVisibility(); 
     })
});
 