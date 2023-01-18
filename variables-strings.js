// in this file I'm trying out variables and strings from lectures

let x = 100;
let y = 100;
const size = 100;

rect(x, y, size, size);

x = x + 100;
y += 100;

rect(x, y, size, size);

// to check what the variable value is at that point in the code
console.log(x);

// strings

const squareName = "Bob";
const attribute = "pretty";
const sentence = squareName + " is " + attribute;
console.log(sentence);
