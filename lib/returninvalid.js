module.exports = function returnInvalidRequest(res, message) {
  res.writeHead(422);
  res.end(message);
};
