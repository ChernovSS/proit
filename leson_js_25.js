const xhr = new XMLHttpRequest();
const url = 'https://dummyjson.com/products';

xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText); 
    } else {
      console.error('Сталася помилка: ', xhr.status); 
    }
  }
};

xhr.open('GET', url, true);
xhr.send();