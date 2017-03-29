const http = require('http');
const server = http.createServer();
const route = require('router')();
const returnJSON = require('./lib/returnjson');
const returnInvalidRequest = require('./lib/returninvalid');
const exists = require('./lib/exists');
const {filterLength} = require('./lib/filter');

const SERVER_PORT = 3000;


// Find a word
route.get('/api/find/*', function(req, res) {
  const query = req.params.wildcard.toUpperCase();
  const data = exists(query);
  console.log('API Find: ', query);
  returnJSON(res, data);
});

// Filter the dictionary
route.get('/api/filter/length/{from}-{to}', function(req, res) {
  const {from, to} = req.params; // todo sanitize input
  const data = filterLength(from, to);
  returnJSON(res, data);
});


server.on('request', route);
server.listen(SERVER_PORT, () => console.log('Server listening at ', SERVER_PORT));
