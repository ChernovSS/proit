function User(name, age) {
    this.name = name;
    this.age = age;
    
    this.showInfo = function() {
      console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
    };
  }
  
const user1 = new User('Сергій', 40);
  

user1.showInfo(); 