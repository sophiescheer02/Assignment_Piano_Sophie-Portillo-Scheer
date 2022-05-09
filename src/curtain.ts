//Function curtainOpenWithEnter() to open a curtain and start the show with ENTER
export function curtainOpenWithEnter(e: any):void
{
    /**
     * At first: Initialisation of the HTM elements
     * OpenCurtain to control the animation
     * Show to open the curtain
     * begin to press ENTER and start the animation
     */
    let openCurtain = document.getElementById("openCurtain") as HTMLElement;
	
	let show = document.getElementById("show") as HTMLElement;
	
	
	let begin = document.getElementById("begin") as HTMLElement;

	/*Fremdcode von Codepen.io*/
    //Subsequently, an if-branch checks whether the ENTER key was pressed
    //If this is the case, the declared variables are assigned to a class that is relevant for styling with CSS
	if(e.keyCode == 13) {
        openCurtain.className = "open";
        show.className = "extend";
        begin.className = "hide";
	}
    /* Fremdcode von Codepen.io */
    setTimeout(function() {
        begin.style.display = 'none';
    }, 2000);
}

//Calling the function in index.ts