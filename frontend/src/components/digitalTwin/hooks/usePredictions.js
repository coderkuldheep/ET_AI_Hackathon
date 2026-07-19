import { useEffect, useState } from "react";
import axios from "axios";

export default function usePredictions() {

    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadPredictions = async () => {

        try {

            const { data } = await axios.get(
                "http://localhost:5000/api/prediction"
            );

            setMachines(data);

        } catch (err) {

            console.error("Prediction Error:", err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadPredictions();

        const interval = setInterval(loadPredictions, 5000);

        return () => clearInterval(interval);

    }, []);

    return {
        machines,
        loading
    };

}