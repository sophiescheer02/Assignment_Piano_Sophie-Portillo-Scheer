// THIS IS A MODULE!
export let piano_checked = document.getElementById("Piano") as HTMLInputElement;
//let organ_soul_checked = document.getElementById("Soul Organ") as HTMLInputElement;

export function playAudio(ton: string) {
  
  if (piano_checked.checked) {
    const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
    audio.play();
  } else {
    const audio = new Audio('./src/Organ/samples_' + ton + '.m4a');
    audio.play();
  }
  //const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
  
  //shownote(ton);
}

