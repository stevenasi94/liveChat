const http = require ("http");
const path = require ("path");
const express = require ("express");
const socketIo = require ("socket.io");

const publicpath = path.join(__dirname, "../public");
var app = express();
var server = http.createServer(app);
var io = socketIo(server);
var users = new users();

app.use(express.static(publicpath));

