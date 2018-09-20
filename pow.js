"user strict"

let pow = function(x, n)
{
	let pow = x;

	if (n === 0)
	{
		alert("Power 0? Really, human?!");
		return (-1);
	}
	while (n > 1)
	{
		pow *= x;
		n--;
	}
	return (pow);
};

function showPower()
{
	x = +prompt("Enter number: ", 0);
	n = +prompt("Enter power: ", 1);
	alert(pow(x, n));
}
show = showPower;
show();
showPower();