class Animal {
   
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eat`);
    }
}

class Bird extends Animal { 
    constructor(name) {
        super(name);
    }

    fly() {
        console.log(`${this.name} is fly`);
    }
}

let bird1 = new Bird('Chaika');

bird1.eat();
bird1.fly();