"use strict";


function Calculator()
{
	this.read = function()
	{	this.a = +prompt("Enter value 1: ", 0);
		this.b = +prompt("Enter value 2: ", 0);
	};
	this.sum = function()
	{
		return (this.a + this.b);
	};
	this.mult = function()
	{
		return (this.a * this.b);
	};
}

let calculator =  new Calculator();
calculator.read();
alert("Sum = "+ calculator.sum());
alert("Product = "+ calculator.mult());
