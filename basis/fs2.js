const fs = require('fs');

// 创建一个可读的流
const readerStream = fs.createReadStream('input.txt');

// 创建一个可写的流
const writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取input.txt的内容, 并写入到output.txt
readerStream.pipe(writerStream);

console.log('程序执行完毕');
