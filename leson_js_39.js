function createCounter() {
    let count = 0;
  
    return {
        increment: function () {
            count++;
        },
  
        decrement: function () {
            count--;
        },
      
        getValue: function () {
            return count;
        }
    };
}
  
  
const counter = createCounter();
  

counter.increment();
counter.increment();
console.log("The count is:", counter.getValue()); 

counter.decrement();
console.log("The count is:", counter.getValue()); 