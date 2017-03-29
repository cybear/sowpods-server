const sowpods = require('sowpods');

exports.filterLength = function(from, to) {
  const re = new RegExp(`^.{${from},${to}}$`);
  const result = sowpods.filter(w => re.test(w));
  return result;
}
