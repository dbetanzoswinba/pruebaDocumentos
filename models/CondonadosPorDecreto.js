//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const CondonadosporDecreto = db.define('condonadosPorDecreto', {

  rfc : {
    type: Sequelize.STRING,
  },

  razonSocial: {
    type: Sequelize.STRING,
  },

  tipoPersona : {
    type: Sequelize.STRING,
  },
  supuesto : {
    type: Sequelize.STRING,
  },
  fechaPrimeraPublicacion:{
    type: Sequelize.STRING,
  },
  monto:{
    type: Sequelize.STRING,
  },
  fechaPublicacionLeyTransparencia :{
    type: Sequelize.STRING,
  },
  entidadFederativa: {
    type: Sequelize.STRING,
  }
});

CondonadosporDecreto.sync()
  .then( response =>{
  }).catch(error=>{  
    console.log(error.message);
  });

module.exports = {
  CondonadosporDecreto
};