const fs = require('fs');
const child_process = require('child_process');

for (var i = 0; i < 3; i++) {
    /**
     * [description]
     * 此处有坑
     * 路径后面需要加上空格
     * 否则报错
     * Error: Cannot find module 'D:\https://github.com/evanhunt/node-learning\child\exec.support.js0'
        at Function.Module._resolveFilename (module.js:527:15)
        at Function.Module._load (module.js:453:25)
        at Function.Module.runMain (module.js:665:10)
        at startup (bootstrap_node.js:187:16)
        at bootstrap_node.js:607:3

        at ChildProcess.exithandler (child_process.js:271:12)
        at emitTwo (events.js:125:13)
        at ChildProcess.emit (events.js:213:7)
        at maybeClose (internal/child_process.js:927:16)
        at Socket.stream.socket.on (internal/child_process.js:348:11)
        at emitOne (events.js:115:13)
        at Socket.emit (events.js:210:7)
        at Pipe._handle.close [as _onclose] (net.js:547:12)
     */
    var workerProcess = child_process.exec('node child/exec.support.js ' + i, function(error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    workerProcess.on('exit', function(code) {
        console.log('子进程已退出，退出码 '+code);
    });
}
