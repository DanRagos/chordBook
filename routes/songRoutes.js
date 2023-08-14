const express = require("express");
const router = express();

router.get("/", async (req, res) => {
    try {
        const response = {
            message: "Hello world"
        };
        return res.json(response);
    } catch (error) {
        console.error(error);
      return  res.status(500).json({ error: "An error occurred" });
    }
});

module.exports = router;
