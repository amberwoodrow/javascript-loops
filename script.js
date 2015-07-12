console.log("Answer for example 1");
var numStr = ""
for (i=0; i<=1000; i+=100) {
  numStr += i + " ";
}
console.log(numStr.trim());
// Node returns an extra space at the end of the string, you can't tell it is there
// in the console but I added trim to numStr to chop the white space off the end anyway.

console.log("Answer for example 2");
var numStr = ""
for (i=1; i<=128; i*=2) {
  numStr += i + " ";
}
console.log(numStr.trim());

console.log("Answer for example 3");
var numStr = ""
for (i=0; i<=10; i+=2) {
  numStr += i + " ";
}
console.log(numStr.trim());

console.log("Answer for example 4");
var numStr = ""
for (i=3; i<=15; i+=3) {
  numStr += i + " ";
}
console.log(numStr.trim());

console.log("Answer for example 5");
var numStr = ""
for (i=9; i>=0; i-=1) {
  numStr += i + " ";
}
console.log(numStr.trim());

console.log("Answer for example 6");
var numStr = ""
for (i=1; i<=4; i+=1) {
  numStr += (i + " ").repeat(3);
}
console.log(numStr.trim());
// repeat() does not work in Node but it works in the browser. I assume because
// it is new, as MDN states on the documentation.

console.log("Answer for example 7");
var numStr = ""
for (i=0; i<=4; i+=1) {
  numStr += i + " ";
}
console.log(numStr.repeat(3).trim());
