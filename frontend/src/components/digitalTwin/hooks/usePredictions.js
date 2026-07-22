import { useEffect, useState } from "react";
import axios from "axios";

export default function usePredictions() {

    const [machines, setMachines] = useState([]);

    async function loadPredictions() {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/prediction"
            );

            setMachines(res.data);

        } catch (err) {

            console.error(err);

        }

    }

    useEffect(() => {

        loadPredictions();

        const timer = setInterval(loadPredictions, 3000);

        return () => clearInterval(timer);

    }, []);

    return machines;

}