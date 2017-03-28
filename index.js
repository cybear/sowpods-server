const http = require('http');
const server = http.createServer();
const returnJSON = require('./lib/returnjson');
const returnInvalidRequest = require('./lib/returninvalid');
const exists = require('./lib/exists');
const SERVER_PORT = 3000;


// Only get the relevant query from the URL
function getQuery(url) {
  const queryStart = url.lastIndexOf('/') + 1;
  const str = url.slice(queryStart);
  return str;
}


server.on('request', function(req, res) {
  // Don't allow other methods than GET:
  if(req.method !=='GET') {
    return returnInvalidRequest(res, 'Invalid HTTP method. Only GET is supported.');
  }
  // Only allow a path within a certain size
  if(req.url.length > 1024) {
    return returnInvalidRequest(res, 'The query is too large.');
  }

  const query = getQuery(req.url).toUpperCase();
  const data = exists(query);
  console.log('Query:', query);
  return returnJSON(res, data);
});
server.listen(SERVER_PORT, () => console.log('Server listening at ', SERVER_PORT));
