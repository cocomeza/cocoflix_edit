const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("contacto", { title: "Contacto" });
});

router.post("/", async (req, res) => {
    try {
        // Configuración del transporte
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "0b61e4b8780982",
                pass: "6201a578b580cc"
            }
        });

        // Opciones del correo
        const mailOptions = {
            from: '"Nombre" <tu_usuario@example.com>',
            to: 'destinatario@example.com',
            subject: 'mensaje desde el formulario de contacto',
            text: 'Contenido del correo en texto plano',
            html: '<b>ha enviado el siguente mensaje</b>'
        };

        // Enviar el correo
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: %s', info.messageId);
        res.status(200).send('Correo enviado exitosamente');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

module.exports = router;

