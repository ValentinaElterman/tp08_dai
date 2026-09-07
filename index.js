const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const ProvinceRouter = require('./src/controllers/province-controller.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/api/province", ProvinceRouter);

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'API TP08 - Provincias',
        docs: '/api-docs',
        endpoints: '/api/province'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});