const express = require("express");
const router = express.Router();

// Middleware para verificar si el usuario está autenticado
function verificarAutenticacion(req, res, next) {
    if (req.session && req.session.user) {
        next(); // Si está autenticado, continúa
    } else {
        res.redirect("/"); // Si no, redirige al login
    }
}

// Ruta para el panel de administración
router.get("/", verificarAutenticacion, (req, res) => {
    res.render("admin", { user: req.session.user }); // Pasa los datos del usuario a la vista
});

module.exports = router;
