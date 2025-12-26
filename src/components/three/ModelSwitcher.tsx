import {
  PresentationControls,
  type PresentationControlProps,
} from "@react-three/drei";
import { useRef } from "react";
import type { Group, Object3DEventMap } from "three";
import { MackbookModel16 } from "../models/Macbook-16";
import { MackbookModel14 } from "../models/Macbook-14";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMesh = (group: Group<Object3DEventMap>, opacity: number) => {
  if (!group) return;

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      //   child.material.opacity = opacity;
      child.material.transparent = true;
      gsap.to(child.material, {
        opacity,
        duration: ANIMATION_DURATION,
      });
    }
  });
};

const moveGroup = (group: Group<Object3DEventMap>, x: number) => {
  if (!group) return;

  gsap.to(group.position, {
    x: x,
    duration: ANIMATION_DURATION,
  });
};

const controlsConfig: PresentationControlProps = {
  snap: true,
  speed: 1,
  zoom: 1,
  //   polar: [-Math.PI, Math.PI],
  azimuth: [-Infinity, Infinity],
};

const ModelSwitcher = ({
  scale,
  isMobile,
}: {
  scale: number;
  isMobile: boolean;
}) => {
  const smallMacRef = useRef<Group<Object3DEventMap>>(null);
  const largeMacRef = useRef<Group<Object3DEventMap>>(null);

  const showLargeMac = scale === 0.08 || scale === 0.05;

  useGSAP(() => {
    if (showLargeMac) {
      moveGroup(smallMacRef.current!, -OFFSET_DISTANCE);
      moveGroup(largeMacRef.current!, 0);

      fadeMesh(smallMacRef.current!, 0);
      fadeMesh(largeMacRef.current!, 1);
    } else {
      moveGroup(smallMacRef.current!, 0);
      moveGroup(largeMacRef.current!, OFFSET_DISTANCE);

      fadeMesh(smallMacRef.current!, 1);
      fadeMesh(largeMacRef.current!, 0);
    }
  }, [scale]);

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MackbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MackbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export { ModelSwitcher };
