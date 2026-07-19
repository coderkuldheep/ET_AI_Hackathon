import { useGLTF } from "@react-three/drei";

import FloatingLabel from "../overlays/FloatingLabel";

import machineColor from "../utils/machineColors";

export default function Conveyor({

prediction,

setSelectedMachine

}){

const {scene}=useGLTF("/models/conveyor.glb");

const model=scene.clone();

const score=prediction?.prediction?.healthScore ?? 100;

model.traverse(child=>{

if(child.isMesh){

child.material=child.material.clone();

child.material.color.set(machineColor(score));

}

});

return(

<>

<primitive

object={model}

position={[-4,0,0]}

scale={1}

onClick={()=>setSelectedMachine(prediction)}

 />

<FloatingLabel

position={[-4,2.5,0]}

machine="Conveyor"

score={score}

/>

</>

);

}

useGLTF.preload("/models/conveyor.glb");