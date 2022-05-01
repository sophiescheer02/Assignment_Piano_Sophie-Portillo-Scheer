

export function activateButton(key: Element) {
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