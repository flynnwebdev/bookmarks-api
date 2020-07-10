const mongoose = require('mongoose')

const BookmarkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const BookmarkModel = mongoose.model("bookmark", BookmarkSchema)

module.exports = { BookmarkSchema, BookmarkModel }
