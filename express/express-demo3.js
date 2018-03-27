const express = require('express');
const app = express();

app.use(express.static('temp'));

app.get('/express-demo3.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'express-demo3.html');
});

app.get('/process_get', function(req, res) {
    const response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };

    res.end(JSON.stringify(response));
});

const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;
});
