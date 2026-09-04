const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info:{
        title: 'API de Provincias',
        description: 'Documentación de la API para la gestión de provincias',
    },
    host: 'localhost:3000',
    schemes:['http'],
    definitions: {
        Provincia: {
            id: 1,
            name: "Buenos Aires",
            full_name: "Provincia de Buenos Aires",
            latitude: -34.6,
            longitude: -58.4,
            display_order: 1
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles= ['./index.js', './src/controllers/province-controller.js']; //cambiar segun el punto de entrada

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index'); //inica el servidor automaticamente
});