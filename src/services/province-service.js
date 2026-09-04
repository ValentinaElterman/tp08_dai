const ProvinceRepository = require('../repositories/province-repository.js');

module.exports = class ProvinceService {
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