const express = require("express")
const dotenv = require("dotenv").config();
const port =  process.env.PORT || 5000;
const connectDb = require("../ChordBook/config/dbConnection");
const errorHandler = require("./middleware/errorMiddleware");
const path = require('path');
const app = express()

connectDb()
app.use(express.json());
app.use("/api/songs", require("./routes/songRoutes"));
app.use(errorHandler);
app.use(express.static(path.join(__dirname, 'client/build')));

// Catch-all route for React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/build', 'index.html'));
});
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})