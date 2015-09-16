var sys = require('sys');
var exec = require('child_process').exec;

module.exports.execute = execute;

function cb(error, data)
{


}
function execute(command, callback){ //executes child process which runs command and when done calls callback
    var execChild = exec(command,callback);
    return execChild;
}

execute('echo hi', cb);