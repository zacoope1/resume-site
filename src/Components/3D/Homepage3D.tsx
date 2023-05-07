import { Text3D } from "@react-three/drei";
import { Suspense } from "react";
import "../../assets/fonts/SF_Distant_Galaxy_Regular";

export const Homepage3D = (): JSX.Element => {
  return (
    <group>
      <Suspense fallback={null}>
        <Text3D font={"../../assets/fonts/SF_Distant_Galaxy_Regular.json"}>
          A new hope rises as Zachary Cooper emerges from the deserts of Arizona
          State University, his mind filled with knowledge of the Force of
          fullstack web development and cloud-based solutions. With a powerful
          education in Computer Science, he harnesses his skills in software
          engineering to become a master of the digital realm.
          <meshNormalMaterial />
        </Text3D>
      </Suspense>
    </group>
  );
};
