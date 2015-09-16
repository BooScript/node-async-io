var sys = require('sys');
var exec = require('child_process').exec;

module.exports.execute = execute;

function cb(err, stdout, stderr)
{
       if(err !== null){
           console.log("child process failed with " + stderr);
           return error;
       }
       else{
           console.log(stdout);
          // return stdout;
       }
}


function execute(command, callback){
  var child = (exec(command,callback)); //executes child process which runs command and when done calls callback
    //return child;
}

console.log(execute('echo hi tom', cb));

