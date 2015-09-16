var sys = require('sys');
var exec = require('child_process').exec;

module.exports.execute = execute;



function execute(command, callback){
    exec(command,callback);
}



