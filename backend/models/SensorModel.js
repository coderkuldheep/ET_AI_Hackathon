import mongoose from "mongoose";

const sensorSchema = new mongoose.Schema(

    {

        machineId: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Machine",

            required: true

        },

        temperature: {

            type: Number,

            default: 25

        },

        pressure: {

            type: Number,

            default: 4

        },

        vibration: {

            type: Number,

            default: 0.18

        },

        power: {

            type: Number,

            default: 2.3

        },

        healthScore: {

            type: Number,

            default: 100

        }

    },

    {

        timestamps: true

    }

);

const Sensor = mongoose.model("Sensor", sensorSchema);

export default Sensor;