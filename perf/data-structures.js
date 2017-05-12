const sowpods = require('sowpods');
const trie = require('sowpods-trie');
const anagram = require('../src/data-structures/anagram')(sowpods);

const sowpodsStats = {
    words: sowpods.length,
    characters: sowpods.reduce( (a, b) => a + b.length, 0),
};
console.log('SOWPODS:', sowpodsStats);

const anagramStats = () => {
    let words = 0, characters = 0;
    for(var key in anagram) {
      words += anagram[key].length;
      characters += anagram[key].reduce( (a, b) => a + b.length, 0);
    }
    return {
      words,
      characters,
    };
};
console.log('Anagram:', anagramStats());
