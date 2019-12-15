var connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var questionArray = [];
    for (var i = 0; i < num; i++) {
        questionArray.push("?");
    }
    return questionArray.toString();
}

function objToSql(ob) {
    var sqlArr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            sqlArr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return sqlArr.toString();
}

var orm = {
    all: function (table, callbackAll) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                console.log(err)
            }
            else {
                callbackAll(res)
            }
        })
    },

    // insertOne: function (table, col, val, insertCallback) {
    //     var queryString = "INSERT INTO " + table;

    //     queryString += " (";
    //     queryString += col.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(val.length);
    //     queryString += ") ";

    //     console.log(queryString)

    //     connection.query(queryString, val, function(err, result) {
    //         if (err) {
    //           throw err;
    //         }
      
    //         insertCallback(result);
    //       });
    // },

    // updateOne: function () { }

}

module.exports = orm;

// NOTES
/*
Trying to map a json object to a databse. ORM takes info from front end
Order of operation:
Front end JS takes data input from the user and creates a json object of the data
Then front end JS does and AJAX call to the API with the type of request (get, post, etc) and the data (data: newthing) as an object.
Then after the AJAX call, it goes to the controller file and calls on the specific request from the AJAX call, ie router.post or app.post (the model is required in the controller file and the model requires the ORM)
    THE ORM: An object that holds all of the requests to the batabase (all, Create, Update, Delete)
    The data to be passed into the ORM is generated in the model file which calls on a specific orm function (orm.create would be a post request)
    THE MODEL: Is an object that has functins that call on the orm functions (all, create, update, delete)
    These functions hold the arguments that are to be passed into the database request
    The functions from the model are then called in the controller and given actual values for the arguments expected
    Finally, a res.json or res.render is called to display the data in the proper location

*/