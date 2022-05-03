
//Import of all modules 
import { activateColorButton} from "./changeKeyColor";
import { playAudio} from "./playAudio";
import { displayNoteObovePiano } from "./displayNoteAbovePiano";
import { toggleVisibility } from "./toggleVisibilityOfKeys";
import { curtainOpenWithEnter } from "./curtain";

/**
 * 
 */
/*Fremdcode von Codepen.io*/
document.addEventListener('onload', focus);
document.addEventListener('keydown', e => {
  curtainOpenWithEnter (e as unknown as HTMLElement);
});
/* ------------------------------------------*/

/**
 *First, an empty array is created which stores the ID and the KeyId. 
 */
let linkKeyToTon: string[] = [];
/**
 * In addition, a querySelector is used to read in the keys, divided into black and white, as a NodeList using the CSS classes.
 */
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');



let checkboxes = document.querySelectorAll("input[type=checkbox][name=controlLabel]");

// Assignment of Sound to keyboard for black and white keys 
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


//Click control with the mouse - EventListener enables clicking 
/**
 * In a forEach loop, each element that was previously read into the node list is checked for interaction with a mouse click by means of an EventListener.
 * After that, sound is played. A distinction is also made between black and white keys
 */
//White keys -Deklaration of variable ton was solved with an if-branching to assign a value
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

//Black keys -Deklaration of variable ton was solved with an if-branching to assign a value
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

// Control via keyboard
/**
 * Line 22 - Array linkKeyToTon [] is relevant to assign the tones to a key on laptop keyboard 
 * When the user presses a corresponding key, the value of the key is stored in a variable.
 * Subsequently, an if-branch is used to check whether the pressed key corresponds to a value stored in the array.
 * Than --> playAudio()
 */
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

//Boxes to control whether to display sounds and control keys on the keyboard
/**
 * ForEach-Loop checks if a checkbox is checked or not 
 * If it´s checked, toggleVisibility() is called up
 */
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
      toggleVisibility(); 
     })
});
 