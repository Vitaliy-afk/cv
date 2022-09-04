


const person = {
   name: 'Evgen',
   age: 33,
   addres: {
      house: 10,
      street: 'Home st.'

   }
};

// const age = person.age;
// const name = person.name;

const{age, name} = person;

alert('Hello ${name}! Your age is: ${age}');


