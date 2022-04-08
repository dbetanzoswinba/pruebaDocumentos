require('dotenv').config();
const path = require('path')
const fs = require('fs');
const {procesarDocumento} = require('./controllers/documentoController.js');

const analizarDirectorio = ()=>{
    let documentos = [];
    const rutaDocumentos = path.join(__dirname,'./docs')
        return fs.readdirSync(rutaDocumentos);
}

analizarDirectorio().forEach( async item =>{
    try{
        const respuesta = await procesarDocumento(`./docs/${item}`);
    }
    catch(error){
        console.log(error);
    }
    console.log({respuesta});
});


