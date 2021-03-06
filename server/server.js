require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));
console.log(path.resolve(__dirname, '../public'));


//Donfiguración global de rutas saas
app.use(require('./routes/index'));


let getConDBMongo = async() => {
    let con = await mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }, (err, resp) => {
        if (err) {
            throw err;
        } else {
            console.log('Base de datos ONLINE');
        }

    });
    return con;
}


getConDBMongo()
    .then(con => {

    })
    .catch(e => {
        console.log('Error', e);
    });


app.listen(process.env.PORT, () => console.log(`Escuchando el puerto ${process.env.PORT}`));