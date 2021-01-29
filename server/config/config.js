/*==========================
 * Creación de puerto
 ===========================*/

process.env.PORT = process.env.PORT || 3000;


/*==========================
 * Entorno
 ===========================*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*==========================
 * Base de datos
 ===========================*/

let urlDB;

urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/cafe' : 'mongodb+srv://omarinMongo:9jFmDlsrG6sQxWdJ@cluster0.drod9.mongodb.net/cafe';

process.env.URLDB = urlDB;