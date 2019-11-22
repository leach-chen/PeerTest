const PeerServer = require('peer').PeerServer;
const server = PeerServer({host:'192.168.1.122',port: 9001, path: '/myapp'});