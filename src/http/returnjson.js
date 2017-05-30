const crypto = require('crypto');

module.exports = function returnJSON(res, data) {
  const strData = JSON.stringify(data);

  res.setHeader('Content-Type', 'application/json');
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Enable client caching
  var expires = new Date();
  expires.setYear(expires.getFullYear() + 1);
  const lastModified = new Date('2017-05-30');
  const hash = crypto.createHash('md5').update(strData).digest('hex');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.setHeader('ETag', hash);
  res.setHeader('Expires', expires.toUTCString());
  res.setHeader('Last-Modified', lastModified.toUTCString());
  res.end(strData);
};
