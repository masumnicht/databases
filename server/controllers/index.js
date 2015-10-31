var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if(req.url === '/' ||  req.url.slice(0, 7) === '../client') {
        loadFile(req, res);
      } else {
        models.messages.get(function(results){
          res.send(results)
        });
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function (results) {
        res.send(results);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results){
        res.send(results)
      });
    },
    post: function (req, res) {
      console.log(req.body);
      models.users.post(req.body, function (results) {
        res.send(results);
      })
    }
  }
};









var loadFile = function (request, response) {
  var type = '';
  var extension = request.url.slice(-3)
  var path = (request.url === '/') ? '/refactor.html' : request.url;

  if(extension === '.js') {
    type = 'text/javascript'
  } else if (extension === 'css') {
    type = 'text/css';
  } else if (extension === 'gif') {
    type = 'image/gif';
  } else {
    type = 'text/html';
  }

  var file_stream = fs.createReadStream('.' + path);

  collectData(file_stream, function(rawData) {
    sendResponse(response, rawData, 200, type);
  });
}


var headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var sendResponse = function (response, data, statusCode, contentType) {
  headers['Content-Type'] = contentType;
  response.writeHead(statusCode, headers);
  response.end(data);
}

var collectData = function (request, callback) {
  var data = '';
  request.on('data', function (json) {
    data += json;
  })
  request.on('end', function () {
    callback(data);
  })
}


