import { useEffect, useState, useCallback } from "react";

import Loader from "@/components/Loader/Loader";
import PredictionCard from "@/components/prediction/PredictionCard/PredictionCard";

import { getPredictions } from "@/services/predictionService";

import useSocket from "@/hooks/useSocket";

import "@/styles/prediction.css";

export default function PredictionDashboard() {

    const [predictions, setPredictions] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadPredictions = useCallback(async () => {

        try {

            const data = await getPredictions();

            setPredictions(data);

        }

        catch (err) {

            console.error("Prediction Error:", err);

        }

        finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        loadPredictions();

    }, [loadPredictions]);

    // LIVE SOCKET UPDATE

    useSocket(

        "sensor-update",

        () => {

            loadPredictions();

        }

    );

    if (loading) {

        return <Loader />;

    }

    return (

        <div className="prediction-dashboard">

            <h1>AI Predictive Maintenance</h1>

            <div className="prediction-grid">

                {predictions.map((item) => (

                    <PredictionCard

                        key={item.machineId}

                        data={item}

                    />

                ))}

            </div>

        </div>

    );

}