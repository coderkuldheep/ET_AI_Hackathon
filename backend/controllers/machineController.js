import Machine from "../models/Machine.js";
import Sensor from "../models/SensorModel.js";

export const createMachine = async (req, res) => {

    try {

        const machine = await Machine.create({

            ...req.body,

            createdBy: req.user?.id

        });

        // Automatically create initial sensor data
        await Sensor.create({

            machineId: machine._id,

            temperature: 35,

            pressure: 5,

            vibration: 0.25,

            power: 2,

            healthScore: 100

        });

        res.status(201).json(machine);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

export const getMachines = async (req, res) => {

    try {

        const machines = await Machine.find().sort({

            createdAt: -1

        });

        res.json(machines);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

export const getMachine = async (req, res) => {

    try {

        const machine = await Machine.findById(

            req.params.id

        );

        if (!machine) {

            return res.status(404).json({

                message: "Machine not found"

            });

        }

        res.json(machine);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

export const updateMachine = async (req, res) => {

    try {

        const machine = await Machine.findByIdAndUpdate(

            req.params.id,

            req.body,

            {

                new: true

            }

        );

        res.json(machine);

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

export const deleteMachine = async (req, res) => {

    try {

        // Delete the machine
        await Machine.findByIdAndDelete(req.params.id);

        // Delete its sensor data as well
        await Sensor.findOneAndDelete({

            machineId: req.params.id

        });

        res.json({

            message: "Machine Deleted"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};