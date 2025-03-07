const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index"); // Asegúrate de que el archivo index.hbs está en la carpeta "views"
});

module.exports = router;
