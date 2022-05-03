
/**
 * Function displayNoteAbovePiano(): Is needed to output the played note to the user
 */
export function displayNoteAbovePiano(ton: string){
  let soundFinal;
  const noteToDisplay = document.getElementById('note');
  const soundNote = noteToDisplay as HTMLElement;
  
  //If-branching filters out which notes have a hyphen at index 1
  if (ton.charAt(1) == "-"){

    //If this is the case, then a change is made in the tonFinal variable
    //String at position 0 is capitalised by method toUpperCase(), hyphen is omitted and string at position 2 follows
    //For black tones, a # is then added
    soundFinal = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

    //Else: If it is not a black key - Change String to Uppercase
  } else {

    soundFinal = ton.toUpperCase();

  }

  // Output of the final note
  if(soundFinal){
     soundNote.innerHTML = soundFinal;
  }
 
}
