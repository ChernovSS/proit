let student = {
    name: 'Ivanonv Ivan',
    age: 18,
    subjects: ['mathematic', 'biology', 'algorithm'],

    displayInfo: function () {
       return `Студент ${this.name} віком ${this.age} вивчає ${this.subjects.join(', ')}`;
    }
}


console.log(student.displayInfo());
