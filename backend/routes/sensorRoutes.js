import express from "express";

import {

    getSensorData

} from "../controllers/sensorController.js";

const router = express.Router();

router.get(

    "/:machineId",

    getSensorData

);

export default router;