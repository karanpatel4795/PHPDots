const { ObjectID, ObjectId } = require("bson")
const mongoose = require("mongoose")

let ClassSchema = new mongoose.Schema({
    college: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"college"
    },
    title: {
        type: String
    },
    contact: {
        type: String
    },
    email: {
        type: String
    },
    price: {
        type: String
    },
    levels:{
        type: String
    },
    description: {
        type: String
    },
    syallbus: {
        type: String
    }
})

const ClassModel = mongoose.model("class", ClassSchema)
module.exports = ClassModel