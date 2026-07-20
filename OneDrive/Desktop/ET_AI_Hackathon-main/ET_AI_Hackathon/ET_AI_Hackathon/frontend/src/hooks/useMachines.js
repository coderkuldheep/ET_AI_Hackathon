import { useEffect, useState } from "react";

import { getMachines } from "@/services/machineService";

export default function useMachines() {

    const [machines, setMachines] = useState([]);

    const [loading, setLoading] = useState(true);

    const loadMachines = async () => {

        try {

            const data = await getMachines();

            setMachines(data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadMachines();

    }, []);

    return {

        machines,

        loading,

        reload: loadMachines

    };

}