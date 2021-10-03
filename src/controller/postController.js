const Post = require('../model/Posts');
const { postValidation } = require('../validation/userValidation')

exports.posts = async (req, res) => {

    const { error} = postValidation(req.body);
    const post = new Post({ 
        title: req.body.title, 
        content: req.body.content, 
        description: req.body.description 
    });

    try{
        const savePost = await post.save();
        res.status(200).send(savePost);
    }catch(e){
        res.status(400).send(err);
    }
};

