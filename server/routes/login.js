const express = require('express');
const bcryp = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');
const app = express();

app.post('/login', (req, res) => {
    let body = req.body;
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                OK: false,
                err
            });
        }

        if (!usuarioDB) {

            return res.status(400).json({
                OK: false,
                err: {
                    message: 'Usuario o contraseña es incorrecto'
                }
            });

        }

        if (!bcryp.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                OK: false,
                err: {
                    message: 'Usuario o contraseña- es incorrecto'
                }
            });
        }

        let token = jwt.sign({
            usuario: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            OK: true,
            usuario: usuarioDB,
            token
        });
    });
});

module.exports = app;