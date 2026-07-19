import Machine from "../models/Machine.js";
import Sensor from "../models/SensorModel.js";
import { analyzeMachine } from "../services/index.js";

export const getPredictions = async (req, res) => {

    try {

        const machines = await Machine.find().lean();

        const sensors = await Sensor.find().lean();

        const sensorMap = {};

        sensors.forEach(sensor => {

            sensorMap[sensor.machineId.toString()] = sensor;

        });

        const predictions = [];

        for (const machine of machines) {

            const sensor = sensorMap[machine._id.toString()];

            if (!sensor) {

                predictions.push({

                    machineId: machine._id,

                    machine: machine.machineName,

                    sensor: {

                        temperature: 0,

                        pressure: 0,

                        vibration: 0,

                        power: 0

                    },

                    prediction: {

                        healthScore: 0,

                        risk: "NO DATA",

                        severity: "Unknown",

                        failureType: "No Sensor",

                        confidence: 0,

                        remainingDays: 0,

                        failureProbability: 1,

                        estimatedRepairCost: 0,

                        estimatedDowntime: "Unknown",

                        recommendation: "Sensor not initialized."

                    }

                });

                continue;

            }

            const prediction = analyzeMachine(sensor);

            predictions.push({

                machineId: machine._id,

                machine: machine.machineName,

                sensor,

                prediction

            });

        }

        console.log("\n========== Prediction Debug ==========");

        console.log("Machines :", machines.length);

        console.log("Sensors :", sensors.length);

        console.log("Predictions :", predictions.length);

        console.table(

            predictions.map(item => ({

                Machine: item.machine,

                Health: item.prediction.healthScore,

                Risk: item.prediction.risk,

                Severity: item.prediction.severity,

                Failure: item.prediction.failureType,

                Confidence: item.prediction.confidence + "%"

            }))

        );

        console.log("======================================\n");

        res.json(predictions);

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            message: err.message

        });

    }

};