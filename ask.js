"user strict";

function ask(question, yes, no)
{
	if (confirm(question))
		yes();
	else
		no();
}

ask("Do you wanna go with me to orel's concert ?",
	function(){	alert("Damn right !");},
	function(){	alert("Hell no !");}
	);