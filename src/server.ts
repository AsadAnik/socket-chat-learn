import express, { Request, Response } from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public")));

// region Server with Socket
const httpServer = http.createServer(app);
const io = new Server(httpServer);

io.on('connection', (socket) => {
    console.log('Socket server connected');

    // Send a message to the client
    socket.emit('message', "Welcome to the Chat Server!");

    // Receive a message from the client
    socket.on('client-message', (data) => {
        // Send the message to all connected clients
        socket.broadcast.emit('server-message', data);
    });

    // Receive the Typing Event from Client..
    socket.on('typing-client', (data) => {
        // Send the message to all connected clients
        socket.broadcast.emit('typing-server', data);
    });

    io.on('disconnect', () => {
        console.log('Socket server disconnected');
    });
});

// region Routes
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
});

app.get('/chat', (req: Request, res: Response) => {
   res.sendFile(path.join(__dirname, "../public/views/chat.html")); 
});

// region Listen Server
httpServer.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});