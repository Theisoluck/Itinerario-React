const mongoose = require('mongoose');

const RutaSchema = new mongoose.Schema({}, { strict: false }); 

module.exports = mongoose.model('Centro', RutaSchema, 'centro'); 
