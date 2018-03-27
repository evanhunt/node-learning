const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const app = express();

app.use(express.static('temp'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/temp/' }).array('image'));

app.get('/express-demo5.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'express-demo5.html');
});

app.post('/file_upload', function(req, res) {
    console.log(req.files[0]);

    const response = {};
    const des_file = __dirname + '/' + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data) {
        fs.writeFile(des_file, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                response.message = 'File uploaded successfully';
                response.filename = req.files[0].originalname;
            }
            console.log(response);
            res.end(JSON.stringify(response));
        })
    })
});

const server = app.listen(8081, function() {
    const host = server.address().address
    const port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
