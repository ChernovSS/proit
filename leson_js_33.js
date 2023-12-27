//showMessage(); // Викличе TypeError
console.log(typeof showMessage); // Виведе "undefined"

var showMessage = function() {
    console.log('Message');
};



showMessage(); // Виведення дії функції 
console.log(typeof showMessage);  // Виведе "function"