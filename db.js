const mysql = require("mysql");
const util = require("util");

const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root", // Ajusta si usas otro usuario
    password: "", // Ingresa tu contraseña si es necesaria
    database: "COCOFLIX_NEW" // La base de datos correcta que estás utilizando
});

// Promisificar el método query para soportar async/await
pool.query = util.promisify(pool.query);

module.exports = pool;
