var code = require('../objects.js');
var expect = require('chai').expect;

describe('objects', function() {
  it('says the first name', function() {
    expect(code.person.getFirstName('Elana', 'Kopelevich')).to.equal('Elana Kopelevich');
  })
  it('says the last name', function() {
    expect(code.person.getFirstName('Elana', 'Kopelevich')).to.equal('Elana Kopelevich');
  })
  it('says the full name', function() {
    expect(code.person.getFirstName('Elana', 'Kopelevich')).to.equal('Elana Kopelevich');
  })
})
