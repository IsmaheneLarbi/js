"use strict";

function array_sum_input()
{
	let sum = 0;
	let value = 0;
	let arr = [];

	while ((value = +prompt("Enter a valid numeric value", 0)) && (isFinite(value)))
	{
		alert("Value entered: "+ value);
		arr.push(value);
		sum += value;
	}
	alert("My array :"+ arr);
	return sum;
}

alert(array_sum_input());