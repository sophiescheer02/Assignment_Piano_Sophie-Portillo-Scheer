
export function curtainOpenWithEnter(e: any):void
{
    let curtainObject = document.getElementById("curtainObject") as HTMLElement;
	
	let show = document.getElementById("show") as HTMLElement;
	
	let openWithEnter = document.getElementById("openWithEnter") as HTMLElement;
	
	if(e.keyCode == 13) {
        curtainObject.className = "opencurtain";
        show.className = "extend";
        openWithEnter.className = "text";
	}
}
