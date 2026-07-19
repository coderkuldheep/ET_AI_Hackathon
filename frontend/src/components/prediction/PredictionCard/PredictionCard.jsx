import PredictionGauge from "../PredictionGauge/PredictionGauge";

export default function PredictionCard({ data }) {

    if (!data) {
        return null;
    }

    const machine = data.machine ?? "Unknown Machine";
    const sensor = data.sensor ?? {};
    const prediction = data.prediction ?? {};

    return (
        <div className="prediction-card">

            <h2>{machine}</h2>

            <PredictionGauge
                score={prediction.healthScore ?? 0}
            />

            <div className="prediction-info">

                <p>
                    Temperature
                    <span>{sensor.temperature ?? "--"} °C</span>
                </p>

                <p>
                    Pressure
                    <span>{sensor.pressure ?? "--"} PSI</span>
                </p>

                <p>
                    Vibration
                    <span>{sensor.vibration ?? "--"} mm/s</span>
                </p>

                <p>
                    Risk
                    <span className={(prediction.risk || "low").toLowerCase()}>
                        {prediction.risk ?? "--"}
                    </span>
                </p>

                <p>
                    Failure Probability
                    <span>
                        {prediction.failureProbability != null
                            ? `${(prediction.failureProbability * 100).toFixed(0)}%`
                            : "--"}
                    </span>
                </p>

                <p>
                    Remaining Days
                    <span>{prediction.remainingDays ?? "--"}</span>
                </p>

            </div>

            <div className="recommendation">

                <strong>Recommendation</strong>

                <p>{prediction.recommendation ?? "No recommendation available."}</p>

            </div>

        </div>
    );
}