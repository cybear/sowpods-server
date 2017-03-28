const http = require('http');
const server = http.createServer();
const route = require('router')();
const returnJSON = require('./lib/returnjson');
const returnInvalidRequest = require('./lib/returninvalid');
const exists = require('./lib/exists');
const SERVER_PORT = 3000;


// Find a word
route.get('/api/find/*', function(req, res) {
  const query = req.params.wildcard.toUpperCase();
  const data = exists(query);
  console.log('API Find: ', query);
  returnJSON(res, data);
});


server.on('request', route);
server.listen(SERVER_PORT, () => console.log('Server listening at ', SERVER_PORT));
