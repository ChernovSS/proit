function checkPositiveNumber(number) {
    if (number < 0) {
      throw new Error('Число не може бути відємним!');
    }
    return 'Число позитивне: ' + number;
  }
  
  try {
    console.log(checkPositiveNumber(10)); 
    console.log(checkPositiveNumber(-5)); 
  } catch (error) {
    console.error('Виняток:', error.message);