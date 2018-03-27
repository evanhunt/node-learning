const http = require('http');

const options = {
    host: 'localhost',
    port: '3000',
    path: '/index.html',
};

const callback = function(response) {
    var body = '';
    response.on('data', function(chunk) {
        body += chunk;
    });

    response.on('end', function() {
        console.log(body);
    });
};

const req = http.request(options, callback);
req.end();
