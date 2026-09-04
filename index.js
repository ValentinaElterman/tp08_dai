import express from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js"

const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use("/api/province", express.json(), ProvinceRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});