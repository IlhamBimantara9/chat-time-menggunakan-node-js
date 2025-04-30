const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(12345, '127.0.0.1', () => {
    console.log(`[${new Date().toLocaleTimeString()}] Connected to server`);
});

client.on('data', (data) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] Server: ${data.toString().trim()}`);
});

client.on('close', () => {
    console.log('Connection closed');
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] You: ${input}`);
    client.write(input);
});
