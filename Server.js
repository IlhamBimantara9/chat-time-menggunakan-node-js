const net = require('net');

const server = net.createServer((socket) => {
    const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`[${new Date().toLocaleTimeString()}] Connected: ${clientAddress}`);

    socket.on('data', (data) => {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] Client: ${data.toString().trim()}`);
    });

    socket.on('end', () => {
        console.log(`[${new Date().toLocaleTimeString()}] Disconnected: ${clientAddress}`);
    });
