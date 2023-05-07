import { Container } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Homepage3D } from "./3D/Homepage3D";

export const Home = (): JSX.Element => {
  return (
    <ContentContainer>
      <StyledCanvas className="Canvas">
        <Homepage3D />
      </StyledCanvas>
      <Container>
        <h1>
          Hi there! I'm Zachary Cooper, a fullstack web developer and cloud
          solutions engineer.
        </h1>
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
