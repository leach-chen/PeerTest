var fs = require("fs");
fs.readFile('../input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");
//----------------------------------------------
var events = require("events")
var eventEmitter = new events.EventEmitter()
var eventHandler = function () {
    console.log("aaaaaaaaaaaaaa")
}
eventEmitter.on('aa', eventHandler);
eventEmitter.emit('aa');

//----------------------------------------------
/*var http = require("http");
var url = require("url");
function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log(pathname)
    var arg = url.parse(request.url,true).query
    console.log(arg)
    if(arg != null) {
        console.log(arg.aa)
    }
    console.log("--------------------")

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}
http.createServer(onRequest).listen(8888);*/

//----------------------------------------------
var express = require('express');
var app = express();
app.post('/aa', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})