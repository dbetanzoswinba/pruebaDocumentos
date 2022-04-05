//Archivo que trabajará la lógica de la entidad Usuario.
const Sequelize = require('sequelize');
const db = require("./db");
const CondonadosporDecreto = db.define('condonadosPorDecreto', {

  rfc : {
    type: Sequelize.STRING,
    allowNull: false
  },

  razonSocial: {
    type: Sequelize.STRING,
    allowNull: false
  },

  tipoPersona : {
    type: Sequelize.STRING,
    allowNull: false
  },
  supuesto : {
    type: Sequelize.STRING,
    allowNull: false
  },
  fechaPrimeraPublicacion:{
    type: Sequelize.STRING,
    allowNull: false
  },
  monto:{
    type: Sequelize.STRING,
    allowNull: false
  },
  fechaPublicacionTransparencia :{
    type: Sequelize.STRING,
    allowNull: false
  },
  entidadFederativa: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Prueba.sync()
  .then( response =>{
    console.log('Se ah creado la tabla de Condonados por Decreto correctamente');
  }).catch(error=>{  
    console.log(error.message);
  });


module.exports = {
  CondonadosporDecreto
};