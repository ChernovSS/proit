const inputString = "Hello, how are you?";

const vowelRegex = /[aeiou]/gi;

const vowelsFound = inputString.match(vowelRegex);

console.log(vowelsFound); 