const pool = require("../db");

const agregarPeliSerie = async (peliSerie) => {
    try {
        const query = "INSERT INTO peliculas_series SET ?";
        const result = await pool.query(query, peliSerie);
        return result; 
    } catch (error) {
        console.error("Error al agregar Película/Serie:", error);
        throw error;
    }
};

const leerPelisSeries = async () => {
    try {
        const query = "SELECT * FROM peliculas_series";
        const result = await pool.query(query);
        return result;
    } catch (error) {
        console.error("Error al leer Películas/Series:", error);
        throw error;
    }
};

const leerPeliSerie = async (id) => {
    try {
        const query = "SELECT * FROM peliculas_series WHERE id = ? LIMIT 1";
        const result = await pool.query(query, [id]);
        return result[0];
    } catch (error) {
        console.error("Error al leer Película/Serie:", error);
        throw error;
    }
};

const borrarPeliSerie = async (id) => {
    try {
        const query = "DELETE FROM peliculas_series WHERE id = ?";
        const result = await pool.query(query, [id]);
        return result;
    } catch (error) {
        console.error("Error al borrar Película/Serie:", error);
        throw error;
    }
};

const actualizarPeliSerie = async (id, peliSerie) => {
    try {
        const query = "UPDATE peliculas_series SET ? WHERE id = ?";
        const result = await pool.query(query, [peliSerie, id]);
        return result;
    } catch (error) {
        console.error("Error al actualizar Película/Serie:", error);
        throw error;
    }
};

module.exports = { 
    agregarPeliSerie, 
    leerPelisSeries, 
    leerPeliSerie, 
    borrarPeliSerie, 
    actualizarPeliSerie
};
