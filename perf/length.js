const Benchmark = require('benchmark');
const sowpods = require('sowpods');

const suite = new Benchmark.Suite;

suite.add('regex', function() {
  const from = 4, to = 10;
  const re = new RegExp(`^.{${from},${to}}$`);
  const results = sowpods.filter(w => re.test(w));
})
.add('length', function() {
  const from = 4, to = 10;
  const results = sowpods.filter(w => w.length >= from && w.length <= to);
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
