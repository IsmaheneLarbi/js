"use strict";

let obj = 
{
	nothing : undefined,	
};

alert("nothing" in obj);//plus fiable que alert("nothing" !== undefined);
alert(obj.nothing);