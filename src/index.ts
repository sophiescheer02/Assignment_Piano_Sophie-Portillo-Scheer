

import { activateColorButton} from "./changeKeyColor";
import { playAudio} from "./playAudio";
import { displayNoteObovePiano } from "./displayNoteObovePiano";
import { toggleVisibility } from "./toggleVisibilityOfKeys";
//import {curtainOpen} from "./curtain";

/*document.addEventListener('onload', focus);
document.addEventListener('keydown', e => {
  curtainOpen (e as unknown as HTMLElement);
});*/

let linkKeyToTon: string[] = [];
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');



let checkboxes = document.querySelectorAll("input[type=checkbox][name=controlLabel]");

// Zuordnung Ton zu Tastatur für schwarze und weiße Tasten
keyw.forEach(key => {
  let id = key.getAttribute("id")
  let keyId = key.getAttribute("keyid")
  linkKeyToTon.push(id as string, keyId as string);
  console.log(linkKeyToTon);
})

keyb.forEach(key => {
  let id = key.getAttribute("id")
  let keyId = key.getAttribute("keyid")
  linkKeyToTon.push(id as string, keyId as string);
  console.log(linkKeyToTon);
})


//Click-Steuerung mit Maus
keyw.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    if(ton){

    playAudio(ton);
    displayNoteObovePiano(ton);
    activateColorButton(key);

    }
    
  });
})

keyb.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    if(ton){

    playAudio(ton);
    displayNoteObovePiano(ton);
    activateColorButton(key);

    }
   
  });
})

// Steuerung per Tastatur 
document.addEventListener("keydown", e => {
  if (e.repeat) return; 
  const keyControl = e.key;
  linkKeyToTon.forEach(value => {
    if (value == keyControl) {
      const position = linkKeyToTon.indexOf(value);
      const playSound = linkKeyToTon[position-1];

      if(playSound){
      playAudio(playSound);
      displayNoteObovePiano(playSound);
      }
      
      let buttonIsActive = document.getElementById(playSound);
      activateColorButton(buttonIsActive as HTMLElement);
    }
    
  })

  });

//Boxen zum steuern, ob auf der Tastatur Töne und Steuerungstasten angezeigt werden sollen 
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
      toggleVisibility(); 
     })
});
 