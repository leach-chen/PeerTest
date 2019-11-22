const PeerServer = require('peer').PeerServer;
const server = PeerServer({port: 9001, path: '/myapp'});