const express = require('express');
const app = express();

// Configuración básica
app.use(express.json());

// Ruta de ejemplo
app.get('/api', (req, res) => {
  res.json({ message: "¡Backend en Vercel!" });
});

// ¡Exporta la app como módulo!
module.exports = app;  // Clave para que Vercel lo reconozca