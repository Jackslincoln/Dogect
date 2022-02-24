const schema_names = require('../config/schema-names');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const imagenes_schema = new Schema({
    url : {
        type: Schema.Types.String,
        required: [true, "URL obligatorio"]
    },
    activo: {
        type: Schema.Types.Boolean,
        required: [true, "Obligatorio"]
    },
},{
     collection: schema_names.imagenes
});
module.exports = mongoose.model(schema_names.imagenes, imagenes_schema);