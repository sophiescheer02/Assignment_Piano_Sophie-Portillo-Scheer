
export function displayNoteObovePiano(ton: string){
  let ton_final;
  const note = document.getElementById('note');
  const soundNote = note as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    ton_final = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    ton_final = ton.toUpperCase();

  }
  soundNote.innerHTML = ton_final as string;
}
