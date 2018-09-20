"user strict";


let age = +prompt("What's your age ?", "");

function	checkAge(age)
{
	return ((age > 18) || confirm("Did your parents allow you to come ?"));
}