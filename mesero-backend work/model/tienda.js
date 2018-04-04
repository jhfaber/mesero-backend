let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let tiendaSchema = new Schema({
    id: { type: String },
    nombre: { type: String },
    direccion: { type: String },
    fotoUrl : { type: String }    
}, { versionKey: false });

let Tienda = mongoose.model('tiendas', tiendaSchema);

module.exports = {
    Tienda,
    tiendaSchema
}    
