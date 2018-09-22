"use strict";

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert("user.sizes.width++");
alert("user.size.width = "+ user.sizes.width); 
alert("clone.size.width = "+ clone.sizes.width);// 51, see the result from the other one