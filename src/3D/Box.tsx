import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const Box = (): JSX.Element => {
  const ref: React.MutableRefObject<any> = useRef();

  useFrame(() => {
    if (ref) ref.current.rotation.x = ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  );
};
