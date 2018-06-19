const http = require ("http");
const path = require ("path");
const express = require ("express");
const socketIo = require ("socket.io");
const bodyParser = require ("body-parser");

var app = express();
app.set("view engine", "ejs");
app.use (bodyParser.urlencoded({extended: true}));
const publicpath = path.join(__dirname, "../public");
var server = http.createServer(app);
var io = socketIo(server);

app.use(express.static(publicpath));

io.on("connection", (socket) => {
    console.log("New user connected");

    socket.emit("AdminMessage", "Admin: Welcome to live chat");

    socket.on("createMessage", function(message) {
        console.log(message)
    })

    socket.on("disconnect", function () {
        console.log("User disconnected");
    });
});

app.get("/", (req, res) => {
    res.render("index");
})

server.listen(3000, () => {
    console.log("Server is up on port 3000");
})