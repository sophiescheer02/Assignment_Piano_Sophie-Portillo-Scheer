
/**
 * pianoCheckbox reads all the keys from the Piano section/ID in HTML document and stores them in the variable. 
 * So there are all black and white keys in one variabel. This variable ist really important for the funktion playAudio.
  */ 
export let pianoCheckbox = document.getElementById("Piano") as HTMLInputElement;

/**
 * The funtion playAudio assigns the tone to the individual keys so that each key can play a tone.
 */
export function playAudio(ton: string) {
  
  /**
   * In an If branch, an audio constructor is created that returns a new HTML audio element
   * Variable pianoCheckbox is the condition
   */
  if (pianoCheckbox.checked) {
    /**
     * Variable ton completes the path to the file dynamically, 
     * so that the correct note is played depending on the passed variable ton, which consists of the ID of the HTML element.
     */
    const audio = new Audio('./src/Piano/samples_' + ton + '.mp3');
    audio.play();
    
    /**
     * In addition, the If branch checks from which folder the tones are to be taken. 
     * Due to the possibility of not only being able to play the piano, an Else case is built in
     * It is also checking, which radio button is active (Organ or Piano)
     */
  } else {
    const audio = new Audio('./src/Organ/samples_' + ton + '.m4a');
    audio.play();
  }
  
}

