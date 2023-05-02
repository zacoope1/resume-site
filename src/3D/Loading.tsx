import { Color, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Group, Vector3 } from "three";
import { DegreesToRadians, GenerateRandomColor } from "./Utilities";

export const Loading = (props: {
  x?: number;
  y?: number;
  z?: number;
}): JSX.Element => {
  const ref: any = useRef();

  const [position, setPosition] = useState<Vector3>(
    new Vector3(props.x || 0, props.y || 0, props.z || -5)
  );
  const [color, setColor] = useState<Color>(GenerateRandomColor());
  const [loadingFinished, setLoadingFinished] = useState<boolean>(false);

  useFrame(() => {
    if (ref && ref.current) {
      ref.current.rotation.z += DegreesToRadians(5);
    }
  });

  const newColor = (): void => {
    setColor(GenerateRandomColor());
  };

  return (
    <group ref={ref} position={position}>
      <mesh onPointerEnter={newColor} position={position}>
        <torusGeometry attach="geometry" args={[3, 0.5, 100, 100, 5.5]} />
        <meshBasicMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
};
