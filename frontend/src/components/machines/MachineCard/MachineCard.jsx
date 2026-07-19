export default function MachineCard({

    machine
    
    }){
    
    const healthColor={
    
    Healthy:"#00d26a",
    
    Warning:"#ff9800",
    
    Critical:"#ff3b30"
    
    };
    
    return(
    
    <div className="machine-card">
    
    <div className="machine-header">
    
    <h2>
    
    ⚙ {machine.machineName}
    
    </h2>
    
    </div>
    
    <div>
    
    <b>Manufacturer</b>
    
    <p>
    
    {machine.manufacturer||"--"}
    
    </p>
    
    </div>
    
    <div>
    
    <b>Type</b>
    
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
    
    color:healthColor[machine.health]
    
    }}
    
    >
    
    ● {machine.health}
    
    </p>
    
    </div>
    
    <button
    
    className="details-btn"
    
    >
    
    View Details →
    
    </button>
    
    </div>
    
    );
    
    }