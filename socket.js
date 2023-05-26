const express = require('express');
const http = require('http');
const socketIO = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  
  socket.on('message', (data) => {
    console.log('Mensaje recibido:', data);

    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const port = 5500;
server.listen(port, () => {
  console.log(`Servidor WebSocket iniciado en el puerto ${port}`);
});