var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var DB = db();
      DB.connect();
      DB.query('SELECT * from messages', function (err, messages) {
        if(err) {
          throw err
        } else {
          callback(messages)
        }
      })
      // DB.end();
    }, // a function which produces all the messages
    post: function (messageData, callback) {
      var DB = db();
      var user = messageData.userName;
      userExists(user)
      DB.connect();

      DB.query('INSERT ')
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var DB = db();
      DB.connect();
      DB.query('SELECT * from users', function (err, users) {
        if(err) throw err;
        else {
          callback(users);
        }
      })
    },
    post: function (userData, callback) {

    }
  }
};

// var userExists = function (userName, callback) {
//   var DB = db();
//   DB.connect();
//   DB.query('SELECT userId, userName')

// }

/*



*/