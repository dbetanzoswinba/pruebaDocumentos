require('dotenv').config();
const { Cabeceras } = require('./helpers/cabeceras');
const { Firmes } = require('./models/Firmes');

let result = [];
let llaves;

const leerDocumento = document =>{
    const csvParser = require('csv-parser');
    llaves = getLlaves(document);
    const fs = require('fs');
    fs.createReadStream(document)
    .pipe(csvParser({}))
    .on('data',(data)=>{
        result.push(cambiarLlaves(data));
    })  
    .on('end',async ()=>{
        try {
            const resultado = await Firmes.bulkCreate(result);
            console.log(resultado);
        }catch (error) {
            console.log(error.message);
        }
    });
}

const getLlaves = document =>{
    console.log('Recibiendo: ',document);
    const data = document.split('/')[2];
    return Cabeceras[data.split('.')[0]];

}

const cambiarLlaves = ( objeto ) =>{
    let obj = {}
    Object.keys(objeto).forEach( (key,i) =>{
        obj[llaves[i]] = objeto[key];
    });
    return obj;
}

leerDocumento('./docs/Firmes.csv')

