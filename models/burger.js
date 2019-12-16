var orm = require("../config/orm.js");

var burger = {
    all: function (allCallback) {
        orm.all("burgers", function (res) {
            allCallback(res);
        });
    },

    insertOne: function (col, val, insertCallback) {
        orm.insertOne("burgers", col, val, function (res) {
            insertCallback(res);
        });
    },

    updateOne: function (devourStatus, conditon, updateCallback) {
        orm.updateOne("burgers", devourStatus, conditon, function(res) {
            updateCallback(res);
        })
    }
}

module.exports = burger;