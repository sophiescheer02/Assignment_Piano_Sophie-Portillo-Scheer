import { forEachChild } from "../node_modules/typescript/lib/typescript";

let activeNotes = document.getElementById("activeNote") as HTMLInputElement;
let activeKeys = document.getElementById("activeKeys") as HTMLInputElement;

//let notesToChange = document.getElementsByClassName("notelabelWhite" "notelabelBlack") as HTMLCollectionOf<HTMLElement>;

const whiteNotesToChange = Array.from(document.getElementsByClassName("notelabelWhite") as HTMLCollectionOf<HTMLElement>)
     ,blackNotesToChange = Array.from(document.getElementsByClassName("notelabelBlack") as HTMLCollectionOf<HTMLElement>)
     ,notesToChange = Array.from(new Set(whiteNotesToChange.concat(blackNotesToChange)));

const whiteKeysToChange = Array.from(document.getElementsByClassName("labelwhite") as HTMLCollectionOf<HTMLElement>)
     ,blackKeysToChange = Array.from(document.getElementsByClassName("labelblack") as HTMLCollectionOf<HTMLElement>)
     ,keysToChange = Array.from(new Set(whiteKeysToChange.concat(blackKeysToChange)));



 export function toggleVisibility(){

    if (activeNotes.checked && activeKeys.checked == false) {
        if(notesToChange.length != 0){
          notesToChange.forEach(changeNote => {
            changeNote.style.visibility = "visible";
          })
        }
        if(keysToChange.length != 0){
          keysToChange.forEach(changeKey => {
            changeKey.style.visibility = "hidden";
          })
        }
        console.log("Noten aktiv, Tastatur inaktiv");
   
  
      } else if (activeNotes.checked && activeKeys.checked) {
        if(notesToChange.length != 0){
          notesToChange.forEach(changeNote => {
            changeNote.style.visibility = "visible";
          })
        }

        if(keysToChange.length != 0){
          keysToChange.forEach(changeKey => {
            changeKey.style.visibility = "visible";
          })
        }
        console.log("Noten aktiv, Tastatur aktiv");
   
  
  
      } else if (activeNotes.checked == false && activeKeys.checked){
        if(notesToChange.length != 0){

          notesToChange.forEach(changeNote => {
            changeNote.style.visibility = "hidden";
          })
        }

        if(keysToChange.length != 0){
          keysToChange.forEach(changeKey =>{
            changeKey.style.visibility = "visible";
          })
        }
        console.log("Noten inaktiv, Tastatur aktiv");
  
  
  
      } else {
        if(notesToChange.length != 0){
          notesToChange.forEach(changeNote => {
            changeNote.style.visibility = "hidden";
          })
        }

        if(keysToChange.length != 0){
          keysToChange.forEach(changeKey => {
            changeKey.style.visibility = "hidden";
          })
        }
        console.log("Noten inaktiv, Tastatur inaktiv");
      }
} 

