import { useMemo, useState } from "react";

import useMachines from "@/hooks/useMachines";

import MachineCard from "./MachineCard";

import AddMachineModal from "./AddMachineModal";

import MachineStats from "@/components/machines/MachineStats/MachineStats";

import SearchBar from "@/components/machines/SearchBar/SearchBar";

import MachineFilter from "@/components/machines/MachineFilter/MachineFilter";

import "@/styles/machines.css";

export default function Machines(){

const{

machines,

loading,

reload

}=useMachines();

const[open,setOpen]=useState(false);

const[search,setSearch]=useState("");

const[status,setStatus]=useState("All");

const[health,setHealth]=useState("All");

const filteredMachines=useMemo(()=>{

return machines.filter(machine=>{

const matchSearch=

machine.machineName

.toLowerCase()

.includes(

search.toLowerCase()

);

const matchStatus=

status==="All"||

machine.status===status;

const matchHealth=

health==="All"||

machine.health===health;

return(

matchSearch&&

matchStatus&&

matchHealth

);

});

},[

machines,

search,

status,

health

]);

if(loading){

return<h2>

Loading...

</h2>;

}

return(

<div className="machines-page">

<div className="machines-header">

<h1>

Machines

</h1>

<button

onClick={()=>setOpen(true)}

>

+ Add Machine

</button>

</div>

<MachineStats

machines={machines}

/>

<div className="toolbar">

<SearchBar

search={search}

setSearch={setSearch}

/>

<MachineFilter

status={status}

setStatus={setStatus}

health={health}

setHealth={setHealth}

/>

</div>

<div className="machines-grid">

{

filteredMachines.map(machine=>(

<MachineCard

key={machine._id}

machine={machine}

/>

))

}

</div>

{

open&&(

<AddMachineModal

reload={reload}

onClose={()=>setOpen(false)}

/>

)

}

</div>

);

}