const sowpods = require('sowpods');

exports.filterLength = function(from, to) {
  const re = new RegExp(`^.{${from},${to}}$`);
  return sowpods.filter(w => re.test(w));
};

exports.filterOnlyLetters = function(letters) {
  const re = new RegExp(`^[${letters}]*$`);
  return sowpods.filter(w => re.test(w));
};

exports.filterPalindromes = function() {
  const isPalindrome = w => w
  .split('')
  .reverse()
  .join('') === w;
  return sowpods.filter(isPalindrome);
};
