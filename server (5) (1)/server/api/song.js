/**
 * trying to define the different routes were going to take to get retrieve the songs using the differnet 
 * methods
 */
const Song = require("../models/songs.js");
const router = require("express").Router();

// Get list of all songs in the database using an async function and an await response.
router.get("/songs", async function(req, res) {

    try {

        const songs = await Song.find({})
    return res.status(200).send(songs)
        
    } catch (error) {

        return res.status(500).send(error)
        
    }

    /**
     * an async function that posts the song to the databases.
     * saves the song to the data base.
     * responds with the status.
     */
});
router.post("/songs", async function(req, res) {
   try{
      const song = new Song(req.body);
      await song.save();
      return res.status(200).send(song)

   

   }
   catch(error){
      return res.status(500).send(error)
   }
});
 
/**
 * defining of the router to help us delete the song
 * it checks the matched counts and sends the status according to the responses that were obtained
 * uses an async function to wait for t=a promise and deletesong one the promise is obtained
 */
router.delete("/songs/:id",async function(req,res){
   try{
      const result = await Song.deleteOne({_id: req.params.id});
      if (result.deletedCount===0){
         res.sendStatus(404);
      }else{
         res.sendStatus(204);
      }
   }
      catch (err){
      res.status(400).send(err);
      }
   
}); 
/**
 * defining of the router to help us update 
 * it checks the matched counts and sends the status according to the responses that were obtained
 * uses an async function to wait for the promise and updates the song one the promise is obtained
 */
router.put("/id:", async function(req,res) {
   try {
      const song =req.body;
      const result = await Song.updateOne({_id:req.params.id},song);
      if (result.matchedCount===0){
         res.sendStatus(404);
      } else{
         res.sendStatus(204);
      }}
      catch (err) {
         res.status(400).send(err);
      }
});


module.exports = router;

