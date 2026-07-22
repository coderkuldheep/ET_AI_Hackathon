import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CameraController({

    selectedMachine

}){

    const controls=useRef();

    const {camera}=useThree();

    useEffect(()=>{

        if(!controls.current) return;

        if(!selectedMachine){

            camera.position.set(0,14,28);

            controls.current.target.set(0,0,0);

            controls.current.update();

            return;

        }

        const p=selectedMachine.camera;

        camera.position.set(...p);

        controls.current.target.set(

            ...selectedMachine.position

        );

        controls.current.update();

    },[selectedMachine]);

    return(

        <OrbitControls

            ref={controls}

            enableDamping

            dampingFactor={0.08}

            minDistance={5}

            maxDistance={45}

        />

    );

}