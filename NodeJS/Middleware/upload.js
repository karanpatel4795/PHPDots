const path = require("path")
const multer = require("multer");

//file Uploads
const storage = multer.diskStorage({
    destination: function(req, file, callBack){
        callBack(null, 'uploads/')
    },
    filename: function(req, file, callBack) {
        let ts = Date.now();
        callBack(null, 'PHPDots_' + ts + "_" + file.originalname)
    }
})
var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callBack) {
        
        if (file.mimetype == "application/pdf" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            callBack(null, true)
        }
        else {
            console.log("Only pdf/doc is Allowded!");
            callBack(null,false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 8
    }
})
module.exports = upload