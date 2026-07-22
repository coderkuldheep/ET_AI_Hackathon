import DigitalTwinCanvas from "./DigitalTwinCanvas";

import SceneLights from "./environment/SceneLights";
import FactoryFloor from "./environment/FactoryFloor";

import Pump from "./machines/Pump";
import Conveyor from "./machines/Conveyor";
import PumpJack from "./machines/PumpJack";

import usePredictions from "./hooks/usePredictions";

import CameraController from "./camera/CameraController";
import { MACHINE_CONFIG } from "./config/machineConfig";

export default function DigitalTwinScene({

    selectedMachine,

    setSelectedMachine

}) {

    const machines = usePredictions();

    if (machines.length === 0) {

        return (

            <div
                style={{
                    color: "white",
                    textAlign: "center",
                    padding: 40
                }}
            >
                Loading Digital Twin...
            </div>

        );

    }

    return (

        <div className="scene-container">

            <DigitalTwinCanvas>

                {/* Camera Controller */}

                <CameraController
                    target={selectedMachine}
                />

                {/* Lights */}

                <SceneLights />

                {/* Factory Floor */}

                <FactoryFloor />

                {/* ========================= */}
                {/* Industrial Pump */}
                {/* ========================= */}

                <group

                    position={MACHINE_CONFIG.pump.position}

                    rotation={MACHINE_CONFIG.pump.rotation}

                    scale={MACHINE_CONFIG.pump.scale}

                >
                    <Pump
                        prediction={machines[0]}
                        setSelectedMachine={() =>
                            setSelectedMachine({
                                ...machines[0],
                                position: MACHINE_CONFIG.pump.position,
                                camera: MACHINE_CONFIG.pump.camera
                            })
                        }
                    />

                </group>

                {/* ========================= */}
                {/* Conveyor */}
                {/* ========================= */}

                <group

                    position={MACHINE_CONFIG.conveyor.position}

                    rotation={MACHINE_CONFIG.conveyor.rotation}

                    scale={MACHINE_CONFIG.conveyor.scale}

                >
                    <Conveyor
                        prediction={machines[1]}
                        setSelectedMachine={() =>
                            setSelectedMachine({
                                ...machines[1],
                                position: MACHINE_CONFIG.conveyor.position,
                                camera: MACHINE_CONFIG.conveyor.camera
                            })
                        }
                    />

                </group>

                {/* ========================= */}
                {/* Pump Jack */}
                {/* ========================= */}

                <group

                    position={MACHINE_CONFIG.pumpjack.position}

                    rotation={MACHINE_CONFIG.pumpjack.rotation}

                    scale={MACHINE_CONFIG.pumpjack.scale}

                >
                    <PumpJack
                        prediction={machines[2]}
                        setSelectedMachine={() =>
                            setSelectedMachine({
                                ...machines[2],
                                position: MACHINE_CONFIG.pumpjack.position,
                                camera: MACHINE_CONFIG.pumpjack.camera
                            })
                        }
                    />

                </group>

            </DigitalTwinCanvas>

        </div>

    );

}