var sys = require('sys');
var exec = require('child_process').exec;

module.exports.execute = execute;

function cb(err, stdout, stderr)
{
       if(err !== null){
           console.log("child process failed with " + stderr);
       }
}

function execute(command, callback){
    exec(command, callback).stdout.pipe(process.stdout); //executes child process which runs command and when done calls callback
}

execute('echco h', cb);