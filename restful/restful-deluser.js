const express = require('express');
const fs = require('fs');

const app = express();

app.get('/deleteUser', function(req, res) {
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data['user' + 2];

        console.log(data);
        res.end(JSON.stringify(data));
    });
});

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
