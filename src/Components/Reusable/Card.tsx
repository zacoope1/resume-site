import styled from "styled-components";

export const Card = ({ children }: any) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  position: relative;
  display: flex;
`;
