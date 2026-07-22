export default function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.6} />

            <directionalLight
                position={[15, 20, 10]}
                intensity={2}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
            />

            <pointLight
                position={[-8, 8, -8]}
                intensity={0.7}
            />

            <pointLight
                position={[8, 8, 8]}
                intensity={0.7}
            />
        </>
    );
}