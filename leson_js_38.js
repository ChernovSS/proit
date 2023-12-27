let globalVariable = 'Global Variable';

function outerFunction() {
  let localVariable = 'Local Variable';

    function innerFunction() {
        console.log('Inner Function:', globalVariable);
        console.log('Inner Function:', localVariable);
    }

  innerFunction();
}
outerFunction();

//викликаємо outerFunction внутрі якої викликається innerFunction
// внутрі innerFunction виводимо в консоль дві зміні globalVariable - доступна в скоупі всього скрипту а localVariable тільки в скоупі outerFunction