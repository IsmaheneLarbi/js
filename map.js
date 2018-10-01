"use strict";

let recipeMap = new Map([
	["sugar", 150],
	["lemon", 2],
	["butter", 125],
	["dough", 130]]);
/*for (let key of recipeMap.keys())
	alert(key);
for (let value of recipeMap.values())
	alert(value);
for (let entry of recipeMap.entries())
	alert(entry);
	*/
recipeMap.forEach((value, key, map)=>{alert('${key}:${value}');});