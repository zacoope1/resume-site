import { Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Homepage3D } from "./3D/Homepage3D";

export const Home = (): JSX.Element => {
  return (
    <ContentContainer>
      <StyledCanvas className="Canvas">
        <color attach="background" args={["blue"]} />
        <ambientLight intensity={0.5} />
        <Homepage3D />
      </StyledCanvas>
      <Container>
        <p>
          A new hope rises as Zachary Cooper emerges from the deserts of Arizona
          State University, his mind filled with knowledge of the Force of
          fullstack web development and cloud-based solutions. With a powerful
          education in Computer Science, he harnesses his skills in software
          engineering to become a master of the digital realm.
        </p>
        <p>
          Zachary's journey continues with his joining of the elite Neudesic, an
          IBM Company. Through this, he is able to channel his focus to help
          empower businesses with cutting-edge technological solutions. His
          expertise in web development and cloud-based solutions has proven to
          be a formidable asset in his quest to transform the industry.
        </p>
        <p>
          With the strength of the Force flowing through him, Zachary has earned
          the trust of his allies in Neudesic, and his ability to navigate the
          complexities of software development is a force to be reckoned with.
          He has demonstrated an unwavering commitment to excellence, driving
          success and innovation in every project he undertakes.
        </p>
        <p>
          Through his tireless efforts, Zachary has brought balance to the
          digital universe, creating new possibilities and paving the way for a
          brighter future. Armed with his skills and his passion, he continues
          to march forward, bringing his expertise to those in need, and
          inspiring a new generation of tech leaders.
        </p>
        <p>
          May his path be illuminated by the light of innovation, and may he
          continue to use the Force to shape the world around him.
        </p>
      </Container>
      <Container></Container>
    </ContentContainer>
  );
};

const StyledCanvas = styled(Canvas)`
  height: 90vh !important;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
