/**
 * trying to establish the connection using mongoose and passing in astring from the .env file to
 * compare it with the string in the data base to see if they are the same to establish that connection.
 */
// const mongoose = require("mongoose");
// require ('dotenv').config();
// const db = mongoose.createConnection(
//     process.env.MONGODB_CONNECT_STRING,
//     { useNewUrlParser: true }
// );
const mongoose = require ("mongoose");
require('dotenv').config();
const db = mongoose.createConnection(
  process.env.MONGODB_CONNECT_STRING,
  {useNewUrlParser:true}
);
db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});
module.exports = db