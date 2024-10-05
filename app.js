const express = require("express");
const app = express();
const path = require("path");

// socket io works in http server and need to requiere it
const http = require("http");

// require socket.io for use
const socketio = require("socket.io");

//creating server using createServer http
const server = http.createServer(app);

// calling socket.io to use it
const io = socketio(server);

app.set("view engine", "ejs");

//(fixed error for using set instead of use)
app.use(express.static(path.join(__dirname, "public")));

//connecting io
io.on("connection", function (socket) {
  socket.on("send-location", function (data) {
    io.emit("recieve-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", function () {
    io.emit("User-disconnected", socket.id);
  });
});
app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000);
