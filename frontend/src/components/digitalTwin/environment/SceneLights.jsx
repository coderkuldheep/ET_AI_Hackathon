import { Environment } from "@react-three/drei";

export default function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.8} />

            <directionalLight
                position={[10, 15, 10]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <directionalLight
                position={[-10, 8, -5]}
                intensity={0.8}
            />

            <Environment preset="warehouse" />
        </>
    );
}