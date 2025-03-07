const express = require ("express")
const router = express.Router()
const usuarios = require ("../models/usuarios")

router.get ("/" ,  (req, res)  => {
    res.render ("login")

})

router.post("/", async (req, res) => {
    try {
        const { email, pass } = req.body; // Extrae los datos del formulario
        if (!email || !pass) {
            return res.render("login", { statusmessage: "Por favor completa todos los campos" });
        }

        const data = await usuarios.getUser(email, pass); // Llama a la función para buscar el usuario
        console.log(data);

        if (data) {
            res.render("admin"); // Usuario encontrado
        } else {
            res.render("login", { statusmessage: "Usuario o contraseña incorrectos" });
        }
    } catch (error) {
        console.error("Error en el login:", error); // Muestra el error si algo falla
        res.status(500).render("login", { statusmessage: "Error en el servidor, intenta más tarde" });
    }
});


module.exports = router