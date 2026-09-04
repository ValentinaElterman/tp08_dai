const DBConfig = require('./../configs/db-config.js');
const pkg = require('pg');
const {Client} = pkg; //, Pool en la presentación
module.exports = class ProvinceRepository {
    getAllAsync = async () => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'SELECT * FROM provinces';
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    getByIdAsync = async (id) => {
        let returnArray = null;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `SELECT * FROM provinces WHERE id=$1`;
            const result = await client.query(sql, [id]);
            await client.end();
            returnArray = result.rows [0] || null;
        } catch (error) {
            console.log(error);
        }
        return returnArray;
    }

    createAsync = async (provinceData) => {
        let rowsAffected = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = `INSERT INTO provinces (name, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5)`;
            const values = [provinceData.name, provinceData.full_name, provinceData.latitude, provinceData.longitude, provinceData.display_order];
            const result = await client.query(sql, values);
            await client.end();
            rowsAffected = result.rowCount; //cuantas filas se insertaron
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    updateAsync = async (provinceData) => {
        let rowsAffected = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'UPDATE provinces SET name = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6';
            const values = [provinceData.name, provinceData.full_name, provinceData.latitude, provinceData.longitude, provinceData.display_order, provinceData.id];
            const result = await client.query(sql, values);
            await client.end();
            rowsAffected = result.rowCount;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }

    deleteByIdAsync = async (id) => {
        let rowsAffected = 0;
        const client = new Client(DBConfig);
        try {
            await client.connect();
            const sql = 'DELETE FROM provinces WHERE id = $1';
            const result = await client.query(sql, [id]);
            await client.end();
            rowsAffected = result.rowCount;
        } catch (error) {
            console.log(error);
        }
        return rowsAffected;
    }
}