import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function DigitalTwinCanvas({ children }) {
    return (
        <Canvas
            shadows
            camera={{
                position: [0, 14, 28],
                fov: 45,
            }}
            style={{
                width: "100%",
                height: "100%",
                background: "#101827",
            }}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>

            <OrbitControls
                enablePan
                enableRotate
                enableZoom
                maxPolarAngle={Math.PI / 2.1}
            />
        </Canvas>
    );
}