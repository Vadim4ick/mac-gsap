import { Environment, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useStudioControls } from "../../shared/useStudioControls";

const StudioLights = () => {
  const {
    // === Lightformer 1 (левый) ===
    leftIntensity,
    leftX,
    leftY,
    leftZ,
    leftScale,

    // === Lightformer 2 (правый) ===
    rightIntensity,
    rightX,
    rightY,
    rightZ,
    rightScale,

    // === spotLight 1 (спереди-сверху-слева) ===
    spot1Intensity,
    spot1X,
    spot1Y,
    spot1Z,
    spot1Angle,

    // === spotLight 2 (снизу-спереди) ===
    spot2Intensity,
    spot2X,
    spot2Y,
    spot2Z,
    spot2Angle,

    // === spotLight 3 (сверху-спереди) ===
    spot3Intensity,
    spot3X,
    spot3Y,
    spot3Z,
    spot3Angle,
    spot3Decay,
  } = useStudioControls("Studio Lights", {
    // Левый Lightformer
    leftIntensity: { value: 10, min: 0, max: 50, step: 0.5 },
    leftX: { value: -10, min: -30, max: 0, step: 0.5 },
    leftY: { value: 5, min: -20, max: 20, step: 0.5 },
    leftZ: { value: -5, min: -20, max: 20, step: 0.5 },
    leftScale: { value: 10, min: 2, max: 30, step: 0.5 },

    // Правый Lightformer
    rightIntensity: { value: 10, min: 0, max: 50, step: 0.5 },
    rightX: { value: 10, min: 0, max: 30, step: 0.5 },
    rightY: { value: 0, min: -20, max: 20, step: 0.5 },
    rightZ: { value: 1, min: -20, max: 20, step: 0.5 },
    rightScale: { value: 10, min: 2, max: 30, step: 0.5 },

    // spotLight 1
    spot1Intensity: {
      value: Math.PI * 0.2,
      min: 0,
      max: Math.PI * 3,
      step: 0.05,
    },
    spot1X: { value: -2, min: -20, max: 20, step: 0.5 },
    spot1Y: { value: 10, min: -20, max: 30, step: 0.5 },
    spot1Z: { value: 5, min: -20, max: 20, step: 0.5 },
    spot1Angle: { value: 0.15, min: 0.05, max: 1, step: 0.01 },

    // spotLight 2
    spot2Intensity: {
      value: Math.PI * 0.2,
      min: 0,
      max: Math.PI * 3,
      step: 0.05,
    },
    spot2X: { value: 0, min: -20, max: 20, step: 0.5 },
    spot2Y: { value: -25, min: -50, max: 10, step: 0.5 },
    spot2Z: { value: 10, min: -20, max: 30, step: 0.5 },
    spot2Angle: { value: 0.15, min: 0.05, max: 1, step: 0.01 },

    // spotLight 3
    spot3Intensity: {
      value: Math.PI * 1,
      min: 0,
      max: Math.PI * 5,
      step: 0.05,
    },
    spot3X: { value: 0, min: -20, max: 20, step: 0.5 },
    spot3Y: { value: 15, min: -10, max: 100, step: 0.5 },
    spot3Z: { value: 5, min: -20, max: 100, step: 0.5 },
    spot3Angle: { value: 0.15, min: 0.05, max: 1, step: 0.01 },
    spot3Decay: { value: 0.1, min: 0, max: 2, step: 0.01 },
  });

  // Внутри компонента
  const spot1Ref = useRef<THREE.SpotLight>(null!);
  const spot2Ref = useRef<THREE.SpotLight>(null!);
  const spot3Ref = useRef<THREE.SpotLight>(null!);

  // useHelper(spot1Ref, THREE.SpotLightHelper, "cyan");
  // useHelper(spot2Ref, THREE.SpotLightHelper, "yellow");
  // useHelper(spot3Ref, THREE.SpotLightHelper, "white");

  return (
    <group name="lights">
      <Environment resolution={256} background={false}>
        <group>
          {/* Левый софтбокс */}
          <Lightformer
            form="rect"
            intensity={leftIntensity}
            position={[leftX, leftY, leftZ]}
            scale={leftScale}
            rotation-y={Math.PI / 2}
            color="#ffffff"
          />

          {/* Правый софтбокс */}
          <Lightformer
            form="rect"
            intensity={rightIntensity}
            position={[rightX, rightY, rightZ]}
            scale={rightScale}
            rotation-y={Math.PI / 2}
            color="#ffffff"
          />
        </group>
      </Environment>

      {/* Три спота с полным контролем */}
      <spotLight
        ref={spot1Ref}
        position={[spot1X, spot1Y, spot1Z]}
        angle={spot1Angle}
        decay={0}
        intensity={spot1Intensity}
        color="#ffffff"
      />

      <spotLight
        ref={spot2Ref}
        position={[spot2X, spot2Y, spot2Z]}
        angle={spot2Angle}
        decay={0}
        intensity={spot2Intensity}
        color="#ffffff"
      />

      <spotLight
        ref={spot3Ref}
        position={[spot3X, spot3Y, spot3Z]}
        angle={spot3Angle}
        decay={spot3Decay}
        intensity={spot3Intensity}
        color="#ffffff"
      />
    </group>
  );
};

export { StudioLights };
