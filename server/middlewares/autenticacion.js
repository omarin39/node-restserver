const jwt = require('jsonwebtoken');

/*=======================================
 * Verificar TOKEN as
=========================================*/

let verificaTOKEN = (req, res, next) => {
    let token = req.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            if (err) {
                return res.status(401).json({
                    OK: false,
                    err: {
                        message: 'Token no válido'
                    }
                });
            }
        }

        req.usuario = decoded.usuario;
        next();
    });
};

let verificaAdminRole = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role == 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            OK: false,
            err: {
                message: 'El usuario no tiene permisos de administrador'
            }
        });
    }
}

module.exports = {
    verificaTOKEN,
    verificaAdminRole
}