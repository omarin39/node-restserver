require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());


//Donfiguración global de rutas sa
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