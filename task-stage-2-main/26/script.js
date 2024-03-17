const number = new Number(500);
console.dir(number);
console.dir(Number.prototype.__proto__);
console.dir(Number.prototype.__proto__.__proto__);

console.log("--------------------------------");
const string = new String("text");
console.dir(string);
console.dir(String.prototype.__proto__);
console.dir(String.prototype.__proto__.__proto__);
console.log("--------------------------------");
const boolean = new Boolean(true);
console.dir(string);
console.dir(Boolean.prototype.__proto__);
console.dir(Boolean.prototype.__proto__.__proto__);
