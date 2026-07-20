import { useGLTF } from "@react-three/drei";
import FloatingLabel from "../overlays/FloatingLabel";
import machineColor from "../utils/machineColors";

export default function Pump({
    prediction,
    setSelectedMachine
}) {

    const { scene } = useGLTF("/models/pump.glb");

    const model = scene.clone();

    const score = prediction?.prediction?.healthScore ?? 100;

    model.traverse((child) => {

        if (child.isMesh) {

            child.material = child.material.clone();
            child.material.color.set(machineColor(score));

        }

    });

    return (
        <>
            <primitive
                object={model}
                position={[0, 0, 0]}
                scale={1}
                onClick={() => setSelectedMachine(prediction)}
            />

            <FloatingLabel
                position={[0, 2.5, 0]}
                machine="Pump"
                score={score}
            />
        </>
    );

}

useGLTF.preload("/models/pump.glb");