const mongoose = require("mongoose")

let CollegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        require: true
    }
})

const CollegeModel = mongoose.model("college", CollegeSchema)
module.exports = CollegeModel