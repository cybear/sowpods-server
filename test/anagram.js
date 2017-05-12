const dictionary = [
  'AM', 'APERS', 'APRES', 'ASPER', 'PARES',
  'PARSE', 'PEARS', 'PRASE', 'PRESA', 'RAPES',
  'REAPS', 'SPAER', 'SPARE', 'SPEAR'
];

const {test} = require('tape');
const anagramFn = require('../src/data-structures/anagram');

test('Adds the correct amount of anagrams', assert => {
  const anagrams = anagramFn(dictionary);
  const data = anagrams['AEPRS'];
  assert.equal(13, data.length);
  assert.end();
});

test('Doesn´t keep words that have no anagram', assert => {
  const anagrams = anagramFn(dictionary);
  const data = anagrams['AM'];
  assert.equal(undefined, data);
  assert.end();
});
