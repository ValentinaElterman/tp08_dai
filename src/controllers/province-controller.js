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
}) 

router.get('/:id', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if(returnArray != null){
        respuesta = res.status(200).json(returnArray);
    } else{
        respuesta = res.status(404).send(`No existe una provincia con ese id.`);
    }
    return respuesta;
}) 

router.post('', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if(returnArray != null){
        respuesta = res.status(201).json(returnArray);
    } else{
        respuesta = res.status(400).send(`Error Interno.`);
    }
    return respuesta; //esto esta mal jaja 
}) 

export default router;