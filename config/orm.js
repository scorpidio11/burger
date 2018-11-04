

// correcte data and edit update
// it will send data to models /burger.js


var connection = require('./connection.js');



var orm = {
    all: function (tableInput, cb) {
        connection.query('SELECT * FROM ' + tableInput + ';', function (err, result) {

            if (err) throw err;
            cb(result) //result goes to model
        })
    },
    update: function (tableInput, condition, cb) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result); //result goes to model , tableInput is burgers --> after this burger.js update
        })
    },

    create: function (tableInput,val,cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('"+val+"');", function (err, result) {
            if (err) throw err;
            cb(result);

        })
    }
}

module.exports = orm;