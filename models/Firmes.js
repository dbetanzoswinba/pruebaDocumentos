//Archivo que trabajará la lógica de la entidad Usuario.

const Sequelize = require('sequelize');
const db = require("./db");
const Firmes = db.define('firmes', {

  rfc : {
    type: Sequelize.STRING
  },

  razonSocial: {
    type: Sequelize.STRING
  },

  tipoPersona : {
    type: Sequelize.TEXT
  },
  supuesto : {
    type: Sequelize.STRING
  },
  fechaPrimeraPublicacion:{
    type: Sequelize.STRING
  },
  entidadFederativa: {
    type: Sequelize.STRING
  }
});

Firmes.sync()
  .then( response =>{
  }).catch(error=>{  
    console.log(error.message);
  });


module.exports = {
  Firmes
};