const schema_names = require('../config/schema-names');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const manadas_schema = new Schema({
    nombre : {
        type: Schema.Types.String,
        required: [true, "Nombre obligatorio"]
    },
    descripcion : {
        type: Schema.Types.String,
        required: [true, "Descripción obligatoria"]
    },
    imagen : {
        type: Schema.Types.String,
        required: [true, "Nombre obligatorio"]
    },
    creador : {
        type: Schema.Types.ObjectId,
        ref: schema_names.users
    },
    integrantes: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.users
    }],
    activo : {
        type: Schema.Types.Boolean,
        required: [true, "Campo obligatorio"]
    },
},{
     collection: schema_names.manadas
});

module.exports = mongoose.model(schema_names.manadas, manadas_schema);