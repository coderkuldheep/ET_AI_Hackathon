export default function MachineFilter({

    status,
    
    setStatus,
    
    health,
    
    setHealth
    
    }){
    
    return(
    
    <div className="filter-container">
    
    <select
    
    value={status}
    
    onChange={(e)=>setStatus(e.target.value)}
    
    >
    
    <option value="All">
    
    All Status
    
    </option>
    
    <option>
    
    Running
    
    </option>
    
    <option>
    
    Maintenance
    
    </option>
    
    <option>
    
    Stopped
    
    </option>
    
    <option>
    
    Offline
    
    </option>
    
    </select>
    
    <select
    
    value={health}
    
    onChange={(e)=>setHealth(e.target.value)}
    
    >
    
    <option value="All">
    
    All Health
    
    </option>
    
    <option>
    
    Healthy
    
    </option>
    
    <option>
    
    Warning
    
    </option>
    
    <option>
    
    Critical
    
    </option>
    
    </select>
    
    </div>
    
    );
    
    }