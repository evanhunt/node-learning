const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const urlencodeParser = bodyParser.urlencoded({ extended: false, });

app.use(express.static('temp'));


app.get('/express-demo4.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'express-demo4.html');
});

app.post('/process_post', urlencodeParser, function(req, res) {
    const response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };

    res.end(JSON.stringify(response));
});

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port
});
