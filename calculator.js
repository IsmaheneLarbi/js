"use strict";

let calculator =
{
	read()
	{
		this.a = +prompt("Value 1 ?", 0);
		this.b = +prompt("Value 2 ?", 0);
	},
	sum()
	{
		return(this.a + this.b);
	},
	mult()
	{
		return(this.a * this.b);
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mult());
// alert(c.read.b);