const PeerServer = require('peer').PeerServer;
const server = PeerServer({host:'192.168.1.145',port: 9001, path: '/myapp'});