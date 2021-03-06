const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log(`New user connected.`);

    socket.emit('newEmail', {
        from: "vaibhav@gmail.com",
        text: "Hello, how are you"
    });

    socket.on(`createEmail`, (createEmail) => {
        console.log("New email composed", createEmail);
    });

    socket.on('disconnect', ()=> {
        console.log(`User disconnected`);
    });
});



server.listen(port, ()=> {
    console.log(`Server is up on ${port}`);
});