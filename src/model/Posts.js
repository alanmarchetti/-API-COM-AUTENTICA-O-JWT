const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { 
        type: String, 
        require: true, 
        min: 1, 
        max: 150
    },
    content: { 
        type: String, 
        require: true, 
        min: 1, 
        max: 200
    },
    description: { 
        type: String, 
        require: false, 
        min: 1, 
        max: 250
    },
    date: { 
        type: Date, 
        default: Date.now
    },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;