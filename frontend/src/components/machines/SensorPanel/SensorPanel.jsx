import { useEffect, useState } from "react";

import useSocket from "@/hooks/useSocket";

export default function SensorPanel({ machine }) {

    const [sensor, setSensor] = useState({

        temperature: 0,

        pressure: 0,

        vibration: 0,

        power: 0,

        healthScore: 0

    });

    // INITIAL DATA

    useEffect(() => {

        if (machine?.sensor) {

            setSensor(machine.sensor);

        }

    }, [machine]);

    // LIVE SOCKET UPDATE

    useSocket(

        "sensor-update",

        (data) => {

            if (data.machineId === machine?._id) {

                setSensor(data.sensor);

            }

        }

    );

    return (

        <div className="sensor-card">

            <h2>Live Sensor Data</h2>

            <div className="sensor-row">

                <span>🌡 Temperature</span>

                <strong>

                    {sensor.temperature?.toFixed(2)} °C

                </strong>

            </div>

            <div className="sensor-row">

                <span>⚡ Power</span>

                <strong>

                    {sensor.power?.toFixed(2)} kW

                </strong>

            </div>

            <div className="sensor-row">

                <span>📈 Vibration</span>

                <strong>

                    {sensor.vibration?.toFixed(2)} mm/s

                </strong>

            </div>

            <div className="sensor-row">

                <span>💨 Pressure</span>

                <strong>

                    {sensor.pressure?.toFixed(2)} bar

                </strong>

            </div>

            <div className="sensor-row">

                <span>🩺 Health Score</span>

                <strong>

                    {sensor.healthScore?.toFixed(0)}%

                </strong>

            </div>

        </div>

    );

}