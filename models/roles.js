const schema_names = require('../config/schema-names');

const mongoose = require('mongoose');

const {Schema} = require('mongoose');


const roles_schema = new Schema({
    nombre : {
        type: Schema.Types.String,
        required: [true, "Nombre obligatorio"]
    },
    activo : {
        type: Schema.Types.Boolean,
        required: [true, "Obligatorio"]
    },
    equipo: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.equipos
    }],
    usuarios: [{
        type: Schema.Types.ObjectId,
        ref: schema_names.users
    }]
},{
     collection: schema_names.roles
});
module.exports = mongoose.model(schema_names.roles, roles_schema);