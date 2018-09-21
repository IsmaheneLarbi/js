"use strict";

let fruit = prompt("What fruit would you like me to buy ?", "banana");
let errands =
{
	[fruit] : 5,
};

alert(errands[fruit]);
let addition = prompt("Anything else ?", "socks");
errands =
{
	[fruit + addition] : 5,
};
alert(errands[fruit + addition]);