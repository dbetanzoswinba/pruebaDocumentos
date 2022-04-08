const readline = require("readline")
const fs = require("fs");
const csvParser = require('csv-parser');
const { Cabeceras } = require("../helpers/cabeceras");
const { manejadorModelo } = require("../models/manejadorModelos");

let result = [];
let llaves=[];
let nombreDocumento;
let count = 0;

const procesarDocumento = async (document) =>{
  return new Promise( async (resolve, reject)=>{
    if(fs.existsSync(document)){
        nombreDocumento = await getNombreDocumento(document);
        console.log(nombreDocumento);
        llaves = await getLlaves(nombreDocumento);
        console.log(llaves);
        try{
          const response = await insertarRegistros(document);
          resolve(response);
        }catch(err){
          console.log(err.message);
          reject(err);
        }
    }else{
        reject('No se pudo leer el documento');
    }
  });
}


const registrarInfo = (nombreModelo, data) =>{
  return new Promise( async (resolve, reject)=>{
    try{
        const modelo = manejadorModelo(nombreModelo);
        console.log({ modelo });
        await modelo.bulkCreate(data);
        console.log(`Registro de : ${nombreModelo} exitoso...!!`);
        resolve(true);
    }catch(err){
        reject(err);
    }
  })
}

const renombrarArchivo = (doc) =>{
  return new Promise((resolve,reject)=>{
    try{
      fs.rename(doc,'./docs/tempListas69b.csv',err=>{
        if(err) throw err;
        resolve('./docs/tempListas69b.csv');
      });
    }catch(err){
      reject(err);
    }
  });
}


const validarObj = obj =>{
    const validacion = [];
    Object.keys(obj).map( key =>{
        if(obj[key]!== ''){
            validacion.push('ok');
        }
    });
    return validacion.length > 0
}

const getLlaves = (nombreDocumento) =>{
  return new Promise((resolve,reject)=>{
    try{
      resolve(Cabeceras[nombreDocumento]);
    }catch(err){
      reject(err);
    }
  })
}

const cambiarLlaves = ( objeto ) =>{
  return new Promise((resolve, reject)=>{
    try {
      let obj = {}
      Object.keys(objeto).forEach( (key,i) =>{
          obj[llaves[i]] = objeto[key];
      });
      resolve(obj);
    } catch (error) {
      reject(err);
    }
  })
}


const insertarRegistros = async document =>{
  return new Promise( (resolve, reject)=>{
    fs.createReadStream(document)
    .pipe(csvParser({}))
    .on('data',(data)=>{
      if(validarObj(data)){
          result.push(cambiarLlaves(data));
      }
    })  
    .on('end',async ()=>{
        try {
          console.log({ nombreDocumento });
          return;
          await registrarInfo(nombreDocumento,result);
          resolve(`Se ah registrado de manera correcta ${nombreDocumento}`)
        }catch (error) {
            reject(error.message);
        }
    })
  })
}

const getNombreDocumento = document =>{
  return new Promise((resolve, reject)=>{
    try{
      const data = document.split('/')[2];
      resolve(data.split('.')[0]);
    }catch(err){
      reject(err);
    }
  })
}

const estandarizarDoc = async doc => {
  return new Promise(async (resolve,reject)=>{
    const docum = await renombrarArchivo(doc);
    try {
      let lector = readline.createInterface({
        input: fs.createReadStream(docum)
      });
      lector.on("line", linea => {
        if(count >= 2){
          fs.appendFile('./docs/Lista69bSat.csv',linea+'\n',error =>{
            if(error) throw error;
          })
        }
        count++;
      })
      .on('end',()=>{
        console.log('Proceso finalizado con exito..!!!');
      })
      resolve(`./docs/Lista69bSat.csv`);
    } catch (error) {
      reject(error.message);
    }
  });
}
module.exports = {
    estandarizarDoc,
    procesarDocumento
}