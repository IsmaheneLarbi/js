"use strict";

function ask(question, yes, no)
{
	if (confirm(question))
		yes();
	else
		no();
}

ask("Do you know who Black Mamba is ?",
()=>{alert("Great! another 'Kill Bill' fan! :D");},
()=>{alert("You should watch your classics....");});