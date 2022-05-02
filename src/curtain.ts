
export function curtainOpenWithEnter(e: any):void
{

    let openCurtain = document.getElementById("openCurtain") as HTMLElement;
	
	let show = document.getElementById("show") as HTMLElement;
	
	
	let begin = document.getElementById("begin") as HTMLElement;

	/*Fremdcode von Codepen.io*/
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

