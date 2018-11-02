var mysql = require("mysql");
var connection;

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "cosimo77@@",
//     database: "burgers_db"
// });

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.evnJAWSDB_URL)

}else{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "cosimo77@@",
    database: "burgers_db"
});
}


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    //connection.end();
});

module.exports = connection;