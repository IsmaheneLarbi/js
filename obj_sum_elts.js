"use strict";

function obj_sum_elts(data)
{
	let sum = 0;

	for (let key in data)
		sum += data[key];
	return sum;
}

function multiplyNumeric(data)
{
	for (let key in data)
	{
		((typeof data[key]) === "number") && (data[key] *= 2);
	}
	return data;
}

let salaries = 
{
	John : "mechant",
	Ismahene: 3200,
	Esma: "deux-mille",
	Sasuke: 0,
};
multiplyNumeric(salaries);
for (let key in salaries)
	alert(salaries[key]);