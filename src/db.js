// En tu archivo principal (ej: src/index.js)
require('dotenv').config(); // Si usas .env (sin ruta)
// ó
require('dotenv').config({ path: '.env.local' }); // Si mantienes .env.local

const express = require('express');
const mongoose = require('mongoose');

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

const app = express();
const port = process.env.PORT || 4000; // Usa el puerto de .env o 4000

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
