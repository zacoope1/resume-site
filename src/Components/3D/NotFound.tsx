import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center, Text, useAnimations } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import {
  DegreesToRadians,
  GenerateRandomColor,
  RandomNumberInRange,
} from "./Utilities";
import { useNavigate } from "react-router-dom";
import * as Three from "three";

export const NotFound = (): JSX.Element => {
  return (
    <Canvas shadows="variance">
      <color attach="background" args={["#282c34"]} />
      <ambientLight intensity={0.5} />
      <NotFoundAnimation />
    </Canvas>
  );
};

export const NotFoundAnimation = (): JSX.Element => {
  const textRef: any = useRef();
  const _404String = "404 Page Not Found!";

  useEffect(() => {
    useGLTF.preload(
      "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
    );

    useGLTF.preload(
      "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/house-5/model.gltf"
    );
  }, []);

  const [state, setState] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setState(!state);
    }, 100);
  }, [state]);

  return (
    <group>
      <Center position={[0, 3, -6]}>
        <group ref={textRef}>
          {Array.from(_404String).map((letter, index) => (
            <Text
              key={index}
              position={[-5 + index * 0.75, 0, 0]}
              {...{
                size: 1,
                height: 0.5,
                curveSegments: 32,
              }}
            >
              {letter}
              <meshBasicMaterial
                attach="material"
                color={GenerateRandomColor()}
              />
            </Text>
          ))}
        </group>
      </Center>
      <Druid position={[-2, -2, 0]} rotation={[0, DegreesToRadians(25), 0]} />
      <House position={[2, -2, 0]} />
      <Background />
    </group>
  );
};

const Druid = (props: any) => {
  const group = useRef();
  const { nodes, materials, animations }: any = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );

  const { actions } = useAnimations(animations, group);

  const [druidOpenLine, setDruidOpenLine] = useState<boolean>(true);
  const [druidClicked, setDruidClicked] = useState<boolean>(false);
  const [druidClickCount, setDruidClickCount] = useState<number>(0);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleDruidClicked = (): void => {
    setDruidClickCount(druidClickCount + 1);

    if (timeoutId) clearTimeout(timeoutId);

    const timeout = setTimeout(() => {
      setDruidClickCount(0);
      setDruidClicked(false);
    }, 5000);
    setTimeoutId(timeout);
  };

  useEffect(() => {
    setTimeout(() => {
      setDruidOpenLine(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (druidClickCount > 0 && !druidClicked) {
      actions["PortalOpen"]?.play().setLoop(Three.LoopOnce, 1);
      setDruidClicked(true);
    }
  }, [druidClicked, druidClickCount]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91} onPointerDown={() => handleDruidClicked()}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.druid.geometry}
          material={materials.color_main}
          skeleton={nodes.druid.skeleton}
          animations={animations}
        />
      </group>
      {
        <Text
          font="./fonts/runescape_uf.ttf"
          scale={0.25}
          position={[0, 2, 0]}
          color="#ffff00"
        >
          {druidClicked
            ? druidClickCount < 5
              ? "Oi! Don't click me! Click The House!"
              : druidClickCount < 10
              ? "TRAVELER PLEASE STOP!"
              : "I'M SERIOUS! STOP CLICKING ME!"
            : druidOpenLine
            ? "Hello, friend! It looks like you have wandered off!"
            : "Click on the house to go back home!"}
        </Text>
      }
    </group>
  );
};

const Background = (props: any) => {
  const group: any = useRef();
  const [spheres, setSpheres] = useState<any[]>([]);

  useEffect(() => {
    const _spheres: any[] = [];
    for (let i = 0; i < 1500; i++) {
      _spheres.push({
        position: [
          RandomNumberInRange(-200, 200),
          RandomNumberInRange(-200, 200),
          -50,
        ],
        color: GenerateRandomColor(),
      });
    }
    setSpheres(_spheres);
  }, []);

  useFrame(() => {
    group.current.rotation.z += 0.0025;
  });

  return (
    <group ref={group}>
      {spheres.map((sphere, index) => (
        <mesh {...props} key={`Sphere-${index}`} position={sphere.position}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color={sphere.color} />
        </mesh>
      ))}
    </group>
  );
};

const House = (props: any) => {
  const nav = useNavigate();

  const group: any = useRef();
  const { nodes, materials }: any = useGLTF(
    "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/house-5/model.gltf"
  );

  const [houseHovered, setHouseHovered] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.cursor = houseHovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [houseHovered]);

  useFrame(({ clock }) => {
    if (group && group.current)
      group.current.rotation.y = clock.getElapsedTime() / 2;

    if (houseHovered && group.current.scale.x < 1.25) {
      group.current.scale.x += 0.01;
      group.current.scale.y += 0.01;
      group.current.scale.z += 0.01;
    }

    if (!houseHovered && group.current.scale.x > 1) {
      group.current.scale.x -= 0.01;
      group.current.scale.y -= 0.01;
      group.current.scale.z -= 0.01;
    }
  });

  return (
    <>
      <group
        onPointerEnter={() => setHouseHovered(true)}
        onPointerLeave={() => setHouseHovered(false)}
        onClick={() => nav("/")}
        ref={group}
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Mesh_house_type08.geometry}
          material={materials.border}
        />
        <mesh
          geometry={nodes.Mesh_house_type08_1.geometry}
          material={materials.window}
        />
        <mesh
          geometry={nodes.Mesh_house_type08_2.geometry}
          material={materials.main}
        />
        <mesh
          geometry={nodes.Mesh_house_type08_3.geometry}
          material={materials.roof}
        />
        <mesh
          geometry={nodes.Mesh_house_type08_4.geometry}
          material={materials.door}
        />
      </group>
      {houseHovered && (
        <Text
          font="./fonts/runescape_uf.ttf"
          scale={0.25}
          position={[2, -3, 0]}
          color="#ffff00"
        >
          Go Home!
        </Text>
      )}
    </>
  );
};
