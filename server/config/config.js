/*==========================
 * Creación de puerto
 ===========================*/

process.env.PORT = process.env.PORT || 3000;


/*==========================
 * Entorno d
 ===========================*/
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


/*==========================
 * Vencimiento del TOKEN
 ===========================*/
// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;




/*==========================
 * SEED de autenticación
 ===========================*/
process.env.SEED = process.env.SEED || 'Este-es-el-SEED-de-DESARROLLO'


/*==========================
 * Base de datos
 ===========================*/

let urlDB;

urlDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/cafe' : 'mongodb+srv://omarinMongo:9jFmDlsrG6sQxWdJ@cluster0.drod9.mongodb.net/cafe';

process.env.URLDB = urlDB;