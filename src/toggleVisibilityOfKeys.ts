
/**
 * Checkboxes are declared as HTMLInputElement in the variable activeNotes and activeKeys
 */
let activeNotes = document.getElementById("activeNote") as HTMLInputElement;
let activeKeys = document.getElementById("activeKeys") as HTMLInputElement;

/**
 * Arrays: all elements with the class name notelabelWhite and notelabelBlack are read into an HTMLCollection
 * These are the notes that are to be displayed later on the keys 
 * An array is then created from this generic collection and written into the variables whiteNotesToChange and blackNotesToChange
 * After both elements have been read into the arrays,  whiteNotesToChange and blackNotesToChange are reduced to array notesToChange
 */

const whiteNotesToChange = Array.from(document.getElementsByClassName("notelabelWhite") as HTMLCollectionOf<HTMLElement>)
     ,blackNotesToChange = Array.from(document.getElementsByClassName("notelabelBlack") as HTMLCollectionOf<HTMLElement>)
     ,notesToChange = Array.from(new Set(whiteNotesToChange.concat(blackNotesToChange)));

     /**
      * Array: Same process for keys 
      * An array is then created from this generic collection and written into the variables whiteKeysToChange and blackKeysToChange
      * After both elements have been read into the arrays, whiteKeysToChange and blackKeysToChange are reduced to array keysToChange
      */
const whiteKeysToChange = Array.from(document.getElementsByClassName("labelwhite") as HTMLCollectionOf<HTMLElement>)
     ,blackKeysToChange = Array.from(document.getElementsByClassName("labelblack") as HTMLCollectionOf<HTMLElement>)
     ,keysToChange = Array.from(new Set(whiteKeysToChange.concat(blackKeysToChange)));


/**
 * Function toggleVisibility(): User can choos between displaying the note, the key to control the keyboard or both indications 
 */
 export function toggleVisibility(){
   /**
    * With the help of the method .checked, one then reads out whether the Boolean values are set to true or false
    * This means whether the checkbox was ticked or not. These are then used as conditions in the if-branch
    * The next step is to iterate over both arrays
    * This is done with the help of a forEach loop and the properties .style.visibility
    * These properties determine whether an element is set to be visible or hidden for the user
    */
    //Case 1: Show notes, do not show keyboard control
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
   
        
        //Case 2: Show notes, show keyboard control 
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
   
      
       //Case 3: Do not show notes, show keyboard control
       
  
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
  
  
      
       // Case 4: Do not show notes, do not show keyboard control

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

