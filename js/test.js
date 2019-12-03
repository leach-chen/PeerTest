var fs = require("fs");
fs.readFile('../input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("程序执行结束!");



var events = require("events")
var eventEmitter = new events.EventEmitter()
var eventHandler = function () {
    console.log("aaaaaaaaaaaaaa")
}
eventEmitter.on('aa', eventHandler);
eventEmitter.emit('aa');