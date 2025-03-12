const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});

// Otras rutas pueden ser añadidas aquí más tarde

module.exports = router;
