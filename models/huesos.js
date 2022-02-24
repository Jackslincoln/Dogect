const schema_names = require('../config/schema-names');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const huesos_schema = new Schema({
    descripcion : {
        type: Schema.Types.String,
        required: [true, "Descripción obligatoria"]
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
    }]
},{
     collection: schema_names.huesos
});
module.exports = mongoose.model(schema_names.huesos, huesos_schema);
