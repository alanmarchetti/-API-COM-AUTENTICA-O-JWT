const router = require('express').Router();
const userController = require('./src/controller/userController');
const postController = require('./src/controller/postController');
const verify = require('./src/middleware/user_auth');

router.post('/user/register', userController.register);
router.post('/user/login', userController.login);
router.post('/user/post', verify, postController.posts);

module.exports = router;