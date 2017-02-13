var orm = require('../config/orm.js');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', cb);
  },
  insertOne: function(name, cb) {
    orm.insertOne('burgers', [name, false], cb);
  },
  updateOne: function(id, cb) {
    orm.updateOne('burgers', id, cb);
  }
};

module.exports = burger;