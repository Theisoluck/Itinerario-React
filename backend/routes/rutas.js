const express = require('express');
const router = express.Router();
const Centro = require('../models/Ruta');


router.get('/centro/:trayecto', async (req, res) => {
  const trayectoNombre = req.params.trayecto;

  try {
    const ruta = await Centro.findOne({ "trayectos.nombre": trayectoNombre });

    if (!ruta) {
      return res.status(404).json({ error: 'Trayecto no encontrado' });
    }

    const trayecto = ruta.trayectos.find(t => t.nombre === trayectoNombre);

    res.json(trayecto);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el trayecto' });
  }
});

module.exports = router;
