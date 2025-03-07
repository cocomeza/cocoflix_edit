const express = require("express");
const router = express.Router();
const pool = require("../db"); // Conexión a la base de datos

router.get("/", (req, res) => {
    res.render("register"); // Asegúrate de que el nombre "register" coincida con el archivo .hbs
}); // <-- Cierre añadido aquí

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Consulta para insertar el usuario en la base de datos
        const result = await pool.query("INSERT INTO usuarios (name, email, password) VALUES (?, ?, ?)", [name, email, password]);

        console.log("Usuario registrado:", result);
        res.render("login", { statusmessage: "Registro exitoso. Por favor, inicie sesión." });
    } catch (err) {
        console.error("Error al registrar usuario:", err);
        res.render("register", { statusmessage: "Hubo un error. Intente nuevamente." });
    }
});

module.exports = router;
