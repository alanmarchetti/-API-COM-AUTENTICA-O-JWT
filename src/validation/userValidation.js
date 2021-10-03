const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = {
        name: Joi.string()
        .required()
        .min(6),

        email: Joi.string()
        .required()
        .min(6)
        .email(),

        password: Joi.string()
        .required()
        .min(6),
    }
    return Joi.validate(data, schema);
}

const loginValidation= data => {
    const schema = {
        email: Joi.string()
        .required()
        .min(6)
        .email(),

        password: Joi.string()
        .required()
        .min(6),
    }
    return Joi.validate(data, schema);
}

const postValidation = data => {
    const schema = {
        title: Joi.string().required().min(1),
        content: Joi.string().required().min(1),
        description: Joi.string(),
    }
    return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation;
module.exports.postValidation = postValidation;