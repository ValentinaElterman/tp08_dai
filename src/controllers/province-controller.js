const { Router } = require('express');
const express = require('express');
const ProvinceService = require('../services/province-service.js');
const logHelper = require('../helpers/validaciones-helper.js');

const router = Router();
router.use(express.json()); 
router.use(express.urlencoded({ extended: true }));
const svc = new ProvinceService();

router.get('/', async (req, res) => {
    /*  #swagger.tags = ['Provincias']
        #swagger.summary = 'Obtiene el listado completo de provincias.'
        #swagger.responses[200] = { description: 'Lista de provincias obtenida con éxito.', schema: { $ref: '#/definitions/Provincia' } }
    */
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if(returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else{
        respuesta = res.status(500).send(`Error Interno.`);
    }
    return respuesta;
});

router.get('/:id', async (req, res) => {
    /*  #swagger.tags = ['Provincias']
        #swagger.summary = 'Obtiene una provincia específica por su ID.'
        #swagger.parameters['id'] = { description: 'ID de la provincia', type: 'integer' }
        #swagger.responses[200] = { description: 'Provincia encontrada.', schema: { $ref: '#/definitions/Provincia' } }
        #swagger.responses[404] = { description: 'Provincia no encontrada.', schema: { $ref: '#/definitions/Provincia' } }
    */
    let respuesta;
    const id = req.params.id;
    const returnArray = await svc.getByIdAsync(id);
    if(returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else{
        respuesta = res.status(404).send(`No se encontró una provincia con ese id.`);
    }
    return respuesta;
});

router.post('/', async (req, res) => { 
    /*  #swagger.tags = ['Provincias']
        #swagger.summary = 'Crea una nueva provincia.'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Datos necesarios para crear una provincia',
            required: true,
            schema: {
                id: 10,
                name: 'Chaco Provincia',
                full_name: 'Provincia de Chaco',
                latitude: -24.895086,
                longitude: -59.932189,
                display_order: 100
            }
        }
        #swagger.responses[201] = { description: 'Provincia creada correctamente.', schema: { $ref: '#/definitions/Provincia' } }
        #swagger.responses[400] = { description: 'Error en validaciones de datos (ej. nombre menor a 3 letras).', schema: { $ref: '#/definitions/Provincia' } }
    */
    const provinceData = req.body;
    
    if (!provinceData || Object.keys(provinceData).length === 0) {
        return res.status(400).send("Error: El Body llegó vacío al controlador.");
    }

    if (!provinceData.name || provinceData.name.length < 3) {
        return res.status(400).send("El nombre es obligatorio y debe tener al menos 3 letras.");
    }

    try {
        await svc.createAsync(provinceData);
        return res.status(201).send("Creado correctamente.");
    } catch (error) {
        logHelper.logError(error);
        return res.status(400).send("Error, no se pudo crear la provincia.");
    }
});

router.put('/', async (req, res) => { 
    /*  #swagger.tags = ['Provincias']
        #swagger.summary = 'Actualiza la información de una provincia existente.'
        #swagger.parameters['body'] = {
       in: 'body',
       schema: {
           id: 10,
           name: 'Chaco Provincia',
           full_name: 'Provincia de Chaco',
           latitude: -24.895086,
           longitude: -59.932189,
           display_order: 100
            }
        }
        #swagger.responses[201] = { description: 'Provincia actualizada exitosamente.', schema: { $ref: '#/definitions/Provincia' } }
        #swagger.responses[400] = { description: 'Error de validación en la solicitud.', schema: { $ref: '#/definitions/Provincia' } }
        #swagger.responses[404] = { description: 'Provincia no encontrada.', schema: { $ref: '#/definitions/Provincia' } }
    */
    const provinceData = req.body;

    if (!provinceData || Object.keys(provinceData).length === 0) {
        return res.status(400).send("Error: El Body de la actualización llegó vacío.");
    }

    if (!provinceData.name || provinceData.name.length < 3) {
        return res.status(400).send("El nombre es obligatorio y debe tener al menos 3 letras.");
    }
    
    try {
        const rowsAffected = await svc.updateAsync(provinceData);
        if (rowsAffected > 0) {
            return res.status(201).send("Actualizado correctamente.");
        } else {
            return res.status(404).send("No existe una provincia con ese id.");
        }
    } catch (error) {   
        logHelper.logError(error);
        return res.status(400).send("Error, no se pudo actualizar la provincia.");
    }
});

router.delete('/:id', async (req, res) => {
    /*  #swagger.tags = ['Provincias']
        #swagger.summary = 'Elimina una provincia por su ID.'
        #swagger.parameters['id'] = { description: 'ID de la provincia a eliminar', type: 'integer' }
        #swagger.responses[200] = { description: 'Provincia eliminada exitosamente.', schema: { $ref: '#/definitions/Provincia' } }
        #swagger.responses[404] = { description: 'Provincia no encontrada.', schema: { $ref: '#/definitions/Provincia' } }
    */
    const id = req.params.id;
    const rowsAffected = await svc.deleteByIdAsync(id);
    if(rowsAffected > 0){
        return res.status(200).send("Eliminado correctamente.");
    } else{
        return res.status(404).send(`No se encontró una provincia con ese id.`);
    }
});

module.exports = router;