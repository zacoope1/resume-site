import React from "react";
import { Center, Text3D } from "@react-three/drei";
import { DegreesToRadians } from "./Utilities";
import { useFrame } from "@react-three/fiber";

export const Homepage3D = (): JSX.Element => {
  const ref: any = React.useRef();

  const [animationFinished, setAnimationFinished] =
    React.useState<boolean>(false);

  const words = [
    "A new hope rises as Zachary Cooper emerges from the deserts of",
    "Arizona State University, his mind filled with knowledge of the",
    "Force of fullstack web development and cloud-based solutions.",
    "With a powerful education in Computer Science, he harnesses his",
    "skills in software engineering to become a master of the digital realm.",
    "",
    "Zachary's journey continues with his joining of the elite Neudesic, an",
    "IBM Company. Through this, he is able to channel his focus to help",
    "empower businesses with cutting-edge technological solutions. His",
    "expertise in web development and cloud-based solutions has proven to",
    "be a formidable asset in his quest to transform the industry.",
    "",
    "With the strength of the Force flowing through him, Zachary has earned",
    "the trust of his allies in Neudesic, and his ability to navigate the",
    "complexities of software development is a force to be reckoned with.",
    "He has demonstrated an unwavering commitment to excellence, driving",
    "success and innovation in every project he undertakes.",
    "",
    "Through his tireless efforts, Zachary has brought balance to the",
    "digital universe, creating new possibilities and paving the way for a",
    "brighter future. Armed with his skills and his passion, he continues",
    "to march forward, bringing his expertise to those in need, and",
    "inspiring a new generation of tech leaders.",
    "",
    "May his path be illuminated by the light of innovation, and may he",
    "continue to use the Force to shape the world around him.",
  ];

  useFrame(() => {
    const currentPos = ref.current.position;
    if (!(currentPos.z < -19)) {
      // ref.current.position.set(
      //   currentPos.x,
      //   currentPos.y + 0.005,
      //   currentPos.z - 0.005
      // );

      ref.current.position.set(
        currentPos.x,
        currentPos.y + 0.01,
        currentPos.z - 0.01
      );
    }

    if (currentPos.z < -19 && ref.current.rotation.x < DegreesToRadians(0)) {
      ref.current.rotation.set(
        ref.current.rotation.x + 0.005,
        ref.current.rotation.y,
        ref.current.rotation.z
      );
    }

    if (currentPos.z < -19 && ref.current.rotation.x > DegreesToRadians(0)) {
      setAnimationFinished(true);
    }
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      {/* <ambientLight intensity={0.75} /> */}
      <pointLight position={[10, 10, 0]} />
      <group
        ref={ref}
        rotation={[DegreesToRadians(-45), 0, 0]}
        position={[2, -20, 0]}
      >
        <Center>
          <Text3D
            position={[0, 3, 0]}
            font={"./fonts/SF_Distant_Galaxy_Regular.json"}
          >
            Zachary Cooper | Software Engineer
            <meshPhongMaterial attach="material" color={"yellow"} />
          </Text3D>
          {words.map((word, index) => {
            return (
              <Text3D
                key={"Word-" + index}
                position={[0, 0 - index, 0]}
                scale={[0.55, 0.55, 0.55]}
                font={"./fonts/SF_Distant_Galaxy_Regular.json"}
              >
                {word}
                <meshPhongMaterial attach="material" color={"yellow"} />
              </Text3D>
            );
          })}
        </Center>
      </group>
    </>
  );
};
