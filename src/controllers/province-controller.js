import {Router} from 'express';
import ProvinceService from './../services/province-service.js'

const router = Router();
const svc = new ProvinceService();

router.get('', async (req, res) => {
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

router.post('', async (req, res) => {
    let respuesta;
    const provinceData = req.body;
    if (!provinceData.name || provinceData.name.length < 3) 
    {
        respuesta = res.status(400).send("El nombre es obligatorio y debe tener al menos 3 letras.");
    }
    else {
        try {
        const returnArray = await svc.createAsync(provinceData);
        respuesta = res.status(201).json(returnArray);
    } catch (error) {
        respuesta = res.status(400).send("Error, no se pudo crear la provincia.");
    }
    }
    return respuesta; 
});

router.put('', async (req, res) => {
    let respuesta;
    const provinceData = req.body;
    
    try {
        const rowsAffected = await svc.updateAsync(provinceData);
        if (rowsAffected > 0) {
            respuesta = res.status(201).send("Actualizado correctamente.");
        } else {
            respuesta = res.status(404).send("No existe una provincia con ese id.");
        }
    } catch (error) {   
        respuesta = res.status(400).send("Error, no se pudo actualizar la provincia.");
    }
    return respuesta;
});

router.delete('/:id', async (req, res) => {
    let respuesta;
    const id = req.params.id;
    const rowsAffected = await svc.deleteByIdAsync(id);
    if(rowsAffected > 0){
        respuesta = res.status(200).send("Eliminado correctamente.");
    } else{
        respuesta = res.status(404).send(`No se encontró una provincia con ese id.`);
    }
    return respuesta;
});

export default router;