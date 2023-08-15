const express = require("express")
const dotenv = require("dotenv").config();
const port =  process.env.PORT || 5000;
const connectDb = require("../ChordBook/config/dbConnection");
const errorHandler = require("./middleware/errorMiddleware");
const app = express()

connectDb()
app.use(express.json());
app.use("/api/songs", require("./routes/songRoutes"));
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})