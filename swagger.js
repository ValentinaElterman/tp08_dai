const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        title: 'API de Provincias',
        description: 'Documentación de la API para la gestión de provincias',
    },
    host: 'localhost:3000',
    schemes:['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles= ['./index.js']; //cambiar segun el punto de entrada

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index'); //inica el servidor automaticamente
});