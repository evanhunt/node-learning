const express = require('express');
const app = express();

app.use(express.static('temp'));

app.get('/', function(req, res) {
    res.send('Hello GET');
});

app.post('/', function(req, res) {
    res.send('Hello POST');
});

app.get('/del_user', function(req, res) {
    res.send('删除页面');
});

app.get('/list_user', function(req, res) {
    res.send('用户页面');
});

app.get('/ab*cd', function(req, res) {
    res.send('正则匹配');
});

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('应用实例, 访问地址为 http://%s:%s', host, port)
});
