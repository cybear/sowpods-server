const {test} = require('tape');
const Filters = require('../lib/filter');

test('Recognizes a palindrome', assert => {
  const dict = ['ABBA'];
  const filters = new Filters(dict);
  const data = filters.palindromes();
  assert.equal('ABBA', data[0]);
  assert.end();
});

test('Ditches non-palindromes', assert => {
  const dict = ['CAB'];
  const filters = new Filters(dict);
  const data = filters.palindromes();
  assert.equal(0, data.length);
  assert.end();
});
