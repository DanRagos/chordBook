const asyncHandler = require("express-async-handler"); 
const Song = require("../models/songModel")
const mongoose = require("mongoose")

const isIdValid = (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)){
        const error = new Error ("Invalid song ID");
        error.status = 404;
        error.message = "Invalid Song ID";
        throw error
    }
    return id;
};



const viewSongs = asyncHandler(async(req, res)=>{
    const songs= await Song.find();
    res.status(200).json(songs);
});

const viewSong = asyncHandler(async (req, res) => {
    const { id } = req.params;

    // Check if the provided ID has a valid ObjectId format
   
    try {
        const validId = isIdValid(id);
        const song = await Song.findById(validId);

        if (song) {
            res.status(200).json(song);
        } else {
            res.status(404).json({ error: "Song not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Invalid Song ID"});
    }
});

const updateSong = asyncHandler(async (req, res)=> {
    const {id} = req.params;
    try {
        const validId = isIdValid(id)
        const song = await Song.findById(validId);
        if (!song) {
            res.status(404).json({ error: "Song ID not found"});
        }
        const updateSong = await Song.findByIdAndUpdate(song, req.body,{
            new : true
        });
        res.status(200).json(updateSong);
    }
    catch {

        res.status(500).json({error: "Invalid Song ID"})
    }
});

const addSong = asyncHandler(async (req, res)=> {
    const {title, artist, genre, releaseYear} = req.body;
    
        if(!title || !artist || !genre || !releaseYear){
            res.status(400);
            throw new Error("All fields are required");
        }
        const existingSong = await Song.findOne({
            title: title, 
            artist: artist,
        });
        if (existingSong){
            res.status(400);
            throw new Error ("Song is already added")
        }
        const song  = await Song.create({
            title, artist, genre, releaseYear
        });
        if (song){
            res.status(201).json({"success": `Song ${title} has created`});
        } else {
            res.status(400);
            throw new Error(" User data is not valid");
        }

});
module.exports= {viewSongs, viewSong, updateSong, addSong}