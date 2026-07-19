export default function MachineStats({ machines }) {

    const total = machines.length;

    const running = machines.filter(
        machine => machine.status === "Running"
    ).length;

    const maintenance = machines.filter(
        machine => machine.status === "Maintenance"
    ).length;

    const stopped = machines.filter(
        machine => machine.status === "Stopped"
    ).length;

    const offline = machines.filter(
        machine => machine.status === "Offline"
    ).length;

    const critical = machines.filter(
        machine => machine.health === "Critical"
    ).length;

    return (

        <div className="stats-grid">

            <div className="stat-card">

                <h2>{total}</h2>

                <p>Total Machines</p>

            </div>

            <div className="stat-card running">

                <h2>{running}</h2>

                <p>Running</p>

            </div>

            <div className="stat-card maintenance">

                <h2>{maintenance}</h2>

                <p>Maintenance</p>

            </div>

            <div className="stat-card critical">

                <h2>{critical}</h2>

                <p>Critical</p>

            </div>

            <div className="stat-card offline">

                <h2>{offline}</h2>

                <p>Offline</p>

            </div>

        </div>

    );

}