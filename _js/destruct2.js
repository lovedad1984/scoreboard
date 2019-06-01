// Object Destructuring Assigment

var o = {p: 42, q: true};
var {p, q, o = 1} = o;

console.log(p); // 42
console.log(q); // true

// default parameter
console.log(o);
