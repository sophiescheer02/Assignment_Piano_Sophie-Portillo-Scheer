
export function displayNoteObovePiano(ton: string){
  let soundFinal;
  const note = document.getElementById('note');
  const soundNote = note as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    soundFinal = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    soundFinal = ton.toUpperCase();

  }
  if(soundFinal){
     soundNote.innerHTML = soundFinal;
  }
 
}
