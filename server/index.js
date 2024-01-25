const http=require("http");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const socketIO = require("socket.io");
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
const port= 1200;

mongoose.connect("mongodb://localhost:27017/chitchat")
// mongoose.connect("mongodb:// 127.0.0.1:27017/chitchat")

const ourUsers = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

const ourUsersModel = mongoose.model("newUsers", ourUsers);

const users=[{}];

app.get("/",(req,res)=>{
    res.send("HELL ITS WORKING");
})

// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     ourUsersModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                 res.json("Successful")
//                 }
//                 else {
//                     res.json("password is incorrect")
//                 }
//             }
//             else {
//                 res.json("user dont exist please register")
//             }
//     })
// })

app.post("/register", (req, res) => {
    console.log(req.body);
    ourUsersModel.create(req.body)
    .then(newUsers => res.json(newUsers))
    .catch(err => res.json(err));
})

const server=http.createServer(app);

const io=socketIO(server);

io.on("connection", (socket) =>
{
    console.log("New Connection");

    socket.on('joined',({user})=>{
          users[socket.id]=user;
          console.log(`${user} has joined `);
          socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
          socket.emit('welcome',{user:"Admin",message:`Welcome to the chat,${users[socket.id]} `})
    })

    socket.on('message',({message,id})=>{
        io.emit('sendMessage',{user:users[id],message,id});
    })

    // socket.on('file', ({ fileData, imageData, id }) => {
    // if (imageData) {
    //     console.log('Emitting imageReceived event:', users[id]);
    //     io.emit('imageReceived', { user: users[id], imageData, id });
    // } else {
    //     const fileName = `file_${Date.now()}.txt`;
    //     fs.writeFile(fileName, fileData, 'base64', (err) => {
    //         if (err) throw err;
    //         console.log(`File saved: ${fileName}`);
    //         io.emit('fileReceived', { user: users[id], fileName, id });
    //       });
    //     }
    // });

    socket.on('file', ({imageData, id }) => {
        io.emit('file', imageData);
    });

    socket.on('disconnect',()=>{
        socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
        console.log(`user left`);
    })

    
});


server.listen(port,()=>{
    console.log(`Working`);
})