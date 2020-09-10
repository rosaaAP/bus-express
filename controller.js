'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM bus', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.findUsers = function(req, res) {
    
    var id_bus = req.params.id_bus;

    connection.query('SELECT * FROM bus where id_bus = ?',
    [ id_bus ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.createUsers = function(req, res) {
    
    var nama_bus = req.body.nama_bus;
    var foto_bus = req.body.foto_bus;

    connection.query('INSERT INTO bus (nama_bus, foto_bus) values (?,?)',
    [ nama_bus, foto_bus ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menambahkan data!", res)
        }
    });
};

exports.updateUsers = function(req, res) {
    
    var id_bus = req.body.id_bus;
    var nama_bus = req.body.nama_bus;
    var foto_bus = req.body.foto_bus;

    connection.query('UPDATE bus SET nama_bus = ?, foto_bus = ? WHERE id_bus = ?',
    [ nama_bus, foto_bus, id_bus ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil merubah data!", res)
        }
    });
};

exports.deleteUsers = function(req, res) {
    
    var id_bus = req.body.id_bus;

    connection.query('DELETE FROM bus WHERE id_bus = ?',
    [ id_bus ], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok("Berhasil menghapus data!", res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hallo !", res)
};