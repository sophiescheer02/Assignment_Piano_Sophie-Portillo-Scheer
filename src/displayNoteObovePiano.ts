
export function displayNoteObovePiano(ton: string){
  let soundFinal;
  const noteToDisplay = document.getElementById('note');
  const soundNote = noteToDisplay as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    soundFinal = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    soundFinal = ton.toUpperCase();

  }
  if(soundFinal){
     soundNote.innerHTML = soundFinal;
  }
 
}
