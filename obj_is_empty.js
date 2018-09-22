"use strict";

function obj_is_empty(data)
{
	for (let key in data)
		return false;
	return true;
}

let schedule = {};
let data = {name:"Bruce"};
alert(obj_is_empty(schedule));
alert(obj_is_empty(data));