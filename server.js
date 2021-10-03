require('dotenv').config();
const express = require('express');
const router = require('./routes');
const { connect  } = require('./src/database');
const { host, port } = require('./src/config')
const app = express();

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.use(router)

app.listen( port, () => {
    try{
        console.log(`Servidor iniciado em ${host}:${port}`);
        connect;
    }catch(e){
        console.log(`Erro ao tentar iniciar o servidor ${e}`)
    }
});
    
