const http = require("http");
const url = require("url");

function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        const pathname = url.parse(request.url).pathname;


        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;
