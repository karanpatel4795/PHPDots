const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")

const collageController = require("./Controller/college-controller")
const classController = require("./controller/class-controller")
const upload =require("./Middleware/upload")
const cors = require("cors")
const app = express()

//middle ware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads',express.static('uploads'))
mongoose.connect('mongodb://localhost:27017/PHPDots', function (err) {
    if (err) {
        console.log("Connection not Established");
        console.log(err);
    }
    else {
        console.log("Database Connected");
    }
})

//college
app.post("/addCollege", collageController.addcollege)
app.get("/getCollege", collageController.getAllCollege)

//class
app.post("/addClass", upload.single('syallbus'),classController.addclass)
app.get("/getAllClass",classController.getAllClass)
app.delete("/deleteClass/:classId",classController.deleteClass)
app.get("/getClassById/:classId",classController.getClassById)
app.put("/updateClass",classController.updateClass)
app.get("/downloadFile",classController.getAllClass)
//server
app.listen(3000, function () {
    console.log("server started on 3000");
})

