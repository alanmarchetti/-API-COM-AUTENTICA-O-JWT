const User = require('../model/User');
const { loginValidation, registerValidation } = require('../validation/userValidation');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs')

exports.register = async ( req, res ) => {

    const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send('Email já utilizado');

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });

    try {
        const savedUser = await user.save();
        res.send({ user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
};

exports.login = async (req, res) => {

    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send('Email não encontrado');
    
    const validPassword = await bcryptjs.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send("Senha incorreta");

    const token = jwt.sign({ _id: user._id}, process.env.JWT_TOKEN, { expiresIn: "1D"});
    res.header('auth-token', token).send(token);

    res.send('usuário logado!')
};