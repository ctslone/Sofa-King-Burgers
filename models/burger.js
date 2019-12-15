var orm = require("../config/orm.js");

var burger = {
    all: function(allCallback) {
      orm.all("burgers", function(res) {
        allCallback(res);
      });
    },
}

module.exports = burger;