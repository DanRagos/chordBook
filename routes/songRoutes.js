const express = require("express");
const { viewSongs, viewSong, updateSong, addSong } = require("../controller/songController");
const router = express();

router.get("/", viewSongs);
router.get("/:id", viewSong);
router.put("/:id", updateSong);
router.post("/",addSong)

module.exports = router;
