const mongoose = require('mongoose');

const db = ()=>{

    mongoose.connect( 'mongodb://localhost:27017/pwii',
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