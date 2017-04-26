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
  const isPalindrome = w => {
    var truncHalf = Math.floor(w.length / 2),
      wordEndOffset = w.length - 1;
    for(var i = 0; i < truncHalf; i++) {
      let c1 = w[i], c2 = w[wordEndOffset -i];
      if(c1 !== c2) return false;
    }
    return true;
  };
  return sowpods.filter(isPalindrome);
};
