// const express = require("express");
// const Song = require("./models/songs.js");
// //const mongoose = require("mongoose")
// const app = express();

// // Middleware that parses HTTP requests with JSON body
// app.use(express.json());
// app.use(express.static("public"));
// const api = require('./api/song.js');
// app.use("/api", api);
// app.listen(3000,function(){
//    console.log("were listening on 3000")
// });

const express = require("express");
const Song = require("./models/songs.js");
const app = express();
app.use(express.json());
app.use(express.static("public"));
const api = require('./api/song.js');
app.use("/api",api);
app.listen(3000,function(){
   console.log("were listening on 3000")
});
