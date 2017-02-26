const sowpodsTrie = require('sowpods-trie');
const http = require('http');
const server = http.createServer();

/* Different types of server responses */
function returnJSON(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.end(JSON.stringify(data));
}

function returnInvalidRequest(res, message) {
  res.writeHead(422);
  res.end(message);
}
/* End of server responses */

// Only get the relevant query from the URL
function getQuery(url) {
  const queryStart = url.lastIndexOf('/') + 1;
  const str = url.slice(queryStart);
  return str;
}

// query word or words in our trie data structure
function validateQuery(query) {
  // Are we querying for one word?
  if (/^[A-Z]{2,15}$/.test(query)) {
    return {
      word: query,
      exists: sowpodsTrie.exists(query)
    };
  } else if (/^[A-Z,]{2,15}$/.test(query)) {
    const words = query.split(',');
    return words.map(w => {
      return {
        word: w,
        exists: sowpodsTrie.exists(w)
      }
    });
  }
  return {
    word: query,
    exists: false,
    error: 'The query is too short, too long or has illegal characters.'
  };
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
  const data = validateQuery(query);
  console.log('Query:', query);
  return returnJSON(res, data);
});
server.listen(3000);
