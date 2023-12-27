const birthDate = new Date('1983-03-13');
const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
console.log(birthDate.toLocaleDateString('uk-Ua', options).replace(/\./g, '-'));
