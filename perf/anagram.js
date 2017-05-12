const Benchmark = require('benchmark');
const sowpods = require('sowpods');
const anagram = require('../src/data-structures/anagram')(sowpods);

const suite = new Benchmark.Suite;

// add tests
suite.add('`for`', function() {
  const myWord = 'AELST';
  const results = sowpods.filter(word => {
    const key = word.split('').sort().join('');
    return key === myWord;
  });
})
.add('sorted letter index', function() {
  const myWord = 'AELST';
  const results = anagram[myWord];
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
