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
    return 'vm';
}

function execute(command, callback){
    return exec(command,callback); //executes child process which runs command and when done calls callback
}

console.log('returns  ' + execute('echo hi', cb));