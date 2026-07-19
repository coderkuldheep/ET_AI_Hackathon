import Machine from "../models/Machine.js";
import Sensor from "../models/SensorModel.js";

export const initializeSensors = async () => {

    try {

        const machines = await Machine.find();

        let created = 0;

        for (const machine of machines) {

            const exists = await Sensor.findOne({

                machineId: machine._id

            });

            if (!exists) {

                await Sensor.create({

                    machineId: machine._id,

                    temperature: 35,

                    pressure: 5,

                    vibration: 0.25,

                    power: 2,

                    healthScore: 100

                });

                created++;

            }

        }

        console.log(`✅ Initialized ${created} sensor records`);

    }

    catch (err) {

        console.error("Sensor Initialization Error:", err);

    }

};