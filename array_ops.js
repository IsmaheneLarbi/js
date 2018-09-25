"use strict";
/*
function getMiddleIndex(len)
{
	return (Math.floor((len - 1) / 2));
}

let styles = ["Jazz", "Blues"];
alert(styles);
styles.push(`Rock-n-Roll`);
alert(styles);
styles[getMiddleIndex(styles.length)] = `Classics`;
alert(styles);
styles.shift();
alert(styles);
styles.unshift("Rap", "Reggae");
alert(styles);
*/
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); 