const EventEmitter = require('events').EventEmitter;
const domain = require('domain');

const emitter1 = new EventEmitter();
const domain1 = domain.create();

domain1.on('error', function(err) {
    console.log('domain1 处理这个错误 ( ' + err.message + ' )');
});
// 显式绑定
domain1.add(emitter1);

emitter1.on('error', function(err) {
    console.log('监听器处理这个错误 ( ' + err.message + ' )');
});

emitter1.emit('error', new Error('通过监听器来处理'));

emitter1.removeAllListeners('error');

console.log('移除emit监听');

emitter1.emit('error', new Error('通过 domain1 处理'));
