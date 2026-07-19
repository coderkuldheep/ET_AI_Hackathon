import Machine from "../models/Machine.js";
import Sensor from "../models/SensorModel.js";
import { analyzeMachine } from "../services/index.js";

export const getDiagnosis = async (req, res) => {

    try {

        const machine = await Machine.findById(req.params.machineId);

        if (!machine) {

            return res.status(404).json({
                message: "Machine not found"
            });

        }

        const sensor = await Sensor.findOne({
            machineId: machine._id
        });

        if (!sensor) {

            return res.status(404).json({
                message: "Sensor not found"
            });

        }

        const diagnosis = analyzeMachine(sensor);

        res.json({
            machine,
            sensor,
            diagnosis
        });

    }

    catch (err) {

        console.error(err);

        res.status(500).json({
            message: err.message
        });

    }

};