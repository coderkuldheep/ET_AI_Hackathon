export default function InfoPanel({ machine }) {

    if (!machine) {

        return (
            <div
                style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    width: 320,
                    background: "#111827",
                    color: "white",
                    padding: 20,
                    borderRadius: 12,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                    zIndex: 1000
                }}
            >
                <h2>Digital Twin</h2>

                <p>Select a machine in the 3D scene.</p>
            </div>
        );

    }

    const prediction = machine.prediction || {};
    const sensor = machine.sensor || {};

    return (

        <div
            style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 340,
                background: "#111827",
                color: "white",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                zIndex: 1000
            }}
        >

            <h2>{machine.machine}</h2>

            <hr />

            <p>
                <strong>Health:</strong> {prediction.healthScore}%
            </p>

            <p>
                <strong>Risk:</strong> {prediction.risk}
            </p>

            <p>
                <strong>Failure Probability:</strong>{" "}
                {(prediction.failureProbability * 100).toFixed(0)}%
            </p>

            <p>
                <strong>Remaining Days:</strong>{" "}
                {prediction.remainingDays}
            </p>

            <hr />

            <h3>Live Sensor Data</h3>

            <p>Temperature : {sensor.temperature} °C</p>

            <p>Pressure : {sensor.pressure} PSI</p>

            <p>Vibration : {sensor.vibration} mm/s</p>

            <p>Power : {sensor.power} kW</p>

            <hr />

            <h3>AI Recommendation</h3>

            <p>{prediction.recommendation}</p>

        </div>

    );

}