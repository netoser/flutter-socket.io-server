const express = require('express');
const path = require('path');
require('dotenv').config();

// App de Express
const app = express();

// Node SERVER
const server = require('http').createServer(app);
//const io = require('socket.io')(server);
module.exports.io = require('http').createServer(app);
require('./sockets/socket');

//Path Publico
const publicPath = path.resolve( __dirname, 'public' );

app.use( express.static( publicPath ));


server.listen( process.env.PORT, ( err )=> {
    if ( err ) throw new Error(err); 

    console.log(' Servidor corriendo en puerto ', process.env.PORT);
});