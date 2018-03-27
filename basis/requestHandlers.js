// const exec = require("child_process").exec;
const querystring = require("querystring");
const formidable = require("formidable");
const fs = require("fs");

// function start(response) {
//     exec(
//         "find /",
//         {
//             timeout: 10000,
//             maxBuffer: 20000*1024,
//         },
//         function(error, stdout, stderr) {
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write(stdout);
//             response.end();
//         }
//     );
// }

function start(response) {
    var body = '<html>'+
      '<head>'+
      '<meta http-equiv="Content-Type" content="text/html; '+
      'charset=UTF-8" />'+
      '</head>'+
      '<body>'+
      '<form action="/upload" enctype="multipart/form-data" '+
      'method="post">'+
      '<input type="file" name="upload" multiple="multiple">'+
      '<input type="submit" value="Upload file" />'+
      '</form>'+
      '</body>'+
      '</html>';

      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(body);
      response.end();
}

function upload(response, request) {
    var form = new formidable.IncomingForm();

    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "./temp/pic.jpg");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("received image:<br/>");
        response.write("<img src='/show' />");
        response.end();
    });
}

function show(response) {
    fs.readFile("./temp/pic.jpg", "binary", function(error, file) {
        if (error) {
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write(error + "\n");
            response.end();
        } else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.show = show;
