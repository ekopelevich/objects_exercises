module.exports = {

  Person: function  (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFirstName = function() {
      return this.firstName;
    }
    this.setFirstName = function(firstName) {
      if(typeof firstName == 'string' && firstName.length < 50) {
        this.firstName = firstName;
      } else {
        console.log("Invalid name!");
      }
    }
    this.getLastName = function() {
      return this.lastName;
    }
    this.setLastName = function(firstName) {
      if(typeof lastName == 'string' && lastName.length < 50) {
        this.lastName = lastName;
      } else {
        console.log("Invalid name!");
      }
    }
  }
}

// var person = new Person('Elana', 'Kopelevich');
// console.log(person.getFirstName() + ' ' + person.getLastName());
