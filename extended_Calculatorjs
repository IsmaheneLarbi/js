"use strict";

function Calculator(str)
{
	this.methods = {
		'+': (a, b)=> a + b,
		'-': (a, b)=> a - b
	};

	this.calculate = function(str)
	{
		this.str = str.replace(/ +/g, ' ');
		let arr = this.str.split(' ', 3);
		if (isNaN(parseInt(arr[0])) || isNaN(parseInt(arr[2])) || (!(arr[1] in this.methods)))
			return -1;
		let a = parseInt(arr[0]);
		let op = arr[1];
		let b = parseInt(arr[2]);
		return (this.methods[op](a, b));
	},

	this.addMethod = function(op, func)
	{
		this.methods[op] = func;
	}
}

let c = new Calculator;
alert(c.calculate("123      +        3"));
c.addMethod("*", (a, b)=>(a * b));
alert(c.calculate("123      *        3"));