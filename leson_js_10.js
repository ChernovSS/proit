console.log('global variables  x - ',x);

var x = 11;

function test() {
    let a = 12;
    console.log('local variables  a - ', a);
    console.log('global variables  x - ',x);
}

console.log('global variables  x - ', x);
test();
//  console.log('local variables  a - ', a); // throws error 