const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, 
        require: true, 
        min: 6, 
        max: 50
    },
    email: { 
        type: String, 
        require: true, 
        min: 6, 
        max: 200
    },
    password: { 
        type: String, 
        require: true, 
        min: 6, 
        max: 250
    },
    date: { 
        type: Date, 
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;