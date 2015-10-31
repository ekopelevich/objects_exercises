var code = require('../objects.js');
var expect = require('chai').expect;

describe('objects', function() {
  var person;
  beforeEach(function() {
    person = new code.Person('Elana', 'Kopelevich');
  })
  it('says the first name', function() {
    expect(person.firstName).to.equal('Elana');
  })
  it('says the last name', function() {
    expect(person.getLastName()).to.equal('Kopelevich');
  })
  it('says the full name', function() {
    expect(person.getFullName()).to.equal('Elana Kopelevich');
  })
})
