import styled from "styled-components";

export const Section = ({
  children,
  title = undefined,
}: {
  title?: string;
  children?: any;
}) => {
  return (
    <StyledSection>
      {title && <StyledTitle>{title}</StyledTitle>}
      {children}
    </StyledSection>
  );
};

const StyledTitle = styled.h1`
  border-bottom: 1px solid white;
`;

export const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Sections = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  > * {
    margin-bottom: 1em;
  }
`;
