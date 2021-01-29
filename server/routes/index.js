const express = require('express');
const app = express();


//Aqui todas las cabeceras para el WS
app.use(require('./usuario'));
app.use(require('./login'));





module.exports = app;