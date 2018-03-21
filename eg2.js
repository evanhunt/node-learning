const fs = require("fs");
const data = '菜鸟教程官网地址：www.runoob.com';

// 创建可写入的流, 写入到 output.txt中
const writerStream = fs.createWriteStream("output.txt");

// 写入内容, 并设置编码
writerStream.write(data, "UTF8");

// 标记结束
writerStream.end();

// 处理事件流 --> data, end, and error
writerStream.on('finish', function() {
    console.log('写入完成');
});

writerStream.on('error', function(err) {
    console.log(err.stack);
});

console.log('程序执行完毕');
