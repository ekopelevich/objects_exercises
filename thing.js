function personMaker(firstName, lastName) {
  return {
    full_name: function() {
      return firstName + " " + lastName;
    }
  }
}

var person = personMaker('Elana', 'Kopelevich');

console.log(person.firstName);
console.log(person.full_name());
