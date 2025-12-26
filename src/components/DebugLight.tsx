import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export const DebugSpotLight = () => {
  const light = useRef<THREE.SpotLight>(null!);
  const target = useRef<THREE.Object3D>(null!);

  useHelper(light, SpotLightHelper);

  const controls = useControls("Debug Light", {
    lx: { value: 5, min: -20, max: 20 },
    ly: { value: 10, min: -20, max: 20 },
    lz: { value: 5, min: -20, max: 20 },

    tx: { value: 0, min: -5, max: 5 },
    ty: { value: 0, min: -5, max: 5 },
    tz: { value: 0, min: -5, max: 5 },

    intensity: { value: 2, min: 0, max: 10 },
    angle: { value: 0.3, min: 0.05, max: 1 },
    penumbra: { value: 0.5, min: 0, max: 1 },
  });

  useEffect(() => {
    light.current.target = target.current;
  }, []);

  return (
    <>
      <spotLight
        ref={light}
        position={[controls.lx, controls.ly, controls.lz]}
        intensity={controls.intensity}
        angle={controls.angle}
        penumbra={controls.penumbra}
        castShadow
      />
      <object3D
        ref={target}
        position={[controls.tx, controls.ty, controls.tz]}
      />
    </>
  );
};
