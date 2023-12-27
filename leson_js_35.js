function testSimpl() {
    undeclaredVariable = 10;
    return undeclaredVariable;
}

function testStrict() {
    'use strict';
    undeclaredVariableStrict = 20; //Throw exception Reference Error
    return undeclaredVariableStrict; 
}

console.log(testSimpl());
console.log(testStrict());
