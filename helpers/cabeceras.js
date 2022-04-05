/* Este archivo nos permitirá tener las cabeceras con las que se estandarizarán los csv para poder leer correctamente los datos */

const canceladosHeaders = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaCancelacion',
    'monto',
    'fechaPublicacion',
    'entidadFederativa'
];

const condonadosArt21CFF = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaPrimeraPublicacion',
    'monto',
    'fechaPublicacionLeyTransparencia',
    'entidadFederativa'
];

const condonadosArt74CFF = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaPrimeraPublicacion',
    'monto',
    'fechaPublicacionLeyTransparencia',
    'entidadFederativa',
];

const condonadosArt146BCFF = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaPrimeraPublicacion',
    'monto',
    'fechaPublicacionLeyTransparencia',
    'entidadFederativa'
];

const condonadosPorDecreto = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaPrimeraPublicacion',
    'monto',
    'fechaPublicacionLeyTransparencia',
    'entidadFederativa' 
];

const exigibles = [
    'rfc',
    'razonSocial',
    'tipoPersona',
    'supuesto',
    'fechaPrimeraPublicacion',
    'entidadFederativa'
];

const firmes = [
  "rfc",
  "razonSocial",
  "tipoPersona",
  "supuesto",
  "fechaPrimeraPublicacion",
  "entidadFederativa",
];

const noLocalizados = [
  "rfc",
  "razonSocial",
  "tipoPersona",
  "supuesto",
  "fechaPrimeraPublicacion",
  "entidadFederativa",
];

const retornoInversiones = [
  "rfc",
  "razonSocial",
  "tipoPersona",
  "supuesto",
  "fechaPrimeraPublicacion",
  "monto",
  "fechaPublicacionLeyTransparencia",
  "entidadFederativa",
];

const sentencias = [
  "rfc",
  "razonSocial",
  "tipoPersona",
  "supuesto",
  "fechaPrimeraPublicacion",
  "entidadFederativa",
];

const listas69BSat = [
  'rfc',
  'contribuyente',
  'situacionContribuyente',
  'oficio',
  'fechaOficio',
  'publicacionSAT',
  'numeroOficioPresuncion',
  'publicacionDOFPresunto',
  'oficioGlobalDesvirtuadosSAT',
  'fechaGlobalDesvirtuadosSAT',
  'publicacionPaginaDesvirtuadosSAT',
  'oficioGlobalContribuyenteDesvirtuadosDOF',
  'publicacionDOFDesvirtuados',
  'numeroOficioGlobalDefinitivosSAT',
  'fechaGlobalDefinitivosSAT',
  'publicacionPaginaSATDefinitivos',
  'numeroOficioGlobalDefinitivosDOF',
  'fechaGlobalDefinitivosDOF',
  'publicacionDOFDefinitivos',
  'numeroOficioGlobalSentenciaFavorableSAT',
  'fechaGlobalSentenciaFavorableSAT',
  'publicacionSATSentenciaFavorable',
  'numeroOficioGlobalSetenciaFavorableDOF',
  'fechaOficioGlobalSentenciaFavorableDOF',
  'publicacionDOFSentenciaFavorable'
]


const Cabeceras = {
  Cancelados: canceladosHeaders,
  Condonadosart74CFF : condonadosArt74CFF,
  Condonadosart146BCFF: condonadosArt146BCFF,
  Condonadosart21CFF: condonadosArt21CFF,
  CondonadosporDecreto : condonadosPorDecreto,
  Retornoinversiones: retornoInversiones,
  Exigibles: exigibles,
  Firmes: firmes,
  No_localizados: noLocalizados,
  Sentencias: sentencias,
  Lista69bSat: listas69BSat
}

module.exports = {
  Cabeceras
}