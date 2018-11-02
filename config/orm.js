

// correcte data and edit update
// it will send data to models /burger.js


var connection = require("./connection.js");



var orm = {
    all: function(tableInput, cb){
connection.query('SELECT * FROM' + tableInput + ';', function (err,results){

    if(err) throw err;
    cb(results)}
)}}

module.exports = orm;