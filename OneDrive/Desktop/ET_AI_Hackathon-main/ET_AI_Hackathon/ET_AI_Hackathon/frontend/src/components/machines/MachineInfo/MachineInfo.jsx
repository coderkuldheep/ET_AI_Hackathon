export default function MachineInfo({ machine }) {

    return (

        <div className="info-card">

            <h2>Machine Information</h2>

            <div className="info-row">
                <span>Machine Name</span>
                <strong>{machine.machineName}</strong>
            </div>

            <div className="info-row">
                <span>Machine Type</span>
                <strong>{machine.machineType}</strong>
            </div>

            <div className="info-row">
                <span>Manufacturer</span>
                <strong>{machine.manufacturer || "--"}</strong>
            </div>

            <div className="info-row">
                <span>Status</span>
                <strong>{machine.status}</strong>
            </div>

            <div className="info-row">
                <span>Health</span>

                <strong
                    style={{
                        color:
                            machine.health === "Healthy"
                                ? "#00d26a"
                                : machine.health === "Warning"
                                ? "#ff9800"
                                : "#ff3b30"
                    }}
                >
                    ● {machine.health}
                </strong>

            </div>

        </div>

    );

}