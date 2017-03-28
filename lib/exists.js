const sowpodsTrie = require('sowpods-trie');

// query word or words in our trie data structure
module.exports = function exists(query) {
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
