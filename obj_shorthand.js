"use strict";

function createUser(name, age)
{
	return {
				name,
				age,
			};
}

/*
is equivalent to this 
function createUser(name, age)
{
	name:name,
	age:age,
};
*/
let user = createUser("Ismahene", 24);
alert(user.name);