const http = require('http');
const server = http.createServer();
const route = require('router')();
const returnJSON = require('./src/http/returnjson');
const returnInvalidRequest = require('./src/http/returninvalid');
const exists = require('./src/data-structures/exists');
const sowpods = require('sowpods');
const Filters = require('./src/filters');
const anagram = require('./src/data-structures/anagram')(sowpods);
const filters = new Filters(sowpods);
const SERVER_PORT = 3000;


// Find a word
route.get('/api/find/*', function(req, res) {
  const query = req.params.wildcard.toUpperCase();
  const valid = /^[A-Z]{2,15}$/.test(query);
  if(!valid) {
    return returnJSON(res, {error: 'invalid query'});
  }
  const data = exists(query);
  console.log('API Find: ', query);
  returnJSON(res, data);
});

// Filter the dictionary
route.get('/api/filter/length/{from}-{to}', function(req, res) {
  const {from, to} = req.params; // todo sanitize input
  const iFrom = parseInt(from), iTo = parseInt(to);
  if(!iFrom || !iTo || iFrom > iTo || iTo > 15 || iFrom < 2) {
    return returnJSON(res, {error: 'invalid query'});
  }
  const data = filters.length(from, to);
  returnJSON(res, data);
});

route.get('/api/filter/letters-only/*', function(req, res) {
  const query = req.params.wildcard.toUpperCase();
  const valid = /^[A-Z]{1,24}$/.test(query);
  if(!valid) {
    return returnJSON(res, {error: 'invalid query'});
  }
  const data = filters.onlyLetters(query);
  returnJSON(res, data);
});

route.get('/api/filter/hex-colors', function(req, res) {
  const length3or6 = w => w.length === 3 || w.length === 6;
  const data = filters.onlyLetters('ABCDEF').filter(length3or6);
  returnJSON(res, data);
});

route.get('/api/filter/melodies', (req, res) => returnJSON(res,
  filters.onlyLetters('ABCDEFG')
));
route.get('/api/filter/melodies-de', (req, res) => returnJSON(res,
  filters.onlyLetters('ABCDEFGH')
));
route.get('/api/filter/palindrome', (req, res) => returnJSON(res,
  filters.palindromes()
));
route.get('/api/filter/vowels', (req, res) => returnJSON(res,
  filters.onlyLetters('AEIOUY')
));
route.get('/api/filter/consonants', (req, res) => returnJSON(res,
  filters.onlyLetters('BCDFGHJKLMNPQRSTVWXZ')
));


// anagram
route.get('/api/anagram/{word}', function(req, res) {
  const word = req.params.word.toUpperCase();
  const valid = /^[A-Z]{2,15}$/.test(word);
  if(!valid) {
    return returnJSON(res, {error: 'invalid query'});
  }
  if (!exists(word)) {
    return returnJSON(res, {error: 'word does not exist'});
  }
  const query = word.split('').sort().join('');
  const words = anagram[query];
  const data = {
    word,
    exists: !!words,
    words,
  };
  returnJSON(res, data);
});

server.on('request', route);
server.listen(SERVER_PORT, () => console.log('Server listening at ', SERVER_PORT));
