const CollegeModel = require("../Model/college-model")

//add Data
module.exports.addcollege = function (req, res) {
    let College = new CollegeModel({
        collegeName: req.body.collage
    })

    College.save(function (err, data) {
        if (err) {
            res.json({ msg: "Something Wrong...", status: -1, data: req.body })
        }
        else {
            res.json({ msg: "Data Added Sucessfully", status: 200, data: data })
        }
    })
}
//list Data
module.exports.getAllCollege = function (req, res) {
    CollegeModel.find(function(err, data) {
        if (err) {
            res.json({ msg: "Something Wrong...", status: -1, data: err })
        }
        else {
            res.json({ msg: "USer List", status: 200, data: data })

        }
    })
}