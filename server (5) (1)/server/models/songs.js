/**
 * creating a song schema that gives and specifies the type of each instance were trying to access to specify whether they are 
 * strings,arrays and the dates
 * this was given to us from the text book.
 */
const db = require("../db");

// Create a model from the schema
const songs = db.model("Song", {
   title:       { type: String, required: true },
   artist:      String,
   popularity:  { type: Number, min: 1, max: 10 },
   genre:       [ String ],
   releaseDate: { type: Date, default: Date.now },
});

module.exports = songs;