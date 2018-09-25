"use strict";

function Accumulator(startingValue)
{
	this.value = startingValue;

	this.read = function()
	{
		this.value += +prompt("Plus ?", 0);
	}
}

let acc = new
 Accumulator(24);
acc.read();
acc.read();
acc.read();
acc.read();
alert(acc.value);