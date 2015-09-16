var sys = require('sys');
var exec = require('child_process').exec;

module.exports.execute = execute;

function cb(error, stdout, stderr)
{
   if(error){
       console.log("child process failed with " + stderr);
       return error;
   }

console.log(stdout);
}

function execute(command, callback){ //executes child process which runs command and when done calls callback
    var execChild = exec(command,callback);
}

execute('echo hi', cb);