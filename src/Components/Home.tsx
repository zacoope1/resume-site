import { Table, TableRow } from "./Reusable/Table";
import styled from "styled-components";
import { Card } from "./Reusable/Card";
import { Pill } from "./Reusable/Pill";
import { Section, Sections } from "./Reusable/Section";

const LinkedInLink = "https://www.linkedin.com/in/zachary-a-cooper/";
const GithubLink = "https://github.com/zacoope1";

export const Home = (): JSX.Element => {
  return (
    <ContentContainer>
      <Sections>
        <Section>
          <h1>Links</h1>
          <Table>
            <TableRow>
              <Pill clickable link={LinkedInLink} icon="Linkedin" />
              <Pill clickable link={GithubLink} icon="Github" />
              <Pill clickable link={GithubLink} icon="Text" text="Email Me" />
            </TableRow>
          </Table>
        </Section>
        <Section>
          <h1>About Me</h1>
        </Section>
        <Section>
          <h1>Toolset</h1>
          <Card>
            <Table>
              <TableRow>
                <Pill icon="Typescript" />
                <Pill icon="React" />
                <Pill icon="Angular" />
                <Pill icon="Nodejs" />
                <Pill icon="Html" />
                <Pill icon="Css" />
              </TableRow>
              <TableRow>
                <Pill icon="C#" />
                <Pill icon="Dotnet" />
                <Pill icon="Java" />
                <Pill icon="Spring" />
                <Pill icon="Python" />
              </TableRow>
              <TableRow>
                <Pill icon="Postgres" />
                <Pill icon="MsSql" />
              </TableRow>
              <TableRow>
                <Pill icon="Azure" />
                <Pill icon="Aws" />
              </TableRow>
            </Table>
          </Card>
        </Section>
        <Section>
          <h1>Work History</h1>
        </Section>
        <Section>
          <h1>Contact</h1>
        </Section>
      </Sections>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  margin: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
