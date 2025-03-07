const usuarios = require("./usuarios.js"); // Ruta hacia el archivo usuarios.js

(async () => {
    try {
        const user = await usuarios.getUser("meza.maxi@yahoo.com", "contraseña1234"); // Cambia los valores según lo que tengas en la tabla
        console.log(user ? "Usuario encontrado:" : "Usuario no encontrado:", user);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
    }
})();
