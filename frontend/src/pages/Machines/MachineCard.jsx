import { useNavigate } from "react-router-dom";

export default function MachineCard({ machine }) {

    const navigate = useNavigate();

    const healthColor = {
        Healthy: "#00d26a",
        Warning: "#ff9800",
        Critical: "#ff3b30"
    };

    return (

        <div className="machine-card">

            <img
                src={
                    machine.images?.length > 0
                        ? import.meta.env.VITE_API_URL + machine.images[0]
                        : "/images/machine-placeholder.png"
                }
                alt={machine.machineName}
                className="machine-image"
            />

            <div className="machine-header">

                <h2>

                    ⚙ {machine.machineName}

                </h2>

            </div>

            <div>

                <b>Manufacturer</b>

                <p>

                    {machine.manufacturer || "--"}

                </p>

            </div>

            <div>

                <b>Machine Type</b>

                <p>

                    {machine.machineType}

                </p>

            </div>

            <div>

                <b>Status</b>

                <p>

                    {machine.status}

                </p>

            </div>

            <div>

                <b>Health</b>

                <p
                    style={{
                        color: healthColor[machine.health]
                    }}
                >

                    ● {machine.health}

                </p>

            </div>

            <button
                className="details-btn"
                onClick={() => navigate(`/machines/${machine._id}`)}
            >

                View Details →

            </button>

        </div>

    );

}