var mysql = require("mysql");
//var env = require('dotenv').config();
var connection;

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "cosimo77@@",
//     database: "burgers_db"
// });


if (process.env.JAWSDB_URL) {
	// DB is JawsDB on Heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	// DB is local on localhost
	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'cosimo77@@',
		database: 'burgers_db'
	})
};






connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    //connection.end();
});

module.exports = connection;