/* 
Tarea: Creando un Servidor TCP
Alumno: Emmanuel Cruz
Matricula: 357615
Materia: Programacion para plataformas emergentes
*/

// Para esto es necesario contar con net para que funcione correctamente.
const net = require('net');

/*
Mi Primer Servidor TCP
Pasos de mi practica para la conexion del cliente
*/

const server = net.createServer((socket) => {
    console.log('Cliente conectado!!');
    
// Mensaje que debe recibir el cliente al conectar de manera exitosa en su terminal
    socket.write('Hola y Bienvenido!!, cliente!\n');

// Gestionar los mensajes del cliente
    socket.on('data', (data) => {
        console.log('El cliente dice lo siguiente:', data.toString());

    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('El cliente se ha desconectado');
    });
});

// El servidor escucha en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP esta de manera correcta escuchando en el puerto 8080');
});
