const mongoose = require("mongoose")
const Schema = mongoose.Schema

const gunSchema = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        year: Number,
        required: true
    }
})
module.exports = mongoose.model("Gun", gunSchema)