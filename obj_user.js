"user strict";

let user =
{
	name : "John",
	age : 30,
};
let key = prompt("What would you like to know about me ?", "name");
alert(user[key]);