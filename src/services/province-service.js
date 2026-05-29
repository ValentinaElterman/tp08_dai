import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService{0
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getByIdAsync(id);
        return returnArray;
    }

    createAsync = async (provinceData) => {
        const repo = new ProvinceRepository();
        const rowsAffected = await repo.createAsync(provinceData);
        return rowsAffected;
    }

    updateAsync = async (provinceData) => {
        const repo = new ProvinceRepository();
        const rowsAffected = await repo.updateAsync(provinceData);
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const rowsAffected = await repo.deleteByIdAsync(id);
        return rowsAffected;
    }
}