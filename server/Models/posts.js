const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    image: String,
    title: String,
    content: String,
});

const PostModel = mongoose.model("blogs", PostSchema);

module.exports = PostModel;
