"use strict";

let fruits = ["Apple", "Banana", "Lemon", "Pineapple"];
for (let fruit of fruits)//perfect for arrays, lists only numeric-keyed elts 
	alert(fruit);

for (let key in fruits)//used for generic objects, lists all elts even if the key != numeric, slower 
	alert(fruits[key]);