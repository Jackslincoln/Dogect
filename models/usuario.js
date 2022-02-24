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


const manada_schema = new Schema({
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

module.exports = mongoose.model(schema_names.manadas, manada_schema);

const equipos_schema = new Schema({
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
    manada : {
        type: Schema.Types.ObjectId,
        ref: schema_names.manada
    },
    activo : {
        type: Schema.Types.Boolean,
        required: [true, "Campo obligatorio"]
    },
},{
     collection: schema_names.equipos
});

module.exports = mongoose.model(schema_names.equipos, equipos_schema);

const tareas_schema = new Schema({
    titulo : {
        type: Schema.Types.String,
        required: [true, "Titulo obligatorio"]
    },
    fecha_entrega : {
        type: Schema.Types.Date,
        required: [true, "Fecha obligatoria"]
    },
    fecha_limite : {
        type: Schema.Types.Date,
        required: [true, "Fecha obligatoria"]
    },
    responsables: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.users
    }],
    completada : {
        type: Schema.Types.Boolean,
        required: [true, "Campo obligatorio"]
    },
},{
     collection: schema_names.tareas
});

module.exports = mongoose.model(schema_names.tareas, tareas_schema);