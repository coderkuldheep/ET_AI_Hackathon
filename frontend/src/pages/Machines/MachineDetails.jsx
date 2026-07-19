import { useEffect, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getMachine } from "@/services/machineService";

import MachineGallery from "@/components/machines/MachineGallery/MachineGallery";
import MachineInfo from "@/components/machines/MachineInfo/MachineInfo";
import SensorPanel from "@/components/machines/SensorPanel/SensorPanel";
import MaintenanceHistory from "@/components/machines/MaintenanceHistory/MaintenanceHistory";
import ActionPanel from "@/components/machines/ActionPanel/ActionPanel";

import useSocket from "@/hooks/useSocket";

import "@/styles/machineDetails.css";

import { getDiagnosis } from "@/services/diagnosisService";

import DiagnosisCard from "@/components/diagnosis/DiagnosisCard/DiagnosisCard";

export default function MachineDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [machine, setMachine] = useState(null);

    const [loading, setLoading] = useState(true);

    const [diagnosis,setDiagnosis]=useState(null);

    const loadMachine = useCallback(async () => {

        try {

            const data = await getMachine(id);

            setMachine(data);

        }

        catch (error) {

            console.error("Failed to load machine:", error);

        }

        finally {

            setLoading(false);

        }

    }, [id]);

    const loadDiagnosis = async () => {

        try{
    
            const data = await getDiagnosis(id);

            console.log("Diagnosis API:",data);
    
            setDiagnosis(
    
                data.diagnosis
    
            );
    
        }
    
        catch(err){
    
            console.log(err);
    
        }
    
    };

    useEffect(() => {

        loadMachine();

        loadDiagnosis();

    }, [loadMachine]);

    // LIVE SOCKET UPDATE

    useSocket(
        "sensor-update",
        async (data) => {
    
            if (data.machineId === id) {
    
                await loadMachine();
    
                await loadDiagnosis();
    
            }
    
        }
    );

    if (loading) {

        return (

            <div className="machine-details-page">

                <h2>Loading Machine...</h2>

            </div>

        );

    }

    if (!machine) {

        return (

            <div className="machine-details-page">

                <h2>Machine not found.</h2>

                <button onClick={() => navigate("/machines")}>

                    ← Back to Machines

                </button>

            </div>

        );

    }

    return (

        <div className="machine-details-page">

            <button
                className="back-btn"
                onClick={() => navigate("/machines")}
            >
                ← Back
            </button>

            <h1 className="machine-name">

                {machine.machineName}

            </h1>

            <div className="details-grid">

                <MachineGallery machine={machine} />

                <MachineInfo machine={machine} />

            </div>

            <DiagnosisCard
            diagnosis={diagnosis}
            />

            <MaintenanceHistory machine={machine} />

            <SensorPanel machine={machine} />

            <ActionPanel machine={machine} />

        </div>

    );

}