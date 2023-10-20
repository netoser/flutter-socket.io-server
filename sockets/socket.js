const {io} = require('../index');


// MENSAJES DE SOCKETS


io.on('connection', client => {
    console.log('Cliente Conectado');
    // client.on('event', data => { /* … */ });
    client.on('disconnect', () => { 
        console.log('Cliente Desconectado');
    });

    client.on('M3s4jE', ( payload )=> {
        console.log('LLEGA CTE: ', payload);
        io.emit('M3s4jE', {admin: 'Nuevo Mensaje'}); // Va a emitir un mensaje a Todos los clientes conectados
    })

  });
//server.listen(3000);