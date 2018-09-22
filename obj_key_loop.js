"user strict";

function showKeys()
{
	for (key in user)
	{
		alert("["+key+"]: "+user[key]);
	}
}

function duplicateObj(user)
{
	let clone = {};

	for (let key in user)
	{
		clone[key] = user[key];
	}
	return clone;
}

function cloneObj(user)
{
	let clone = Object.assign({}, user);

	return clone;
}

function showObject(data)
{
	for (let key in data)
		alert(key + " : "+ data[key]);	
}

let user = 
{
	name:"Ismahene",
	age:24,
	job:"data analyst",
	idol:"Brendon",
	"mother tongue" : "Arabic",
};

let duplicate = duplicateObj(user);
showObject(duplicate);

let clone = cloneObj(user);
showObject(clone);