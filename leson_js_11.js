function insertElements(arr, index, ...elements) {
    return [...arr.slice(0, index + 1), ...elements, ...arr.slice(index + 1)];
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = insertElements(originalArray, 1, 6, 7);
  console.log(newArray); 