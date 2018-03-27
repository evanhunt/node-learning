const path = require('path');

// 格式化路径
console.log('normalization: ' + path.normalize('/test/test1//2slashes\\\??/1slash/tab/..??=t=?'));

// 连接路径
console.log('join path: ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '...'));

// 转化为绝对路径
console.log('resolve: ' + path.resolve('path.js'));

// 路径中文件的后缀名
console.log('ext name: ' + path.extname('path.js'));
