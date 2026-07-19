import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

import machineRoutes from "./routes/machineRoutes.js";

import sensorRoutes from "./routes/sensorRoutes.js";

import { startSensorSimulator } from "./services/SensorSimulator.js";

import predictionRoutes from "./routes/predictionRoutes.js";

import http from "http";
import { initializeSocket } from "./socket/socket.js";

import { initializeSensors } from "./services/initializeSensors.js";

import diagnosisRoutes from "./routes/diagnosisRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

app.use("/api/machines",machineRoutes);

app.use(

    "/api/sensors",

    sensorRoutes

);

app.use("/api/prediction", predictionRoutes);

app.use("/api/diagnosis", diagnosisRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "IndustrialMind AI Backend Running"
    });
});

const PORT = process.env.PORT || 5000;

const startServer = async () => {

    try {

        await connectDB();

        await initializeSensors();

        startSensorSimulator();

        const server = http.createServer(app);

        initializeSocket(server);

        server.listen(PORT, () => {

            console.log(`🚀 Server Running on ${PORT}`);

        });

    }

    catch (err) {

        console.error(err);

        process.exit(1);

    }

};

startServer();

const Sensor = (await import("./models/SensorModel.js")).default;

const sensors = await Sensor.find();

console.table(
    sensors.map(s => ({
        sensorId: s._id.toString(),
        machineId: s.machineId.toString(),
        health: s.healthScore,
        temp: s.temperature,
        vibration: s.vibration
    }))
);


