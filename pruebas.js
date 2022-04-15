/* // const readline = require("readline")
// const fs = require("fs");
// let documento = "./docs/Lista69bSat.csv";
// let nuevoDocumento = 'lt69B.csv';
// let count = 0;


// const estandarizarDoc = doc => {
//   return new Promise((resolve,reject)=>{
//     comprobarArchivo();
//     try {
//       let lector = readline.createInterface({
//         input: fs.createReadStream(documento)
//       });
//       lector.on("line", linea => {
//         if(count >= 2){
//           fs.appendFile(nuevoDocumento,linea+'\n',error =>{
//             if(error) throw error;
//           })
//         }
//         count++;
//       })
//       resolve(true);
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// }

// const comprobarArchivo = ()=>{
//   if(!fs.existsSync(nuevoDocumento)){
//     fs.writeFile(nuevoDocumento,'',err=>{
//       if(err) throw err;
//       console.log('Archivo creado correctamente...!!!');
//     });
//   }
// }

// estandarizarDoc(documento).then(async (response)=>{
//   return await response;
// })

// module.exports = {
//   estandarizarDoc
// }
// var peoplePromise = new Promise(function(resolve, reject) {
var people = [];
var fs = require('fs');
var parse = require('csv').parse;
var parser = parse({columns: true});

var input = fs.createReadStream('./docs/Cancelados.csv');
input.on('error', e => reject(e));

parser.on('readable', function(){
  var record;
  while(record = parser.read()) { // jshint ignore:line
    people.push(record);
  }
});
parser.on('error', e => reject(e));
parser.on('finish', () => resolve(people));
input.pipe(parser);
console.log(people);
  // }).then(callback).catch(console.error); */

  // const neatCsv = require('neat-csv');


const csv = require('csv-parser'),
fs = require('fs');

let counter = 0

fs.createReadStream('./docs/Cancelados.csv')
  .pipe(csv())
  .on("data", function(data){
      counter += counter + 1;
      console.log(data);
      console.log(counter);
  })
  .on("end", function(){
      console.log("done");
  });