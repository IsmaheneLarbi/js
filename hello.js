"use strict";

function hello(name)
{
	let hello = `Hello, ${name}!`;
	say(hello);
}

function say(phrase)
{
	alert(`**${phrase}**`);
}