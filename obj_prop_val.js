"use strict";

let user = {
  name: "Ismahene",
  age: 30,
  address: undefined,
  
  sayHi:function (){
  	alert("Hi! My name is " + this.name);
  }
};
user.sayHi();