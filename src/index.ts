//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!

//import { helloWorld, Beispiel } from "./myModule";
//import { alertMe } from "./myOtherModule";

/*let c3 = document.querySelector('#c3');
let a3 = document.querySelector('#a3');*/
let linkKeyToTon: string[] = [];
let keyw = document.querySelectorAll('.key.white');
let keyb = document.querySelectorAll('.key.black');
let showkeynotes = document.getElementById('note');
let note = document.querySelector(".shownotes");


let piano_checked = document.getElementById("Piano") as HTMLInputElement;
let organ_soul_checked = document.getElementById("Soul Organ") as HTMLInputElement;

let activeNotes = document.getElementById("activeNote") as HTMLInputElement;
let activeKeys = document.getElementById("activeKeys") as HTMLInputElement;

//let notesToChange = document.getElementsByClassName("notelabelWhite" "notelabelBlack") as HTMLCollectionOf<HTMLElement>;

const whiteNotesToChange = Array.from(document.getElementsByClassName("notelabelWhite") as HTMLCollectionOf<HTMLElement>)
     ,blackNotesToChange = Array.from(document.getElementsByClassName("notelabelBlack") as HTMLCollectionOf<HTMLElement>)
     ,notesToChange = Array.from(new Set(whiteNotesToChange.concat(blackNotesToChange)));

const whiteKeysToChange = Array.from(document.getElementsByClassName("labelwhite") as HTMLCollectionOf<HTMLElement>)
     ,blackKeysToChange = Array.from(document.getElementsByClassName("labelblack") as HTMLCollectionOf<HTMLElement>)
     ,keysToChange = Array.from(new Set(whiteKeysToChange.concat(blackKeysToChange)));


let checkboxes = document.querySelectorAll("input[type=checkbox][name=controlLabel]");

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {

    if (activeNotes.checked && activeKeys.checked == false) {
      if(notesToChange.length != 0){
        for (let i = 0; i < notesToChange.length; i++) { 
          notesToChange[i].style.visibility = "visible";
        }
      }
      if(keysToChange.length != 0){
        for (let j = 0; j < keysToChange.length; j++) { 
          keysToChange[j].style.visibility = "hidden";
        }
      }
      console.log("Noten aktiv, Tastatur inaktiv");
 

    } else if (activeNotes.checked && activeKeys.checked) {
      if(notesToChange.length != 0){
        for (let i = 0; i < notesToChange.length; i++) { 
          notesToChange[i].style.visibility = "visible";
        }
      }
      if(keysToChange.length != 0){
        for (let j = 0; j < keysToChange.length; j++) { 
          keysToChange[j].style.visibility = "visible";
        }
      }
      console.log("Noten aktiv, Tastatur aktiv");
 
      

    } else if (activeNotes.checked == false && activeKeys.checked){
      if(notesToChange.length != 0){
        for (let i = 0; i < notesToChange.length; i++) { 
          notesToChange[i].style.visibility = "hidden";
        }
      }
      if(keysToChange.length != 0){
        for (let j = 0; j < keysToChange.length; j++) { 
          keysToChange[j].style.visibility = "visible";
        }
      }
      console.log("Noten inaktiv, Tastatur aktiv");



    } else {
      if(notesToChange.length != 0){
        for (let i = 0; i < notesToChange.length; i++) { 
          notesToChange[i].style.visibility = "hidden";
        }
      }
      if(keysToChange.length != 0){
        for (let j = 0; j < keysToChange.length; j++) { 
          keysToChange[j].style.visibility = "hidden";
        }
      }
      console.log("Noten inaktiv, Tastatur inaktiv");
    }
  })
});

function toggleBoxVisibility() {
  let tees = document.getElementById("c3") as HTMLElement
  //let test = document.getElementByClassName("notelabelBlack") as HTMLCollectionOf<HTMLElement>;

  if (activeNotes.checked && activeKeys.checked == false) {
     tees.style.visibility = "visible";
     //test.style.add= ("visible");
     console.log("Notn aktiv, Tastatur nicht");
  
      } 
  else if (activeKeys.checked && activeNotes.checked == false) {
  
    console.log("Noten nicht aktiv, Tastatur schon");
  
    }
  else if (activeNotes.checked && activeKeys.checked){
    console.log("Notn aktiv, Tastatur auch");

  }
  else{


  }
}


keyw?.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})

keyb?.forEach(key => {
  let x = key.getAttribute("id")
  let z = key.getAttribute("keyid")
  linkKeyToTon.push(x as string, z as string);
  console.log(linkKeyToTon);
})

keyw?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(key);
  });
})

keyb?.forEach(key => {
  key.addEventListener("click", () => {
    const ton = key.getAttribute("id");
    playAudio(ton as string);
    activateButton(key);
  });
})


document.addEventListener("keydown", e => {
  if (e.repeat) return; 
  const x = e.key;
  linkKeyToTon.forEach(value => {
    if (value == x) {
      const position = linkKeyToTon.indexOf(value);
      const playSound = linkKeyToTon[position-1]; 
      playAudio(playSound as string);
      let bta = document.getElementById(playSound);
      activateButton(bta as HTMLElement);
    }
    
  })
  //const ton = key.getAttribute("keyid");
    //playAudio(ton as string);
    //activateButton(key);
  });



function playAudio(ton: string) {
  
  if (piano_checked.checked) {
    const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
    audio.play();
  } else {
    const audio = new Audio('./src/Organ/samples_' + ton + '.m4a');
    audio.play();
  }
  //const audio = new Audio('./src/Sound/samples_' + ton + '.mp3');
  
  shownote(ton);
}



function activateButton(key: Element) {
  let color = key.getAttribute("class");
  if (color == 'key black') {
    key.classList.add('activeBlack'); 
 
  } else {
    key.classList.add('activeWhite');
  }

  setTimeout(deactivateButton, 250, key);
  
}


function deactivateButton(key: Element): void {
 key.classList.remove('activeWhite');
 key.classList.remove('activeBlack');
}

function shownote(ton: string){
  let ton_final;
  const test = document.getElementById('note');
  const test2 = test as HTMLElement;
  
  if (ton.charAt(1) == "-"){

    ton_final = ton.charAt(0).toUpperCase() + ton.charAt(2) +"#";

  } else {

    ton_final = ton.toUpperCase();

  }
  test2.innerHTML = ton_final as string;
}




