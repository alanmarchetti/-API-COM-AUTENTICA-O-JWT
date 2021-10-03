const mongoose = require('mongoose');
const { db_connect } = require('../config');

const connect = mongoose.connect(db_connect)
.then(() => console.log('Conectado a base de dados'))
.catch((e) => console.log('Erro ao conectar a base de dados'));

module.exports = connect;