function checkNumber(number) {
    if (typeof number != 'number') {
        return 'Is not a number';
    }
    
    if (number % 2 == 0) {
        return 'Парне';
    }

    return 'Не парне';
}

console.log(checkNumber(2));
console.log(checkNumber(3));
console.log(checkNumber('asasasa'));
