const pool = require("../db"); // Asegúrate de que apunta correctamente a db.js
const md5 = require("md5");

const getUser = async (email, pass) => {
    try {
        const consulta = "SELECT * FROM usuarios WHERE email = ? AND password = ? LIMIT 1";
        const rows = await pool.query(consulta, [email, md5(pass)]); // Realiza la consulta a la base
        return rows[0]; // Devuelve el usuario encontrado o undefined
    } catch (error) {
        console.error("Error en la consulta getUser:", error); // Muestra el error
        throw error; // Propaga el error al controlador
    }
};


module.exports = { getUser };

