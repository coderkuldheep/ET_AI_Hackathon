import { Grid } from "@react-three/drei";

export default function FactoryFloor() {
    return (
        <>
            {/* Ground */}
            <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[60, 60]} />
                <meshStandardMaterial color="#374151" />
            </mesh>

            {/* Factory Grid */}
            <Grid
                args={[60, 60]}
                cellSize={1}
                sectionSize={5}
                cellThickness={0.5}
                sectionThickness={1.5}
                cellColor="#4b5563"
                sectionColor="#6b7280"
                fadeDistance={45}
                fadeStrength={1}
                infiniteGrid
            />
        </>
    );
}