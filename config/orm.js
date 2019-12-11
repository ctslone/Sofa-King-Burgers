var connection = require("../config/connection.js")

var orm = {
    all: function(table, callbackAll) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log(err)
            }
            else {
                callbackAll(res)
            }
        })
    },
    
}