import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

export default function ModelWrapper({

    children,

    targetHeight = 3

}) {

    const group = useRef();

    useLayoutEffect(() => {

        if (!group.current) return;

        // Calculate original size
        const box = new THREE.Box3().setFromObject(group.current);

        const size = new THREE.Vector3();

        box.getSize(size);

        if (size.y === 0) return;

        // Auto scale
        const scale = targetHeight / size.y;

        group.current.scale.setScalar(scale);

        // Recalculate after scaling
        const scaledBox = new THREE.Box3().setFromObject(group.current);

        const center = new THREE.Vector3();

        scaledBox.getCenter(center);

        // Center model
        group.current.position.set(
            -center.x,
            -scaledBox.min.y,
            -center.z
        );

    }, []);

    return (

        <group ref={group}>

            {children}

        </group>

    );

}