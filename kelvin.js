// declare an immutable variable and assign it a value
const kelvin = 293;
// declare an immutable varible and assign it a value based on a previously declared variable plus an operator
const celsius = kelvin - 273;
// declare a mutuable variable whose value will change based on celsius input
let fahrenheit = celsius * 9/5 + 32;
// use a Math.method to round down the floating number to an interger
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// practice
var newton = celsius * 33 / 100;
console.log(Math.floor(newton));
