const fs = require("fs");
const csvParser = require('csv-parser');
const { Cabeceras } = require("../helpers/cabeceras");
const { manejadorModelo } = require("../models/manejadorModelos");

let llaves=[];

let nombreDocumento=''
let result = [];

const procesarDocumento =  (document) =>{
  return new Promise(async (resolve, reject)=>{
    try{
      if(fs.existsSync(document)){
          nombreDocumento = getNombreDocumento(document);
          llaves = getLlaves(nombreDocumento);
          let response = await leerDocumento(document);
          if(response){
            resolve(true)
          }
      }else{
          reject('No se pudo leer el documento');
      }
    }catch(error){
      console.log(error.message);
    }
  })
}

const leerDocumento = document =>{
  return new Promise( (resolve,reject)=>{
    fs.createReadStream(document)
    .pipe(csvParser({}))
    .on('data',(data)=>{
      if(validarObj(data)){
        result.push(asignarLlaves(data));
      }
    }).
    on('end',async ()=>{
      try{
        if(await registrarInfo(nombreDocumento)){
          resolve('Se ah resgistrado de manera exitoso');
        }
      }catch(error){
        console.log(error.message);
        reject('Hubo un error en el proceso',error.message);
      }
    })
  })
}

const registrarInfo = (nombreModelo) =>{
  return new Promise(async (resolve, reject)=>{
    try{
        const modelo = manejadorModelo(nombreModelo);
        console.log({ modelo });
        console.log(result.length);
        let response = await modelo.bulkCreate(result);
        console.log(`Registro de : ${nombreModelo} exitoso...!!`);
        result=[];
        if(response){
          resolve(true)
        }
    }catch(error){
      console.log(error.message);
      reject(error.message);
    }
  })
}

const getNombreDocumento = document =>{
    const data = document.split('/')[2];
    return data.split('.')[0];
}

const validarObj = obj =>{
  try{
    const validacion = [];
    Object.keys(obj).map( key =>{
        if(obj[key]!== ''){
            validacion.push('ok');
        }
    });
    return validacion.length > 0
  }catch(error){
    console.log(error);
  }
}

const getLlaves = (nombreDocumento) =>{
  return Cabeceras[nombreDocumento];
}

const asignarLlaves = ( objeto ) =>{
  let obj = {}
  Object.keys(objeto).forEach( (key,i) =>{
      obj[llaves[i]] = objeto[key];
  });
  return obj;
}

module.exports = {
  procesarDocumento
}