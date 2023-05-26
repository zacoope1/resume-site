import { useLoader, useFrame } from "@react-three/fiber";
import {
  Center,
  MeshReflectorMaterial,
  Text3D,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { DegreesToRadians, StyledCanvas } from "./Utilities";
import * as THREE from "three";
import { PageProps } from "App";

export const Interactive = ({ loading, setLoading }: PageProps) => {
  const group: any = useRef();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <StyledCanvas>
        <color attach="background" args={["#282c34"]} />
        <ambientLight intensity={0.5} />
        <group position={[0, 0, -35]} ref={group} dispose={null}>
          <Center>
            <Text3D
              scale={[5, 5, 5]}
              font={"./fonts/SF_Distant_Galaxy_Regular.json"}
            >
              Under Construction
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </group>
      </StyledCanvas>
    </>
  );
};
