const schema_names = require('../config/schema-names');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const notas_schema = new Schema({
    titulo : {
        type: Schema.Types.String,
        required: [true, "Nombre obligatorio"]
    },
    contenido : {
        type: Schema.Types.String,
        required: [true, "Contenido obligatorio"]
    },
    fecha_creacion : {
        type: Schema.Types.Date,
        required: [true, "Fecha necesaria"]
    },
    esManada : {
        type: Schema.Types.Boolean,
        required: [true, "¿Visible para la manada?"]
    },
    activo: {
        type: Schema.Types.Boolean,
        required: [true, "Obligatorio"]
    },
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.users
    }],
    manada: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.manadas
    }],
    equipo: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.equipos
    }]
},{
     collection: schema_names.notas
});
module.exports = mongoose.model(schema_names.notas, notas_schema);