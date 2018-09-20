"user strict";

let browser = prompt("What browser do you use ?", "");

if (browser === "Edge")
	alert( "You've got the Edge!");
else if (browser === "Chrome" || browser === "Safari" || browser === "Mozilla" || browser === "Opera")
	alert( 'Okay we support these browsers too' );
else
    alert( 'We hope that this page looks ok!' );