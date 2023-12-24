import { WebSocketServer } from 'ws';
import http from 'http'
import { uuid } from 'uuidv4';

// Spinning the HTTP server and the WebSocket server.
const server = http.createServer();
const wsServer = new WebSocketServer({ server });
const port = 8000;
server.listen(port, () => {
  console.log(`WebSocket server is running on port ${port}`);
});

// I'm maintaining all active connections in this object
const clients = [];

// A new client connection request received
wsServer.on('connection', function(ws) {
  // Generate a unique code for every user
  const userId = uuid();
  console.log(`Recieved a new connection.`);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
  // Store the new connection and handle messages
  clients[userId] = ws;
  console.log(`${userId} connected.`);
});
