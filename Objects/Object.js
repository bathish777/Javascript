const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

// access

console.log(person.name); // John
console.log(person['age']); // 30
//  modify 
person.age = 31;
person['city'] = 'Los Angeles';
//  using constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John', 30);
const jane = new Person('Jane', 25);
