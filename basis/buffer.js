var buffer1 = Buffer.from(("node-learning"));
var buffer2 = Buffer.from(("https://github.com/evanhunt/node-learning"));
var buffer3 = Buffer.concat([buffer1, buffer2]);

console.log(buffer3.toString());
