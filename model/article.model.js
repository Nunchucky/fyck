const mongoose = require("mongoose")

const articleSchema = new mongoose.Schema({
    title:{
        type: String,
        // required: true,
    },
    // img:{
    //     type: Image,
    //     required: true
    // },
    comments:{
        type: Number,
    },
    bio:{
        type: String,
        // required: true
    },
    author:{
        type: String,
        // required: true
    }
})

const Article = mongoose.model("Article", articleSchema)
exports.Article = Article
