const readline = require("readline")
const fs = require("fs");
let documento = "./docs/Lista69bSat.csv";
let nuevoDocumento = 'lt69B.csv';
let count = 0;


const estandarizarDoc = doc => {
  return new Promise((resolve,reject)=>{
    comprobarArchivo();
    try {
      let lector = readline.createInterface({
        input: fs.createReadStream(documento)
      });
      lector.on("line", linea => {
        if(count >= 2){
          fs.appendFile(nuevoDocumento,linea+'\n',error =>{
            if(error) throw error;
          })
        }
        count++;
      })
      resolve(true);
    } catch (error) {
      console.log(error.message);
    }
  });
}

const comprobarArchivo = ()=>{
  if(!fs.existsSync(nuevoDocumento)){
    fs.writeFile(nuevoDocumento,'',err=>{
      if(err) throw err;
      console.log('Archivo creado correctamente...!!!');
    });
  }
}

estandarizarDoc(documento).then(async (response)=>{
  return await response;
})

module.exports = {
  estandarizarDoc
}