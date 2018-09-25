"use strict";

function getMaxSubSum(arr)
{
	let sum = 0;
	let	max = 0;

	for(let number of arr)
	{
		if ((sum + number) >= 0)
		{
			sum += number;
			max = (sum > max) ? sum : max;
		}
		else
			sum = 0;
	}
	return (max);
}

alert(getMaxSubSum([-1, 2, 3]));