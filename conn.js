var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_bus"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;