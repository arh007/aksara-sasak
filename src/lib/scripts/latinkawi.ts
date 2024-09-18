import { convert as sasakKawiConvert } from "$lib/scripts/sasakkawi";
import { convert as latinSasakConvert } from "$lib/scripts/latinsasak";

function convert(text : string, isIgnoreSpace : boolean = false) : string 
{
	var javaText = latinSasakConvert(text, isIgnoreSpace);
	return sasakKawiConvert(javaText);
}

export { convert };