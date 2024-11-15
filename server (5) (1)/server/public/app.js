addEventListener("DOMContentLoaded", function() {
    document.querySelector("#addBtn").addEventListener("click", addSong);
 });
 
 async function addSong() {
    // Create a song object from the form fields
    const Song = {
       title: document.querySelector("#title").value,
       artist: document.querySelector("#artist").value,
       releaseDate: document.querySelector("#released").value,
       popularity: document.querySelector("#popularity").value,
       genre: document.querySelector("#genre").value ? 
          document.querySelector("#genre").value.split(",") : []
    };
 
     //POST a JSON-encoded song to Music API
     const response = await fetch("/api/songs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(song)
     });



    router.post("/api/songs", function(req, res) {
        const song = new Song(req.body);
        console.log(req.body);
        song.save(function(err, song) {
           if (err) {
              res.status(400).send(err);
           } 
           else {
              res.status(201).json(song);
           }
        });
     });
     
 
    if (response.ok) {
       const results = await response.json();
       alert("Added song with ID " + results._id);
 
       // Reset the form after adding the song
       document.querySelector("form").reset();
    }
    else {
       document.querySelector("#error").innerHTML = "Cannot add song.";
    }     
}


