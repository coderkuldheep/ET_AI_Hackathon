import { Canvas } from "@react-three/fiber";

import { Environment, OrbitControls } from "@react-three/drei";

import FactoryFloor from "./environment/FactoryFloor";
import SceneLights from "./environment/SceneLights";

import Conveyor from "./machines/Conveyor";
import Pump from "./machines/Pump";
import PumpJack from "./machines/PumpJack";

import usePredictions from "./hooks/usePredictions";

export default function DigitalTwinScene({

    selectedMachine,

    setSelectedMachine

}) {

    const predictions = usePredictions();

    return (

        <Canvas

            shadows

            camera={{

                position:[10,8,12],

                fov:45

            }}

        >

            <SceneLights/>

            <Environment preset="warehouse"/>

            <FactoryFloor/>

            <Conveyor

                prediction={predictions.find(

                    p=>p.machine==="Conveyor System"

                )}

                setSelectedMachine={setSelectedMachine}

            />

            <Pump

                prediction={predictions.find(

                    p=>p.machine==="Industrial Pump"

                )}

                setSelectedMachine={setSelectedMachine}

            />

            <PumpJack

                prediction={predictions.find(

                    p=>p.machine==="Oil Pump Jack"

                )}

                setSelectedMachine={setSelectedMachine}

            />

            <OrbitControls/>

        </Canvas>

    );

}