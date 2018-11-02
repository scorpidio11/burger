

// this databese will be used by orm.js and data wil sent to routs.js 

var orm = require("../config/orm.js");

var burger = {
selectAll: function(cb){
    orm.all('burgers',function(res){
cb(res); 
})
}
}

module.exports = burger;