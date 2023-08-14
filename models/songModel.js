const mongoose = require("mongoose");
const songSchema = mongoose.Schema({
    title : {
        type: String,
        require: [true, "Please add the song title"]
    },
    artist: {
        type: String,
        require: [true, "Please add te song artist"]
    },
    genre: {
        type: String,
        require: [true, "Please add the genre"]
    },
    releaseYear: {
        type: String,
        require: [true, "Please add the release year"]
    }
},
    {
        timestamps: true
    });

    module.exports = mongoose.model("Songs", songSchema)