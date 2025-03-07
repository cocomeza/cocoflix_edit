const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const indexRouter = require("./routes/index");
const pelisSeriesRouter = require("./routes/pelis_series");
const contactoRouter = require("./routes/contacto");
const loginRouter = require("./routes/login");

const app = express();

// Configurar Handlebars
app.engine(".hbs", hbs.engine({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (CSS, imágenes, scripts)
app.use(express.static("public"));

// Rutas
app.use("/", indexRouter);
app.use("/contacto", contactoRouter);
app.use("/login", loginRouter);
app.use("/pelis_series", pelisSeriesRouter);

// Servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
