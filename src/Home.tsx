import styled from "styled-components";
export const Home = (): JSX.Element => {
  return (
    <ContentContainer>
      <InfoCard>
        <h1>Home</h1>
      </InfoCard>
    </ContentContainer>
  );
};

export const InfoCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100em;
  height: 50em;
  outline: 1px dashed green;
  background-color: blue;
`;

const ContentContainer = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
