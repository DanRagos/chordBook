const asyncHandler = require("express-async-handler"); 
const Song = require("../models/songModel")

const getContacts = asyncHandler(async(req, res)=>{
    const contacts= await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});