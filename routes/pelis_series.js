const express = require("express");
const router = express.Router();
const { 
    agregarPeliSerie, 
    leerPelisSeries, 
    leerPeliSerie, 
    borrarPeliSerie, 
    actualizarPeliSerie 
} = require("../models/pelis_series"); // Importar funciones del modelo

// Ruta para listar todas las películas/series
router.get("/", async (req, res) => {
    try {
        const pelisSeries = await leerPelisSeries();
        res.render("pelis_series/list", { pelisSeries });
    } catch (error) {
        console.error("Error al listar películas/series:", error);
        res.status(500).send("Error al listar películas/series.");
    }
});

// Ruta para mostrar el formulario de agregar
router.get("/agregar", (req, res) => {
    res.render("pelis_series/agregar");
});

// Ruta para agregar una nueva película/serie
router.post("/agregar", async (req, res) => {
    try {
        const peliSerie = req.body;
        await agregarPeliSerie(peliSerie);
        res.redirect("/pelis_series");
    } catch (error) {
        console.error("Error al agregar película/serie:", error);
        res.status(500).send("Error al agregar película/serie.");
    }
});

// Ruta para mostrar el formulario de edición
router.get("/editar/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const peliSerie = await leerPeliSerie(id);
        res.render("pelis_series/editar", { peliSerie });
    } catch (error) {
        console.error("Error al obtener película/serie:", error);
        res.status(500).send("Error al obtener película/serie.");
    }
});

// Ruta para actualizar una película/serie
router.post("/editar/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const peliSerie = req.body;
        await actualizarPeliSerie(id, peliSerie);
        res.redirect("/pelis_series");
    } catch (error) {
        console.error("Error al actualizar película/serie:", error);
        res.status(500).send("Error al actualizar película/serie.");
    }
});

// Ruta para borrar una película/serie
router.post("/borrar/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await borrarPeliSerie(id);
        res.redirect("/pelis_series");
    } catch (error) {
        console.error("Error al borrar película/serie:", error);
        res.status(500).send("Error al borrar película/serie.");
    }
});

module.exports = router;
