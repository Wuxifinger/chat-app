var socket = io();

socket.on('connect', () => {
    console.log("Connected to server");
});

socket.on('disconnect', () => {
    console.log("Disconnected from server");
});

socket.emit(`createEmail`, {
    to: "vaibhav@gmail.com",
    text: "hello!"
});
socket.on('newEmail', function (email) {
    console.log("New Email", email);
});