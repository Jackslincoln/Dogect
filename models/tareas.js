const schema_names = require('../config/schema-names');
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

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