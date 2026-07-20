import { Grid } from "@react-three/drei";

export default function FactoryFloor() {
    return (
        <>
            <gridHelper
                args={[40, 40, "#444", "#222"]}
                position={[0, 0, 0]}
            />

            <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color="#1f2937" />
            </mesh>

            <Grid
                args={[40, 40]}
                cellSize={1}
                cellThickness={0.5}
                cellColor="#555"
                sectionSize={5}
                sectionThickness={1}
                sectionColor="#888"
                fadeDistance={50}
                fadeStrength={1}
            />
        </>
    );
}