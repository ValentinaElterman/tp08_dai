import express from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller"

const app = express();
const post = 3000;

app.use(corse());
app.use(express.jason());

app.use("/api/province", ProvinceRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})