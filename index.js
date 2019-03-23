
// ---------------------------------------
// express (Web App Framework)

var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(8000, function(){
  console.log('listening on *:8000');
});

// ---------------------------------------
// ws (WebSockets)

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {

  console.log('connected!');

  ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    // broadcast
    wss.clients.forEach(function(client){
      client.send(message + ' : ' + new Date());
    });
  });

  ws.on('close', () => {
    console.log('disconnected!');
  });
});
