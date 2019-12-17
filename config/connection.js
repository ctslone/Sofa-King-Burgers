// dependencies
var mysql = require('mysql');
// create connection varible holding an object of login info
var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL):
}
else {
   connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Uncbootcamp1!",
        database: "sofaking_db"
      });
};

// conencting to the DB
connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
        return;
    }
    else {
        console.log("connected as ID " + connection.threadId)
    }
})

// exporting connection to be used in the app, specifically the ORM
module.exports = connection;