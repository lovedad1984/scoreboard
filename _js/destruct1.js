// Array Destructuring Assigment

var foo = ['one', 'two', 'three'];

// var [two, one, three, four = 'four'] = ['one', 'two', 'three'];
var [ one, ...two ] = ['one', 'two', 'three'];
console.log(one); // "one"
console.log(two); // "two"
console.log(typeof two);


// array 는 값이 순서대로 들어간다