const schema_names = require('../config/schema-names');

const mongoose = require('mongoose');

const {Schema} = require('mongoose');

const user_schema = new Schema({
    nombre : {
        type: Schema.Types.String,
        required: [true, "Nombre obligatorio"]
    },
    apellido : {
        type: Schema.Types.String,
        required: [true, "Apellido obligatorio"]
    },
    correo : {
        type: Schema.Types.String,
        required: [true, "Correo obligatorio"]
    },
    contrasena : {
        type: Schema.Types.String,
        required: [true, "Contrasena obligatoria"]
    },
    imagen : {
        type: Schema.Types.String,
        required: [true, "Imagen obligatoria"]
    },
    activo : {
        type: Schema.Types.Boolean,
        required: [true, "Obligatorio"]
    },
    equipos: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.equipos
    }],
    manadas: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.manadas
    }]
},{
     collection: schema_names.users
});
module.exports = mongoose.model(schema_names.users, user_schema);


