import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import FloatingLabel from "../overlays/FloatingLabel";
import machineColor from "../utils/machineColors";

import ModelWrapper from "../common/ModelWrapper";

export default function Conveyor({
    prediction,
    setSelectedMachine,
    position = [0,0,0],
    scale = 1,
    rotation = [0,0,0]
}){

    const { scene } = useGLTF("/models/conveyor.glb");

    const model = useMemo(()=>scene.clone(),[scene]);

    const score = prediction?.prediction?.healthScore ?? 100;

    model.traverse(child=>{

        if(child.isMesh){

            child.material = child.material.clone();

            child.material.color.set(machineColor(score));

        }

    });

    return(

        <group
            position={position}
            rotation={rotation}
            scale={scale}
        >
        <ModelWrapper targetHeight={2.5}>
            <primitive
             object={model}
             onPointerDown={(e) => {
                 e.stopPropagation();
                 console.log("======= CONVEYOR CLICKED =======");
                 console.log(prediction);
                 console.log("================================");
                 setSelectedMachine(prediction);
                }}
            />
        </ModelWrapper>

            <FloatingLabel

                position={[0,2.5,0]}

                machine="Conveyor"

                score={score}

            />

        </group>

    );

}

useGLTF.preload("/models/conveyor.glb");