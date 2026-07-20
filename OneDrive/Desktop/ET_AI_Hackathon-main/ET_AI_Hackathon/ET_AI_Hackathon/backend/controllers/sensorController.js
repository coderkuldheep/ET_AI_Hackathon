import Sensor from "../models/SensorModel.js";

export const getSensorData = async (req, res) => {

    try {

        const sensor = await Sensor.findOne({

            machineId: req.params.machineId

        });

        if (!sensor) {

            return res.status(404).json({

                success: false,

                message: "Sensor data not found"

            });

        }

        res.json(sensor);

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};