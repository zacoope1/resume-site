import { PageProps } from "App";
import { useEffect } from "react";
import styled from "styled-components";

export const Resume = ({ loading, setLoading }: PageProps): JSX.Element => {
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <ContentContainer>
      <StyledEmbed
        type="application/pdf"
        src="https://docs.google.com/document/d/1onRxPB4Euy1GO9yCkENHq_AeD7f4fqt48zptDFBBMvU/view?usp=sharing&export?format=pdf&embedded=true"
      ></StyledEmbed>
    </ContentContainer>
  );
};

const StyledEmbed = styled.embed`
  width: 100%;
  height: 90vh;
`;

const ContentContainer = styled.div`
  margin: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
