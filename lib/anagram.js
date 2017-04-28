const sowpods = require('sowpods');

function sortByLetter(sowpods) {
  const sortedDict = {};
  sowpods.forEach(word => {
    const key = word.split('').sort().join('');
    if(!sortedDict[key]) {
      sortedDict[key] = [];
    }
    sortedDict[key].push(word);
  });
  return sortedDict;
}

function filterOutSingles(sortedDict) {
  for(var key in sortedDict) {
    if(sortedDict[key].length === 1) {
      delete sortedDict[key];
    }
  }
  return sortedDict;
}

const anagrams = (dictionary) => filterOutSingles(sortByLetter(dictionary));

module.exports = anagrams;
