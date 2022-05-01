
export let pianoCheckbox = document.getElementById("Piano") as HTMLInputElement;

export function playAudio(ton: string) {
  
  if (pianoCheckbox.checked) {
    const audio = new Audio('./src/Piano/samples_' + ton + '.mp3');
    audio.play();
  } else {
    const audio = new Audio('./src/Organ/samples_' + ton + '.m4a');
    audio.play();
  }
  
}

