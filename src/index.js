const express = require("express")
const route = require("./routes/route")
const multer = require("multer")
const mongoose = require("mongoose")
const app = express()
app.use(multer().any())

app.use(express.json())

mongoose.set("strictQuery" , true)

mongoose.connect("mongodb+srv://Dreamerboy:Function-Up2022@cluster0.lwkqomf.mongodb.net/plot-project",{useNewUrlParser : true})

      .then(() => console.log("MongoDb is connected"))
      .catch((err) => console.log(err))

app.use("/", route)

app.listen(3000,function () {
    console.log("express app is running on Port ",3000)
})
