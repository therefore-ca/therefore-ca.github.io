var exec = require('child_process').exec;

exec('grunt serve > log/grunt.log',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
           console.log('exec error: ' + error);
        }
});