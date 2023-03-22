const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name : String,
        mobile : Number,
        email : String,
        password: String
    },{timestamps : true}
    
)
module.exports = mongoose.model("userDetails" , userSchema)