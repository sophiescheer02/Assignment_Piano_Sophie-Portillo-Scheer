

export function activateColorButton(key: Element) {
  let color = key.getAttribute("class");
  if (color == 'key black') {
    key.classList.add('activeBlack'); 
 
  } else {
    key.classList.add('activeWhite');
  }

  setTimeout(deactivateColorButton, 250, key);
  
}


function deactivateColorButton(key: Element): void {
 key.classList.remove('activeWhite');
 key.classList.remove('activeBlack');
}