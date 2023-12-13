const mongoose = require('mongoose')

const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    colour: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Cat', catSchema)
