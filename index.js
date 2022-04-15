require('dotenv').config();
const path = require('path')
const fs = require('fs');
const { procesarDocumento } = require('./controllers/documentoController.js');

const analizarDirectorio = () =>{
    const rutaDocumentos = path.join(__dirname,'./docs')
    return fs.readdirSync(rutaDocumentos);
}

const main = async ()=>{
    let contador = 0;
    const documentos = analizarDirectorio();
    while(contador < documentos.length){
        try{
            let respuesta = await procesarDocumento(`./docs/${documentos[contador]}`);
            if(respuesta){
                contador++;
            }
        }catch(error){
            console.log(error);
        }
    }
    console.log('Terminado el proceso');
}
main();

// procesarDocumento('./docs/Firmes.csv');