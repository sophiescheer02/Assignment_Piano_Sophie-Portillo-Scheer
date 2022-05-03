
/**
 * Function activateColorButton(): The check whether it is a black or white key is stored in the variable color
 * An if-branch checks whether the variable Color is a white or black key
 * If it is a black key, it is set to active
 * In the Else case, the same happens for white keys
 */
export function activateColorButton(key: Element) {
  let color = key.getAttribute("class");
  if (color == 'key black') {
    key.classList.add('activeBlack'); 
 
  } else {
    key.classList.add('activeWhite');
  }

  /**
   * With function SetTime the colour is set back to the original colour (white or black) after a certain time with the function deactivateButton()
   * This removes applied CSS class
   */
  setTimeout(deactivateColorButton, 250, key);
  
}

//Remove the CSS Class and set color back to black or white
function deactivateColorButton(key: Element): void {
 key.classList.remove('activeWhite');
 key.classList.remove('activeBlack');
}