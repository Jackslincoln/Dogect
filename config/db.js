const mongoose = require('mongoose');

const db = ()=>{


    mongoose.connect( 'mongodb://127.0.0.1:27017/dogect', 
        {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Conexion a MongoDB local exitosa');
    })
    .catch(err=>{
        console.log(err);
        process.exit(1);
    });
};

module.exports = db;