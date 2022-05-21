const ClassModel = require("../Model/class-model")

//add Data
module.exports.addclass = function (req, res) {
    let college = req.body.collegeId
    let title = req.body.title
    let contact = req.body.contact
    let email = req.body.email
    let price = req.body.price
    let levels = req.body.levels
    let description = req.body.description

    if ((college && title && contact && email && price && levels && description) != null &&
        (college && title && contact && email && price && levels && description) != '' &&
        (college && title && contact && email && price && levels && description) !== undefined) {

        var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        function isEmailValid(email) {
            if (!email)
                return false;

            if (email.length > 254)
                return false;

            var valid = emailRegex.test(email);
            if (!valid)
                return false;

            // Further checking of some things regex can't handle
            var parts = email.split("@");
            if (parts[0].length > 64)
                return false;

            var domainParts = parts[1].split(".");
            if (domainParts.some(function (part) { return part.length > 63; }))
                return false;

            return true;
        }
        
        if (isEmailValid(email) == true) {
            let Class = new ClassModel({
                college: college,
                title: title,
                contact: contact,
                email: email,
                price: price,
                levels: levels,
                description: description,
            })
            if (req.file) {
                Class.syallbus = req.file.path
            }
            Class.save(function (err, data) {
                if (err) {
                    res.json({ msg: "Something Wrong...", status: -1, data: err })
                }
                else {
                    res.json({ msg: "Data Added Sucessfully", status: 200, data: data })
                }
            })
        }
        else {
            res.json({ msg: "Email is not Valid!", status: -1, data: req.body })
        }
    }
    else {
        res.json({ msg: "Empty Field Detected!", status: -1, data: req.body })
    }
}
//list Data
module.exports.getAllClass = function (req, res) {
    ClassModel.find().populate("college").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", status: -1, data: err })
        }
        else {
            res.json({ msg: "USer List", status: 200, data: data })

        }
    })
}

//delete Data
module.exports.deleteClass = function (req, res) {
    let classId = req.params.classId
    
    ClassModel.deleteOne({ _id: classId }, function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", status: -1, data: req.body })
        } else {
            res.json({ msg: "Class Deleted", status: 200, data: data })
        }
    })
}
//update data
module.exports.updateClass = function (req, res) {
    let college = req.body.collegeId
    let title = req.body.title
    let contact = req.body.contact
    let price = req.body.price
    let levels = req.body.levels
    let description = req.body.description

    ClassModel.updateOne({ _id: college }, { title: title,contact:contact,price:price,levels:levels,description:description }, function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", status: -1, data: req.body })
        } else {
            res.json({ msg: "Data Updated", status: 200, data: data })
        }
    })
}
module.exports.getClassById = function (req, res) {
    let classId = req.params.classId
    ClassModel.findOne({_id:classId}).populate("college").exec(function (err, data) {
        if (err) {
            res.json({ msg: "Somethiing Wrong...", status: -1, data: err })
        }
        else {
            res.json({ msg: "College List", status: 200, data: data })

        }
    })
}