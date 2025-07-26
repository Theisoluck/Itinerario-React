const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Conectar a MongoDB local
mongoose.connect('mongodb://localhost:27017/rutas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Conectado a MongoDB');
}).catch(err => {
  console.error('❌ Error al conectar MongoDB:', err);
});

// Esquema
const RutaSchema = new mongoose.Schema({
  nombre: String,
  geojson: Object
});

const Ruta = mongoose.model('Ruta', RutaSchema, 'gojson');

// Endpoint para devolver el GeoJSON
app.get('/api/rutas/salud', async (req, res) => {
  const ruta = await Ruta.findOne({ nombre: "Ruta de la Salud" });
  if (!ruta) return res.status(404).json({ error: 'No encontrada' });
  res.json(ruta.geojson);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
