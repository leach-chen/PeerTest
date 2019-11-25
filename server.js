const PeerServer = require('peer').PeerServer;
const server = PeerServer({host:'192.168.1.145',port: 9001, path: '/myapp'});

// server.js
let WebSocket = require('ws');
let instance = new WebSocket.Server({
    host: '192.168.1.145',
    port: 3000
})
instance.on('connection', client => {
    client.on('message', function (message) {
        client.send('收到！');
        console.log(message)
    })
})