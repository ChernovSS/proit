function modifyArray(array, callback) {
    const modifiedArray = [];
  
    for (let i = 0; i < array.length; i++) {
      modifiedArray.push(callback(array[i]));
    }
  
    return modifiedArray;
}
  
function multiplyByTwo(value) {
    return value * 2;
}

const arr = [1, 2, 3, 4, 5];

console.log(modifyArray(arr, multiplyByTwo));