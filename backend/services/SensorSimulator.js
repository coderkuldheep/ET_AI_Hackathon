import Sensor from "../models/SensorModel.js";
import { getIO } from "../socket/socket.js";

const random = (min, max) => {

    return Math.random() * (max - min) + min;

};

const clamp = (value, min, max) => {

    return Math.max(min, Math.min(max, value));

};

const round = (value) => {

    return Number(value.toFixed(2));

};

const updateSensors = async () => {

    try {

        const sensors = await Sensor.find();

        for (const sensor of sensors) {

            sensor.temperature = round(

                clamp(
            
                    sensor.temperature + random(-0.7,0.7),
            
                    18,
            
                    95
            
                )
            
            );

            sensor.pressure = round(
                
                clamp(
                    sensor.pressure + random(-0.2, 0.2),

                    2,

                    8

                )
            );

            sensor.vibration = round(
                
                clamp(
                    sensor.vibration + random(-0.05, 0.05),

                    0.05,

                    1.2

                )  
            );

            sensor.power = round(
                
                clamp(
                    sensor.power + random(-0.2, 0.2),

                    1,

                    6

                )
            );

            let score = 100;

            if(sensor.temperature>70) score-=20;

            if(sensor.pressure>6) score-=15;

            if(sensor.vibration>0.8) score-=35;

            if(sensor.power>5) score-=10;

            sensor.healthScore = round(
                clamp(score,0,100)
            );

            await sensor.save();

            const io = getIO();
            
            if (io) {
                io.emit("sensor-update", {
                    machineId: sensor.machineId,
                    sensor
                }
                );
            }

        }

    }

    catch(err){

        console.log("Sensor Simulator:",err.message);

    }

};

export const startSensorSimulator = () => {

    console.log("✅ Sensor Simulator Started");

    setInterval(updateSensors,5000);

};